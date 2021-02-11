const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
    console.log("Bot Online");
    client.user.setActivity('To Messages, and no.help', { type: 'LISTENING' });
    client.user.setStatus('dnd');
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
    if (message.content === 'no.ping') {
      const embed = new Discord.MessageEmbed
      .setTitle("Responce Ping")
      .addField(`My Latency is ${Date.now() - message.createdTimestamp}ms.`)
      .addField(`API Latency is ${Math.round(client.ws.ping)}ms`)
      .setFooter("yesnobot")
      message.channel.send(embed);
    }
  });
  client.on('message', message => {
      if (message.content === 'no.limit') {
          const embed = new Discord.MessageEmbed
          .setTitle("Limiting Bot To Channels")
          .setImage('https://i.ibb.co/84rNWGr/sendperms.png')
          .addField('Make sure the check is clicked on channels you want the bot to talk in')
          .addField('And make sure the X is checked in channels you dont want the bot to talk in')
          .setFooter("yesnobot")
          message.channel.send(embed);

      }
  })
  client.on('message', message => {
      if (message.content === 'no.help') {
          const embed = new Discord.MessageEmbed
          .setTitle("Help Menu")
          .addField('no.help - shows this menu')
          .addField('no.ping - shows the bot ping')
          .addField('no.limit shows how to limit the bot to certain channels')
          .setFooter('yesnobot')
          message.channel.send(embed);
      }
  })
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');