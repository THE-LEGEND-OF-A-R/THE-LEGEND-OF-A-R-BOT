const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "Akki",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/wHm046x.jpeg",
            "https://i.imgur.com/aWWnaLI.jpeg",
            "https://i.imgur.com/z2AVBBl.jpeg",
            "https://i.imgur.com/RFQMSoc.jpeg",
            "https://i.imgur.com/iHF4V6T.jpeg",
            "https://i.imgur.com/TXSVXIu.jpeg",
            "https://i.imgur.com/xuY2lR2.jpeg",
            "https://i.imgur.com/DoG6C15.jpeg",
            "https://i.imgur.com/09tFA4Z.jpeg",
            "https://i.imgur.com/V0eEX9H.jpeg"
        ];

        const message = "●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== ☟ ==========  ☟  ●============================●     𝐎𝐰𝐧𝐞𝐫 ➻────╔╬⓼★⓼╃───────➣🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("mahi")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Akki-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("💋", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
