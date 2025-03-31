const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { BunProceed } = require("./installations/bun");
const { pkgProceed } = require("./installations/pkg");
const { electronProceed } = require("./installations/electron");
const { pythonProceed } = require("./installations/python");
const { FixNodeModules } = require("./installations/fixnode");

async function checkDependencies() {
  await BunProceed();
  await pkgProceed();
  await pythonProceed();
  await electronProceed();
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
  checkNodeModules();
  await FixNodeModules();
  await checkDependencies();
}
checkInstall();
