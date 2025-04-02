const fs = require("fs");
const path = require("path");


function fixDpapiForBun() {
  const dpapiPath = path.join(__dirname, "..", "sourcemap", "node_modules", "", "node-dpapi-prebuilt", "index.js");
  if (!fs.existsSync(dpapiPath)) {
    console.warn("⚠️ dpapi not found, skipping Bun fix.");
    return;
  }

  let content = fs.readFileSync(dpapiPath, "utf8");
  const fixedContent = content.replace(
    /const\s+dpapi\s*=\s*getDpapi\(\);/g,
    `dpapi = require("./bin/x64/node-dpapi.node");`
  );

  if (content !== fixedContent) {
    fs.writeFileSync(dpapiPath, fixedContent, "utf8");
    console.log("✅ Fixed dpapi for Bun compatibility.");
  } else {
    console.log("✔️ dpapi already patched.");
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
