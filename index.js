const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    console.log("Bot Online")
})
client.on("message", msg => {
    if (message.author == client.user) {
        return;
    } else if (message.author.bot) {
        return;
    } else {
        msg.channel.send("No");
    }
    
    
   
})
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');