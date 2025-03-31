const fs = require("fs");
const path = require("path");

function fixDpapiForBun() {
  const dpapiPath = path.join(__dirname, "..", "sourcemap", "node_modules", "@primno", "dpapi", "dist", "index.js");
  if (!fs.existsSync(dpapiPath)) {
    console.warn("⚠️ @primno/dpapi not found, skipping Bun fix.");
    return;
  }

  let content = fs.readFileSync(dpapiPath, "utf8");
  const fixedContent = content.replace(
    /dpapi = require\("node-gyp-build"\)\(path_1\.default\.join\(__dirname, "\.\."\)\);/g,
    `dpapi = require("../prebuilds/win32-x64/@primno+dpapi.node");`
  );

  if (content !== fixedContent) {
    fs.writeFileSync(dpapiPath, fixedContent, "utf8");
    console.log("✅ Fixed @primno/dpapi for Bun compatibility.");
  } else {
    console.log("✔️ @primno/dpapi already patched.");
  }
}

function fixSqliteForBun() {
  const sqlitePath = path.join(__dirname, "..", "sourcemap", "node_modules", "sqlite3", "lib", "sqlite3-binding.js");

  if (!fs.existsSync(sqlitePath)) {
    console.warn("⚠️ sqlite3 not found, skipping Bun fix.");
    return;
  }

  let content = fs.readFileSync(sqlitePath, "utf8");

  const fixedContent = content.replace(
    /module\.exports = require\('bindings'\)\('node_sqlite3\.node'\);/g,
    `module.exports = require('../build/Release/node_sqlite3.node');`
  );

  if (content !== fixedContent) {
    fs.writeFileSync(sqlitePath, fixedContent, "utf8");
    console.log("✅ Fixed sqlite3 for Bun compatibility.");
  } else {
    console.log("✔️ sqlite3 already patched.");
  }
}
async function FixNodeModules() {
  fixDpapiForBun();
  fixSqliteForBun();
}

module.exports = { FixNodeModules };
