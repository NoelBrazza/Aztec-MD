//==============

// MDE WITH LUV BY DIEGOSON 

//================

const fs = require("fs");
const BOTNAME = global.botName;
const PREFIX = global.prefix;
const { aztec_images } = require('../mangoose/encryptFunc.js');
require("../config");

module.exports = {
  name: 'alive',
  category: 'General',
  description: 'Check if the bot is online',
  async xstart(vorterx, message, { args, xReact }) {
    
    await xReact("💙");
    const image = fs.readFileSync('../lib/imogs.jpg');
    const userName = m.pushName;
    const botName = process.env.BOTNAME;
    const version = require(__dirname + "/package.json").version;

    const cap = `
    ╭─💙 *Bot Status*
    │
    ├ Hey ${userName}! 👋
    ├ Welcome to ${botName}! 🤖
    ├ I am a WhatsApp user bot developed by Diegoson.
    ├ ✨ Let's embark the world of automation together!
    ├
    ├ 📌 *Prefix*: ${PREFIX}
    ├ 📌 *Version*: ${version}
    │
    ├ Type ${PREFIX}menu for the full command list.
    │
    ╰──────────⭑ ©vorterx
    `;

    const messageOptions = {
      image: { url: await aztec_images()},
      caption: cap,
      contextInfo: {
        externalAdReply: {
          title: 'Powerd by Aztec',
          body: 'Unlash your imagination',
          thumbnail: image,
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: 'https://vorterx.com',
          ShowAdAttribution: true,
        },
      },
    };

    await vorterx.sendMessage(message.from, messageOptions, { quoted: m });
  },
};
