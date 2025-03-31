const { execSync } = require("child_process");
const readline = require("readline");

function isPythonInstalled() {
  try {
    const output = execSync("python --version", { encoding: "utf8" });
    const versionMatch = output.match(/Python (\d+)\.(\d+)\.(\d+)/);
    if (!versionMatch) return false;

    const major = parseInt(versionMatch[1]);
    return major >= 3;
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

async function openPythonInstaller() {
  const url = "https://www.python.org/downloads/release/python-31111/";
  console.log(`🔗 Opening installer page: ${url}`);
  execSync("start " + url);
}

async function pythonProceed() {
  if (isPythonInstalled()) {
    console.log("✅ Python is already installed.");
    return;
  }

  console.log("🐍 Python is not installed.");
  const answer = await askUser("Would you like to open the official installer page? (Y/N): ");

  if (answer === "y" || answer === "yes") {
    await openPythonInstaller();
  } else {
    console.log("❌ Please install Python manually and re-run this script.");
  }
}

module.exports = { pythonProceed };
