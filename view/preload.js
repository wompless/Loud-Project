const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  startBuild: (config) => ipcRenderer.send("start-build", config),
  onBuildComplete: (callback) => ipcRenderer.on("build-complete", (_, msg) => callback(msg)),
  onBuildError: (callback) => ipcRenderer.on("build-error", (_, err) => callback(err)),
  
  minimizeApp: () => ipcRenderer.send("minimizeApp"),
  maximizeRestoreApp: () => ipcRenderer.send("maximizeRestoreApp"),
  closeApp: () => ipcRenderer.send("closeApp"),
  onMaximized: (callback) => ipcRenderer.on("isMaximized", callback),
  onRestored: (callback) => ipcRenderer.on("isRestored", callback),
});
