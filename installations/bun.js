const { execSync, exec } = require("child_process");
const readline = require("readline");

function isBunInstalled() {
  try {
    execSync("bun --version", { stdio: "ignore" });
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

async function BunProceed() {
  if (isBunInstalled()) {
    console.log("✅ Bun is already installed.");
    return;
  }

  console.log("⚠️ Bun is not installed.");

  const answer = await askUser("Would you like to proceed with the easy installation of Bun? (Y/N): ");

  if (answer === "y" || answer === "yes") {
    try {
      console.log("📦 Installing Bun using PowerShell...");
      exec('powershell -c "irm bun.sh/install.ps1 | iex"', (err, stdout, stderr) => {
        if (err) {
          console.error("❌ Installation failed:", err);
        } else {
          console.log("✅ Bun installation completed. Please restart the script.");
        }
      });
    } catch (e) {
      console.error("❌ Error during installation:", e);
    }
  } else {
    console.log("❌ Please install Bun manually and restart the script.");
    console.log("ℹ️ Installation guide: https://bun.sh/docs/installation");
  }
}

module.exports = { BunProceed };
