const { execSync } = require("child_process");
const readline = require("readline");

function isPkgInstalled() {
  try {
    execSync("pkg --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function askUser(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

async function installPkg() {
  try {
    console.log("📦 Installing pkg globally...");
    execSync("npm install -g pkg@latest", { stdio: "inherit" });
    console.log("✅ pkg installed successfully!");
  } catch (err) {
    console.error("❌ Failed to install pkg:", err.message);
  }
}

async function pkgProceed() {
  if (isPkgInstalled()) {
    console.log("✅ pkg is already installed.");
    return;
  }

  console.log("⚠️ pkg is not installed.");
  const answer = await askUser("Would you like to install it globally now? (Y/N): ");

  if (answer === "y" || answer === "yes") {
    await installPkg();
  } else {
    console.log("❌ Please install pkg manually using: npm install -g pkg@latest");
  }
}
module.exports = { pkgProceed };
