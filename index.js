const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    console.log("Bot Online")
})
client.on("message", msg => {
    msg.channel.send("No")
})
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');