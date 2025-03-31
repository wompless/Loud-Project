const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  startBuild: (config) => ipcRenderer.send("start-build", config),
  onBuildComplete: (callback) => ipcRenderer.on("build-complete", (_, msg) => callback(msg)),
  onBuildError: (callback) => ipcRenderer.on("build-error", (_, err) => callback(err)),

  minimizeWindow: () => ipcRenderer.send("minimize-window"),
  closeWindow: () => ipcRenderer.send("close-window"),
});
