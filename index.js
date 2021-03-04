const Discord = require('discord.js');
const config = require("./config.json");


for (const tokens of config.tokens) {

    const bot = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL)} })

    bot.on('guildMemberAdd', member => {
       member.user.send("Welcome to the server!");
    });

    bot.on("ready", () => {
        console.log(`${bot.user.tag} online`)
    })

    bot.login(tokens);

}
