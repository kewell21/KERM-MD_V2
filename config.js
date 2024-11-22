//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "2250546526324";
global.owner = process.env.OWNER_NUMBER || "2250546526324";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VKOGo1VlhtNmNZdnlaVlZKWTdBRWVLUVZWN3M3YjZtaExFOUNseEZuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicE1uS1pRSmxoWVlYNlJJWkp4NU1POWpCZk8weXhOVE5HMDBYUWRoNWtCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvUFpJOTl6V2xObEFLM1ZxaklZY2ppTTZPMUk0UDlLSTVoL2RvYnpLZG1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYVYrNkhpSlNYMzNpZkUrd09XbWV6bHJDS2p4MkwvYThKVlBuYVlER0RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DQXI4djU3TVZ0UUI2eXVaeHlRM2hHdU5NWVpoNHdON1p2MWxkOUMrMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJJMlpWZVNTUTQxSTM3ZXdIZ0JuT2hYR0huejdtZWlQb3JzR0RFS2pqU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlHU2xLMUt4cE1LQkphcGZnazYrdXBuVk5sOGRRTFR0c3E3MHpEem4zOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDBqQkx0YW1JUXdnUWlreFNGK3FScDUyTDB1NjVlQW8zaTJhRHdOUXpHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFxSGhsbFpYRks5eFdQbUloVU1TOEV2MWFtdjFoaUdvbGNHNm1lL05PZ0h4bVlDQitvSTVXRXJwTVBUSXJXN2treFVKUkpiQnJjaU9DQjNMdGxDWUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJEVmtQaEtZelNiZTN6YkhMZWtUY0hPMlJPWDNOazhFRTR2b3pzU3FqL1I0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUZm81Uk9palFJR0hJanlYV3hIeHlRIiwicGhvbmVJZCI6IjE3NTFmN2I3LWI4YWUtNDMwMC1iNjczLTZhZjhlYjlhY2Y3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjcXBKdU9QbGZsN1VCZ295WlVOSmVzVmorT289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFFkY1lHdU0zQnFMTGJIblhOYlRXa045dGY0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZZMzc4N1NUIiwibWUiOnsiaWQiOiIyMjU0NjUyNjMyNDoyOEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJBdE44R0VLYjJnN29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV2g1dnpaL1AyVlM5NVlJUUhFSDRBenl6RXZzaEpveVk2R1I4MnozRm5Hdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL0dIdHRTb2g3NEJMZjFKL1UraUFYZE9scU8zeWI3VXgwbFVFNEtVaVdvb3JxUVUwVEpaWEV2TlZnYVY0bVJvSkV3SjRaZHdKazlaOThiaWp0NHorRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJOY1JJTWRMOEFHQ01lelVwSVg5VkxsVnBaSGxWZEhNT1o2OW1scEhHWTRZVTR6d1I2K3F4K3ZFLzlaZXBCOExSSFNqa1k1bTA4QmxCR3MxVFlCakRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NDY1MjYzMjQ6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVm9lYjgyZno5bFV2ZVdDRUJ4QitBTThzeEw3SVNhTW1PaGtmTnM5eFp4cyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjMxMTg1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHYU8ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "🇰 🇭 🇦 🇱 🇮 🇱 ",
  packname: process.env.PACK_NAME || "𝙓𝙓𝙇🌹 𝞙𝞖𝞓𝙇𝞘𝙇🍆 𝘿𝞗𝙐𝞑𝙇𝞢👅 𝙁𝞓𝘾𝞢🌴™",
  botname: process.env.BOT_NAME || "𝙆𝙃𝘼𝙇𝙄𝙇 𝙆𝙀𝙉 𝙈𝙊𝙄🤤𖤐",
  ownername: process.env.OWNER_NAME || "🇰 🇭 🇦 🇱 🇮 🇱  🇩 🇪 🇸 🇹 🇷 🇴 🇾 🇪 🇷 ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
