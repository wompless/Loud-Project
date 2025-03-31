const jsObfuscator = require("javascript-obfuscator");
const fs = require("fs");

async function ObfuscateFile(params) {
  const { filePath, outputPath } = params;

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const obfuscationResult = jsObfuscator.obfuscate(fileContent, {
     optionsPreset: "medium-obfuscation",
      ignoreImports: true,
    });
    fs.writeFileSync(outputPath, obfuscationResult.getObfuscatedCode());
    console.log(`File Obfuscated ${outputPath}`);
  } catch (error) {
    console.error("Error:", error);
  }
}


module.exports= ObfuscateFile;