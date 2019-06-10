const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Gem Server ',
     details: `Best Server`,
     url: 'http://twitch.tv/xFFzw',
     state: `Gem Server`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'Gem',
        large_image: `377480353259978752`,
        large_text: `Server` }

  }
    });
});
اقولها

client.login(process.env.BOT_TOKEN)
