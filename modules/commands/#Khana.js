//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "KHANA",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", //////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("KHANA") ||
     react.includes("khana") || react.includes("lunch") || react.includes("kana") ||
react.includes("dinner") ||
react.includes("kha lo")) {
		var msg = {
				body: `🙂 𝚈𝙰 𝙻𝙾 𝙹𝙰𝙰𝙽𝚄 𝙺𝙷𝙰𝙽𝙰 𝙺𝙷𝙰𝙾 🙂`,attachment: fs.createReadStream(__dirname + `Khana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }