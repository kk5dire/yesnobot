const Discord = require('discord.js');
const client = new Discord.Client();
const { Permissions } = require('discord.js');
var sentnow = 'no'
var tosend = 0
client.on("ready", () => {
    console.log("Bot Online");
    client.user.setPresence({ activity: { name: 'NOOO!!!! | no.help' }, status: 'dnd' });
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
    if (message.content.slice(0, 3) === 'no.') {
        message.react('737449100009799752')
    }
})
client.on('message', message => {
  
    
    if (message.content === 'no.ping') {
        const messageReactStart = Number(new Date());
        message.react('746951342609662022')
        const messageReactPing = Number(new Date()) - messageReactStart;
      const embed = new Discord.MessageEmbed
      embed.setTitle("Responce Ping")
      embed.addField(`${Date.now() - message.createdTimestamp}ms.`, 'My Message Latency')
      embed.addField(`${messageReactPing}`, 'My Reaction latency')
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
          embed.addField('no.invite', '-Invite the bot to another server')
          embed.addField('no.leave', '<:ShieldWarning:746952447095996467>**REQUIRES: Manage_Guild** : Removes the bot from the entire server')
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
  client.on('message', message => {
      if (message.content === 'no.leave') {

        if (message.guild.member(message.author).hasPermission('MANAGE_GUILD')) {
            var targetGuild = message.guild.id;
            if (!targetGuild) // targetGuild is undefined if an ID was not supplied
                return message.reply("You must supply a Guild ID");
            
            if (message.author.id == "740603220279164939") // Don't listen to self.
                return;
            
            client.guilds.cache.get(targetGuild) // Grab the guild
                .leave() // Leave
                .then(g => console.log(`I left ${g}`)) // Give confirmation after leaving
                .catch(console.error);
        }else if (!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) {
            message.channel.send("Nada Only people with **MANAGE_GUILD_** Can make me leave")
        
      
      }
    }
  })
  client.on('message', message => {
      if (message.content === 'no.invite') {
          const embed = new Discord.MessageEmbed
          embed.setTitle('Invite')
          embed.setDescription(`[Click Me To Invite \(No permissions Needed\)](https://ayasbots.page.link/no-invite)`)
          message.channel.send(embed);
      }
  })
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');