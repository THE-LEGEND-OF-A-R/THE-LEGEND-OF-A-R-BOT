const fs = require("fs");
module.exports.config = {
  name: "isha",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("isha") ||
     react.includes("ISHA") || react.includes("Isha Khan") || react.includes("iSHA") ||
react.includes("Isha") ||
react.includes("ISHA") ||     
react.includes("isha")) {
    var msg = {
        body: `${name}💐𝙰𝙻𝙴 𝙼𝙾𝚁𝙸 𝙼𝙰𝙸𝚈𝙰 𝚈𝙴 𝙺𝚈𝙰 𝙳𝙴𝙺𝙷 𝚁𝙷𝙰🤧 𝙷𝚄𝙽 𝙼𝙰𝙸 𝙰𝙱 𝙼𝙴𝚁𝙸🥴 𝙼𝙰𝙻𝙺𝙸𝙽 𝙺𝙰 𝙺𝚈𝙰 𝙷𝙾𝙶𝙰
        𝙶𝚁𝙿 𝚆𝙰𝙻𝙾 𝙸𝚂𝙽𝙴 𝙼𝙴𝚁𝙴 𝙼𝙰𝙻𝙸𝙺 𝙿𝙴 𝙺𝙰𝙻𝙰 𝙹𝙰𝙳𝚄 𝙺𝙸𝚈𝙰 𝙷𝙰𝙸😹💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Isha.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
