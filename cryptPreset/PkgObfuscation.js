const jsObfuscator = require("javascript-obfuscator");
const fs = require("fs");

async function ObfuscateFile(params) {
  const { filePath, outputPath } = params;

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const obfuscationResult = jsObfuscator.obfuscate(fileContent, {
      identifierNamesGenerator: "hexadecimal",
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.6,
      renameGlobals: true,
      splitStrings: true,
      transformObjectKeys: true,
      stringArrayThreshold: 1,
      numbersToExpressions: true,
      debugProtection: false,
      stringArrayCallsTransform: false,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 1,
      splitStringsChunkLength: 2,
      selfDefending: false,
      stringArrayWrappersChainedCalls: false,
      stringArrayWrappersParametersMaxCount: 3,
      stringArrayWrappersType: "function",
      unicodeEscapeSequence: true,
      stringArrayEncoding: ["rc4", "base64"],
      stringArray: true,
      compact: false,
      target: "node",
    });
    fs.writeFileSync(outputPath, obfuscationResult.getObfuscatedCode());
    console.log(`File Obfuscated ${outputPath}`);
  } catch (error) {
    console.error("Error:", error);
  }
}


module.exports= ObfuscateFile;