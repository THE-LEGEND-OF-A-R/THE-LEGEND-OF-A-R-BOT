const fs = require("fs");
module.exports.config = {
  name: "gali",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Bahanchod") ||
     react.includes("bc") || react.includes("Madarchod") || react.includes("Bc") ||
react.includes("bahanchod") ||
react.includes("madharchod")) {
    var msg = {
        body: `𝐃𝐄𝐊𝐇 𝐁𝐎𝐓 S𝐌𝐉𝐇 𝐊À𝐑 𝐆𝐀𝐋𝐈 𝐍À 𝐃𝐄 𝐘𝐀𝐇𝐈 𝐏𝐄𝐋 𝐃𝐔𝐍𝐆À👿`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }