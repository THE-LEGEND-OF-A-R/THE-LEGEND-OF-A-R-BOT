module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "ARYAN KING",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`💐𝐒𝐎𝐑𝐑𝐘 𝐌 𝐈𝐒𝐄 𝐃𝐔𝐁𝐀𝐑𝐀 𝐀𝐃𝐃 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑 𝐏𝐀𝐘À🥺 ${name} 𝐆𝐑𝐎𝐔𝐏 𝐌 𝐋𝐀𝐆𝐓𝐀 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐄 𝐁𝐋𝐎𝐂𝐊 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀😔:( `, event.threadID)
   } else api.sendMessage(`💐𝐌𝐄𝐋𝐈 𝐉𝐀𝐀𝐍, ${name} 𝐁𝐇𝐀𝐆 𝐊𝐀𝐑 𝐊𝐀𝐇𝐀 𝐉𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎💐 𝐁𝐀𝐁𝐘 𝐃𝐄𝐊𝐇𝐎 𝐌𝐄𝐍𝐄 𝐏𝐇𝐈𝐑 𝐀𝐃𝐃 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀 💐`, event.threadID);
  })
 }
}
