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
        body: `${name} 𝐌𝐄𝐑𝐄 𝐃𝐎𝐒𝐓𝐎😱 𝐈𝐒𝐇𝐀 𝐊𝐎 𝐃𝐈𝐒𝐓𝐑𝐔𝐁 𝐍𝐀 🤧𝐊𝐑𝐎 𝐀𝐁𝐇𝐈 𝐒𝐇𝐄𝐕𝐈𝐍𝐆😜 𝐊𝐀𝐑𝐀 𝐑𝐇𝐈 𝐇𝐀𝐈
        𝐘𝐀𝐊𝐄𝐄𝐍 𝐍À 𝐇𝐎 𝐓𝐎 😛𝐃𝐄𝐊𝐇 𝐋𝐎 😹💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Isha.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
