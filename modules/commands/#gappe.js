const fs = require("fs");
module.exports.config = {
  name: "golgape",
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
  if(react.includes("fast food") ||
     react.includes("pani puri") || react.includes("Golgape") || react.includes("MOMOS") ||
react.includes("Golgape") ||
react.includes("GOLGPE") ||     
react.includes("golgape")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐀 𝐆𝐎𝐋𝐆𝐏𝐄 𝐀𝐆𝐀𝐘𝐀💐✿
 •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 𝐁𝐘  𝐀𝐑𝐘𝐍𝐀𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/noprefix/Golgppe.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }