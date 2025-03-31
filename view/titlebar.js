const maxResBtn = document.getElementById("maxResBtn");

document.getElementById("minimizeBtn").addEventListener("click", () => {
    window.electronAPI.minimizeApp();
});

maxResBtn.addEventListener("click", () => {
    window.electronAPI.maximizeRestoreApp();
});

window.electronAPI.onMaximized(() => changeMaxResBtn(true));
window.electronAPI.onRestored(() => changeMaxResBtn(false));

function changeMaxResBtn(isMaximizedApp) {
    let img = document.getElementById("maxRes");
    img.srcset = isMaximizedApp
        ? "icons/restore-w-10.png 1x, icons/restore-w-12.png 1.25x, icons/restore-w-15.png 1.5x, icons/restore-w-15.png 1.75x, icons/restore-w-20.png 2x, icons/restore-w-20.png 2.25x, icons/restore-w-24.png 2.5x, icons/restore-w-30.png 3x, icons/restore-w-30.png 3.5x"
        : "icons/max-w-10.png 1x, icons/max-w-12.png 1.25x, icons/max-w-15.png 1.5x, icons/max-w-15.png 1.75x, icons/max-w-20.png 2x, icons/max-w-20.png 2.25x, icons/max-w-24.png 2.5x, icons/max-w-30.png 3x, icons/max-w-30.png 3.5x";
}

document.getElementById("closeBtn").addEventListener("click", () => {
    window.electronAPI.closeApp();
});