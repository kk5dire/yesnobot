const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    console.log("Bot Online")
})
client.on("message", msg => {
    if (msg.author == client.user) {
        return;
    } else if (msg.author.bot) {
        return;
    } else {
        msg.channel.send("No");
    }
    
    
   
})
client.on('message', message => {
    if (message.content === '+ping') {
      const embed = new Discord.MessageEmbed
      .setTitle("Responce Ping")
      .addField(`My Latency is ${Date.now() - message.createdTimestamp}ms.`)
      .addField(`API Latency is ${Math.round(client.ws.ping)}ms`)
      .setFooter("yesnobot")
    }
  });
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');