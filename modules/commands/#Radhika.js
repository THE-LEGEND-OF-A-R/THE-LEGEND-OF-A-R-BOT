const fs = require("fs");
module.exports.config = {
  name: "Radhika",
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
  if(react.includes("RADHIKA") ||
     react.includes("rADHIKA") || react.includes("radhika") || react.includes("RADHIKA") ||
react.includes("Radhika") ||
react.includes("radhika") ||     
react.includes("RADHIKA")) {
    var msg = {
        body: `${name}💐😹𝐀𝐁 𝐘𝐀𝐋 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐈 𝐅𝐑𝐈𝐍𝐃 𝐊𝐎 𝐐 𝐘𝐀𝐀𝐃 𝐊𝐈𝐘𝐀
        𝐘𝐄 𝐋𝐎 𝐀𝐀𝐆𝐘𝐈 𝐑𝐀𝐃𝐇𝐈𝐊𝐀 𝐖𝐎𝐑𝐋𝐃 𝐊𝐈 𝐁𝐄𝐒𝐓 𝐖𝐈𝐅𝐄 𝐑𝐀𝐃𝐇𝐈𝐊𝐀 25 𝐇𝐔𝐒𝐁𝐀𝐍𝐃 𝐊𝐈 𝐖𝐈𝐅𝐄😹💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Radhika.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
