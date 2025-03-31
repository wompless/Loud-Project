const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const buildProject = require("./Build.js");

let win;

async function startApp() {
  createWindow();
}

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(__dirname, 'assets/LoudProject.png'),
    width: 1100,
    height: 700,
    frame: false,
    movable: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "view", "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile("./view/index.html");
}

app.whenReady().then(() => {
  startApp();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on("minimize-window", () => {
  if (win) {
    win.minimize();
  }
});

ipcMain.on("close-window", () => {
  if (win) {
    win.close();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("start-build", (event, config) => {
  console.log("Received config from renderer:", config);

  buildProject(config)
    .then(() => {
      console.log("Build process completed!");
      event.reply("build-complete", "Build complete");
    })
    .catch((error) => {
      console.error("Error during build process:", error);
      event.reply("build-error", "Build error");
    });
});
