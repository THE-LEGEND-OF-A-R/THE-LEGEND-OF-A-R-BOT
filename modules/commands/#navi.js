const fs = require("fs");
module.exports.config = {
  name: "navi",
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
  if(react.includes("ईद-ए-मिलाद-उन-नबी मुबारक हो") ||
     react.includes("ईद-ए-मिलाद-उन-नबी मुबारk") || react.includes("Eid e milad un navi Mubarak") || react.includes("🇸🇦") ||
react.includes("🇸🇦🇸🇦") ||
react.includes("🇸🇦🇸🇦🇸🇦") ||     
react.includes("🇸🇦🇸🇦🇸🇦🇸🇦")) {
    var msg = {
        body: `${name} 🦢🍒•🇸🇦सरकार की🇸🇦 आमद मरहबा🇸🇦

🇸🇦सरदार की🇸🇦 आमद मरहबा🇸🇦

🇸🇦सालार की🇸🇦 आमद मरहबा🇸🇦

🇸🇦रसूल की 🇸🇦आमद मरहबा🇸🇦

🇸🇦बशीर की 🇸🇦आमद मरहबा🇸🇦

🇸🇦रऊफ़ की 🇸🇦आमद मरहबा🇸🇦

🇸🇦करीम की 🇸🇦आमद मरहबा🇸🇦•`,attachment: fs.createReadStream(__dirname + `/noprefix/Nabi.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }