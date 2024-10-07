const fs = require("fs");
module.exports.config = {
  name: "faisu",
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
  if(react.includes("Faisu") ||
     react.includes("faisu") || react.includes("faisu khan") || react.includes("@Faisu khan") ||
react.includes("@faisu khan") ||
react.includes("FAISU KHAN") ||     
react.includes("FAISU")) {
    var msg = {
        body: `${name}  𝐀𝐁 𝐘𝐀𝐀𝐋 𝐀𝐁𝐇𝐈 𝐌𝐀𝐈 𝐏𝐀𝐑𝐄𝐒𝐇𝐀𝐍 𝐇𝐔𝐍 𝐋𝐀𝐃𝐊𝐈 𝐊𝐄 𝐂𝐇𝐀𝐊𝐊𝐑 𝐌𝐄 𝐏𝐀𝐈𝐑 𝐏𝐄 𝐊𝐔𝐋𝐀𝐃𝐈 𝐌𝐀𝐑 𝐋i
        जब तक सूरज चांद रहेगा 
तब तक, तेरी बेज्जती करना 
मेरा काम रहेगा।
        💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_Faisu.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
