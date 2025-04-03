const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { BunProceed } = require("./installations/bun");
const { pkgProceed } = require("./installations/pkg");
const { electronProceed } = require("./installations/electron");
const { pythonProceed } = require("./installations/python");
const { FixNodeModules } = require("./installations/fixnode");
const { downloadAndExtractNode } = require("./installations/node22.9");

function isNodeVersionBelow21() {
  const [major] = process.versions.node.split(".").map(Number);
  return major < 21;
}

function isMSVCInstalled() {
  try {
    execSync("cl.exe", { stdio: "ignore" });
    return true;
  } catch (e) {}

  try {
    const vswherePath = path.join(process.env["ProgramFiles(x86)"] || process.env["ProgramFiles"], "Microsoft Visual Studio", "Installer", "vswhere.exe");

    if (fs.existsSync(vswherePath)) {
      const output = execSync(`"${vswherePath}" -latest -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath`).toString().trim();
      return output.length > 0;
    }
  } catch (e) {}

  return false;
}

async function getVSandNodeV() {
  if (!isMSVCInstalled()) {
    console.log("❌ Visual Studio C++ Build Tools or Desktop Development with C++ is not installed.");
    console.log("👉 Install it from: https://visualstudio.microsoft.com/downloads/");
    process.exit(1);
  } else {
    console.log("✅ MSVC is installed.");
  }

  if (!isNodeVersionBelow21()) {
    console.log("Please install a Node.js version lower than 21 for pkg compatibility.");
    process.exit(1);
  } else {
    console.log("✅ node <21 checked.");
  }

}
async function checkDependencies() {
  await BunProceed();
  await pkgProceed();
  await pythonProceed();
  await electronProceed();
  await downloadAndExtractNode();
}

function checkNodeModules() {
  const paths = [
    { dir: path.join(__dirname, "node_modules"), installCmd: "npm ci" },
    { dir: path.join(__dirname, "sourcemap", "node_modules"), installCmd: "cd sourcemap && npm ci" },
  ];

  let needInstall = false;
  for (const { dir, installCmd } of paths) {
    if (!fs.existsSync(dir)) {
      console.log(`❌ Missing: ${dir}`);
      console.log(`📥 Installing dependencies in ${dir}...`);
      execSync(installCmd, { stdio: "inherit" });
      needInstall = true;
    }
  }

  if (!needInstall) {
    console.log("✅ All dependencies are installed.");
  }
}

async function checkInstall() {
  await getVSandNodeV()
  checkNodeModules();
  await FixNodeModules();
  await checkDependencies();
}
checkInstall();
