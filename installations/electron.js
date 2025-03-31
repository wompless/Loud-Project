const { execSync } = require("child_process");
const readline = require("readline");

function iselectronInstalled() {
  try {
    execSync("electron -v", { stdio: "ignore" });
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

async function installelectron() {
  try {
    console.log("📦 Installing electron globally...");
    execSync("npm install -g electron@latest", { stdio: "inherit" });
    console.log("✅ electron installed successfully!");
  } catch (err) {
    console.error("❌ Failed to install electron:", err.message);
  }
}

async function electronProceed() {
  if (iselectronInstalled()) {
    console.log("✅ electron is already installed.");
    return;
  }

  console.log("⚠️ electron is not installed.");
  const answer = await askUser("Would you like to install it globally now? (Y/N): ");

  if (answer === "y" || answer === "yes") {
    await installelectron();
  } else {
    console.log("❌ Please install electron manually using: npm install -g electron@latest");
  }
}
module.exports = { electronProceed };
