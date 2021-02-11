const Discord = require('discord.js');
const client = new Discord.Client();
var sentnow = 'no'
var tosend = 0
client.on("ready", () => {
    console.log("Bot Online");
    client.user.setPresence({ activity: { name: 'NOOO!!!!' }, status: 'dnd' });
})
client.on("message", msg => {
    if (msg.author == client.user) {
        return;
    } else if (msg.author.bot) {
        return;
    } else if (msg.content === 'no') {
        msg.channel.send('yes')
        
    }else if (msg.content.slice(-1) === '?') {
        msg.channel.send('no');
        setTimeout(function(){ 
            console.log('waiting') 
        }, 3000);
    }else if (msg.content.slice(-1) === '!') {
        msg.channel.send('no');
        setTimeout(function(){ 
            console.log('waiting') 
        }, 3000);
    }else if (msg.content.slice(-1) === '.') {
        msg.channel.send('no');
        setTimeout(function(){ 
            console.log('waiting') 
        }, 3000);
    }else if (msg.content.split(" ").includes('yes') === true ) {
        msg.channel.send('no');
        setTimeout(function(){ 
            console.log('waiting') 
        }, 3000);
    }else if (tosend === 1) {
        msg.channel.send('yes')
    }else if (tosend === undefined) {
        msg.channel.send('oops')
    }else {
        msg.react('809306253686997012')
    }
     
   
        

    
    

})
client.on('message', message => {
    if (message.content === '<@809248268743737364>') {
        const embed = new Discord.MessageEmbed
        embed.setTitle("Prefix")
        embed.setDescription("My prefix is \"no.\"")
        message.channel.send(embed);
    }
})
client.on('message', message => {
    if (message.content === 'no.ping') {
      const embed = new Discord.MessageEmbed
      embed.setTitle("Responce Ping")
      embed.addField(`${Date.now() - message.createdTimestamp}ms.`, 'My Latency')
      embed.addField(`${Math.round(client.ws.ping)}ms`, 'API latency')
      embed.setFooter("yesnobot")
      message.channel.send(embed);
    }
  });
  client.on('message', message => {
      if (message.content === 'no.limit') {
          const embed = new Discord.MessageEmbed
          embed.setTitle("Limiting Bot To Channels")
          embed.setImage('https://i.ibb.co/84rNWGr/sendperms.png')
          embed.addField('Make sure the check is clicked on channels you want the bot to talk in', 'Bot channels')
          embed.addField('And make sure the X is checked in channels you dont want the bot to talk in', 'Shush channels')
          embed.setFooter("yesnobot")
          message.channel.send(embed);

      }
  })
  client.on('message', message => {
      if (message.content === 'no.help') {
          const embed = new Discord.MessageEmbed
          embed.setTitle("Help Menu")
          embed.addField('no.help ', '- shows this menu')
          embed.addField('no.ping - ', 'shows the bot ping')
          embed.addField('no.limit ', '-shows how to limit the bot to certain channels')
          embed.setFooter('yesnobot')
          message.channel.send(embed);
      }
  })
  client.on('message', message => {
      if (message.content === 'no.swap') {
          if (tosend === 0) {
            let tosend = 1
          }else if (tosend === 1) {
              let tosend = 0
          }
      }
  })
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');