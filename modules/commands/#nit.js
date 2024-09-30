const fs = require("fs");
module.exports.config = {
  name: "nit",
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
  if(react.includes("nitya") ||
     react.includes("Nitya") || react.includes("Aryan ki gf") || react.includes("aryan ki gf") ||
react.includes("owner ki gf") ||
react.includes("Owner ki gf") ||     
react.includes("NITYA")) {
    var msg = {
        body: `${name} 𝐎𝐘𝐄 𝐌𝐄𝐑𝐈 𝐌𝐀𝐋𝐊𝐈𝐍 𝐊𝐎 𝐐 𝐘𝐀𝐀𝐃 𝐊𝐈𝐘𝐀 𝐌𝐀𝐈 𝐓𝐎 𝐏𝐔𝐑𝐈 𝐅𝐀𝐌𝐋𝐘 𝐋𝐄 𝐀𝐘𝐀 💕✿
मांगी थी खुदा से ये दुआ मैंने कब सेदेना एक हमसफर जो हो अलग सबसेरब ने मिलन करा दिया आपसेबोला यहीं अनमोल है सबसे !`,attachment: fs.createReadStream(__dirname + `/noprefix/Nit.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
