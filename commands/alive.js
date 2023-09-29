//===============

// MDE WITH LUV BY DIEGOSON 

//================

const fs = require("fs");
const BOTNAME = global.botname;
const PREFIX = global.prefix;
require("../config");

module.exports = {
  name: 'alive',
  category: 'General',
  description: 'A command to test if the bot is online',
  async xstart(vorterx, m, { args, xReact }) {
    await xReact("💗");

    const aztec = fs.readFileSync("./lib/imogs.jpg");
    const msg = `*Hey ${m.pushName}!* 👋\n\nWelcome to ${process.env.BOTNAME}! 🤖\n\nI am a WhatsApp user bot developed by Diegoson.\n\n✨ Let's explore the world of automation together!\n\n📌 *Prefix*: ${global.prefix}\n📌 *Version*: 3.0.0\n\nType ${global.prefix}menu for full command list.`;
    //This const msg transport the msg  to template and template receive the msg which u will see

    const template = `
╭─💗 *Bot Status*
│
├ Hey ${m.pushName}! 👋
├ Welcome to ${process.env.BOTNAME}! 🤖
├ I am a WhatsApp user bot developed by Diegoson.
├ ✨ Let's explore the world of automation together!
├
├ 📌 *Prefix*: ${global.prefix}
├ 📌 *Version*: 3.0.0
│
├ Type ${global.prefix}menu for full command list.
│
╰──────────⭑ ©vorterx
    `;

    const messageOptions = {
      image: aztec,
      caption: template,
      contextInfo: {
        externalAdReply: {
          title: 'vorterx team',
          body: 'Best to use',
          thumbnail: aztec,
          mediaType: 1,
          mediaUrl: '',
          sourceUrl: 'https://vorterx.com/',
          ShowAdAttribution: true,
        },
      },
    };

    await vorterx.sendMessage(m.from, messageOptions, { quoted: m });
  },
};
