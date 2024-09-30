const fs = require("fs");
module.exports.config = {
  name: "kaliya",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE SILENT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("kaliya") ||
     react.includes("Kali charan") || react.includes("Kali Charan") || react.includes("Kaliya") ||
react.includes("Kaliya") ||
react.includes("kaliya") ||     
react.includes("Kaaliya Mere Kaali Charan")) {
    var msg = {
        body: `${name} 🦢😂𝐌𝐈𝐋𝐘𝐄 𝐇𝐔𝐌𝐀𝐑𝐄⚫ 𝐊À𝐋𝐈𝐘À 𝐁𝐇𝐀𝐈𝐘À❤️ 𝐒𝐄 𝐉𝐎 𝐃𝐈𝐋 𝐊 😛SÀÀ𝐅 𝐒𝐇À𝐊À𝐋 𝐒𝐄 𝐊À𝐋𝐄 𝐇À𝐈😂😂`,attachment: fs.createReadStream(__dirname + `/noprefix/Kaliya.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }