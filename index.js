const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    console.log("Bot Online")
})
client.on("message", msg => {
    if (msg.content === "yes","Yes","Yep","yep") {
        msg.channel.send("Nope")
    } else if (msg.content === "No","nope","no","Nope") {
        msg.channel.send("Yes")
    } else {
        return;
    }
})
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');