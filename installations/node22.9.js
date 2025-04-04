const fs = require("fs");
const path = require("path");
const https = require("https");
const { execSync } = require("child_process");


async function downloadAndExtractNode() {
  const url = "https://nodejs.org/dist/v22.9.0/node-v22.9.0-win-x64.zip";
  const zipPath = path.join(__dirname, "node.zip");
  const extractPath = path.join(__dirname, "node_extracted");
  const destinationFolder = path.join(__dirname, "..", "cryptPreset", "pkg", "resources", "pkg");
  const finalNodePath = path.join(destinationFolder, "node-22.9");

  if (fs.existsSync(finalNodePath)) {
    console.log(`✅ node-22.9 already exists in ${destinationFolder}, skipping download.`);
    return;
  }

  try {
    console.log("📥 Downloading Node.js...");

    await new Promise((resolve, reject) => {
      const file = fs.createWriteStream(zipPath);
      https.get(url, (response) => {
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to download: ${response.statusCode}`));
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      }).on("error", reject);
    });

    console.log("✅ Download complete!");

    console.log("📂 Extracting ZIP...");
    if (!fs.existsSync(extractPath)) fs.mkdirSync(extractPath, { recursive: true });

    execSync(`tar -xf "${zipPath}" -C "${extractPath}"`);

    console.log("✅ Extraction complete!");

    const extractedFiles = fs.readdirSync(extractPath, { withFileTypes: true });
    let nodeExePath = "";

    for (const dir of extractedFiles) {
      if (dir.isDirectory()) {
        const possibleNodePath = path.join(extractPath, dir.name, "node.exe");
        if (fs.existsSync(possibleNodePath)) {
          nodeExePath = possibleNodePath;
          break;
        }
      }
    }

    if (!nodeExePath) throw new Error("❌ node.exe not found after extraction!");

    if (!fs.existsSync(destinationFolder)) fs.mkdirSync(destinationFolder, { recursive: true });

    fs.renameSync(nodeExePath, finalNodePath);
    console.log(`✅ node.exe renamed to ${finalNodePath}`);

    fs.unlinkSync(zipPath);
    fs.rmSync(extractPath, { recursive: true, force: true });
    console.log("🧹 Cleanup complete!");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

module.exports = {
  downloadAndExtractNode,
};
