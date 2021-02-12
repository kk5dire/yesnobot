const Discord = require('discord.js');
const client = new Discord.Client();
const { Permissions } = require('discord.js');
const { kill } = require('process');
const lastDel = new Discord.Collection();
client.lastDel = lastDel;
//and edited messages for the editsnipe command
const lastEdits = new Discord.Collection();
client.lastEdits = lastEdits;
var sentnow = 'no'
var tosend = 0
const maxhelppages = 2
const newhelpdes = '<:checklist:740365693442064414> **PARAMETERS: # = page number** : goes to a specific page'
const linetext = '---------------------------'
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
    }else if (msg.content.split(" ").includes('gay') === true) {
        msg.channel.send('acually nvm that gay af')
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

    } else if (message.content === 'no.help') {
        const embed = new Discord.MessageEmbed
        embed.setTitle("Help Menu")
        embed.addField('no.help ', '- shows this menu')
        embed.addField('no.ping - ', 'shows the bot ping')
        embed.addField('no.limit ', '-shows how to limit the bot to certain channels')
        embed.addField('no.invite', '-Invite the bot to another server')
        embed.addField('**End of Page**', linetext)
        embed.addField('no.help#', newhelpdes)
        embed.setFooter(`Page 1/${maxhelppages}`)
        message.channel.send(embed);
    } else if (message.content === 'no.help2') {
        const embed = new Discord.MessageEmbed
        embed.setTitle('Help Menu #2')
        embed.addField('no.kill', `<:checklist:740365693442064414> **PARAMETERS: target** :-a kill command i used in a bot made by me and IYA#2082 [Website](https://www.pwetzel.ml) `)
        embed.addField('no.leave', '<:ShieldWarning:746952447095996467>**REQUIRES: Manage_Guild** : Removes the bot from the entire server')
        embed.addField('no.evaluation', '<:ShieldWarning:746952447095996467>**REQUIRES: BOT_Mangagment** : Evaluate Javascript Code \(Does not interact with server\)')
        embed.addField('no.snipe', '<:Image_not_found:754483783545127023> **INDEV: For Codebase**: A command to reveal deleted and edited messages/images')
        embed.addField('**End of Page**', linetext)
        embed.addField('no.help#', newhelpdes)
        embed.setFooter(`Page 2/${maxhelppages}`)
        message.channel.send(embed)
    } else if (message.content === 'no.swap') {
        if (tosend === 0) {
          let tosend = 1
        }else if (tosend === 1) {
            let tosend = 0
        }
    } else if (message.content === 'no.leave') {

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
    } else if (message.content === 'no.invite') {
        const embed = new Discord.MessageEmbed
        embed.setTitle('Invite')
        embed.setDescription(`[Click Me To Invite \(No Bot permissions Needed\)](https://ayasbots.page.link/no-invite)`)
        message.channel.send(embed);
    } else if (message.content === 'no.snipe') {
        try {
            let channel;
            if(message.mentions.channels.size) {
                channel = message.mentions.channels.first();
            } else {
                channel = message.channel
            }
      const delMsg = message.client.lastDel.get(channel.id);
      if (delMsg === undefined) {
          const emberr = new Discord.MessageEmbed;
          emberr.setTitle("<:ShieldWarning:746952447095996467> Error");
          emberr.setDescription('Snipe:Error No message found to snipe');
          message.channel.send(emberr);
          throw 'no message found to snipe';
      }
      const embed = new Discord.MessageEmbed;
      embed.setDescription(`${delMsg.author} said;`, delMsg.content);
      if (delMsg.attachments.size) embed.addField('Attachment', delMsg.attachments.first().url);
        } catch (err) {
            return console.log(err)
        }
    } else if (message.content === 'no.eval') {
        const args = message.content.split(" ").slice(1);
        if (message.author.id !== '686039988605026304') return;
        try {
            const code = args.join(" ");
            let evaled = eval(code);
        
            if (typeof evaled !== "string")
               evaled = require("util").inspect(evaled);
        
               message.channel.send(evaled, {code:"x1"});
        
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        
        }
             } else if (message.content.split(" ").includes("no.kill") === true) {
                const args = message.content.split(" ").slice(1);
                let target;
                if (args.length) {target = args.join(' ')}
                else {target = message.author;};
        console.log('kill pt.1');
                //select a random message from the list...
                const messages = [
                     `${message.author} slips bleach into ${target}\`s lemonade.`,
            `${target} dies of natural causes.`,
            `${target} dies from bad succ.`,
            `${target} dies from dabbing too hard.`,
            `${target} dies from posting normie memes.`,
            `${target} dies from disrespecting wahmen.`,
            `${target} dies from watching the emoji movie and enjoying it.`,
            `${message.author} hired me to kill you, but I don\`t want to! ${target}`,
            `${target} slips on a banana peel and falls down the stairs.`,
            `${message.author} murders ${target} with an axe.`,
            `${message.author} pressed delete. It deleted ${target}`,
            `${target} dies because they used a bobby pin to lift their eyelashes`,
            `${target} dies because they were just too angry.`,
            `${target} decided it was a good idea to fight a tiger while smelling like meat. It did not end well.`,
            `${target} disappeared from the universe.`,
            `${target} drank some toxic soda before it was recalled.`,
            `${target} was killed by ${message.author} with baby wipes.`,
            `${target} dies in a horrible accident, and it was engineered by ${message.author}.`,
            `${target} dies of starvation.`,
            `${message.author} decapitates ${target} with a sword.`,
            `${message.author} challenges ${target} to a fist fight to the death. ${target} wins.`,
            `Sorry, ${message.author}, I don\`t like killing people.`,
            `${target} dies after swallowing a toothpick.`,
            `${target} was murdered by ${message.author} and everyone knows it, but there is no proof.`,
            `${message.author} kills ${target} after hours of torture.`,
            `${target} dies on death row via lethal injection after murdering ${message.author} and their family.`,
            `${target} vocally opposed the Clintons and then suddenly disappeared.`,
            `${message.author} shoots ${target} in the head.`,
            `${message.author}, are you sure you want to kill ${target}? They seem nice to me.`,
            `${target} lives, despite ${message.author}\`s murder attempt.`,
            `${target} gets hit by a car.`,
            `${target} gets struck by lightning.`,
            `${target} reads memes till they die.`,
            `${target} dies at the hands of ${message.author}.`,
            `${target} has some bad chinese food, and pays the ultimate price.`,
            `${target} chokes on cheerios and dies. What an idiot...`,
            `${target} is killed by their own stupidity.`,
            `${target} is killed in a robbery gone wrong.`,
            `${target} is dead at the hands of ${message.author}.`,
            `${target} can\`t be killed, as they are a ghost.`,
            `${target} gets stabbed by ${message.author}`,
            `In a sudden turn of events, I **don\`t** kill ${target}.`,
            `${target} kills themselves after realizing how dumb ${message.author} is.`,
            `${target} bleeds out after trying to get on \`Dumbest hillbilly moments\`.`,
            `${target} is not able to be killed. Oh, wait, no, ${message.author} kills them anyway.`,
            `${message.author} strangles ${target}.`,
            `After getting pushed into the ocean by ${message.author}, ${target} is eaten by a shark.`,
            `${target} dies.`, `After a struggle, ${target} kills ${message.author}`,
            `${target} is abducted by aliens, and the government kills them to cover it up.`,
            `${target} got stepped on by an elephant.`, `${target} died from eating too much ass.`,
            `${target} died from shitting for 36 hours straight.`,
            `${target} is so dumb that they choked on oxygen.`,
            `${target} died from not eating enough ass.`,
            `${target} died from doing the ice bucket challenge.`,
            `${target} died from eating too much ass.`,
            `The bullet missed Harambe and hit ${target} instead. Yay for Harambe!`,
            `Aids, ${target} died from aids.`,
            `${target} died because RemindMeBot forgot to remind them to breathe`,
            `${target} died due to eating WAY too many hotdogs in preparation for their date Friday night.`,
            `${target} got into a knife fight with the pope. One of them is in hell now.`,
            `${target} died from swallowing rocks too fast`,
            `${target} accidentally clicked on a popup ad that reads \`Doctors hate us, see the one best trick for dying today!\``,
            `${target} died from ebola.`,
            `${target} fell into a pit of angry feminists.`,
            `${target} died from drinking too much water Huh, I guess it IS possible!.`,
            `${target} died while playing hopscotch on *seemingly* deactivated land mines.`,
            `${target} ripped their own heart out to show their love for ${message.author}.`,
            `${target} died from too many sunburns.`,
            `${target} died from a swift kick to the brain.`,
            `${target} was eaten alive by ants`,
            `${target} died after gaming for 90 hours straight without moving or eating.`,
            `${target} tried to outrun a train, the train won.`,
            `${target} killed themselves after seeing the normie memes that ${message.author} posts.`,
            `After raid of roblox kids entered the server, ${target} died of cancer.`,
            `${target} talked back to mods and got destroyed by the ban hammer.`,
            `${target} cums in eye, goes blind, runs for help but ran straight onto train tracks and gets plowed by a train.`,
            `${target} bought a fidget spinner and drowned in pussy.`,
            `${target} died after trying to out-meme Dank Memer.`,
            `${target} died from eating too much bread :/`,
            `${target} died an honorable death. Death by snoo snoo.`,
            `${target} tried to get famous on YouTube by live-streaming something dumb. Skydiving while chained to a fridge.`,
            `${target} was walking normally when out of the corner of their eye they saw someone do a bottle flip and dab causing ${target} to have a stroke.`,
            `${target} died from eating cactus needles.`,
            `${target} died after playing with an edgy razor blade fidget spinner.`,
            `${target} died because they started playing with a fidget spinner but they realise its 2016 so you start fapping to the old witch in snow white and obama starts mowing their lawn and they jump out of the window and get ripped to pieces by Obama\`s lawn mower`,
            `${target} ate too many laxatives and drowned in their own shit. Ew.`,
            `${target} drowned in their own tears.`,
            `${target} died eating expired and infected raw fish with the filthiest rice in the world as sushi while being constantly stabbed in the scrotum with a 9inch nail sharp enough to stab through kevlar. The soy sauce was cat piss.`,
            `${target} died of oversucc`,
            `${target} accidentally tripped and died while getting up to write their suicide note.`,
            `${target} died from whacking it too much. (There\`s a healthy balance, boys)`,
            `${target} died from not whacking it enough. (There\`s a healthy balance, boys)`,
            `${message.author} kills ${target} with their own foot.`,
            `${target} dies due to lack of friends.`,
            `${target} chokes on a chicken bone.`,
            `${target} went on a ride with a lead balloon.`,
            `${target} did not make a meme dank enough and was stoned.`,
            `Our lord and savior Gaben strikes ${target} with a lighting bolt.`,
            `${message.author} tries to shoot the broad side of a barn, misses and hits ${target} instead.`,
            `${target} slipped in the bathroom and choked on the shower curtain.`,
            `While performing colonoscopy on an elephant, ${target} gets their head stuck in the elephants rectum and chokes.`,
            `${message.author} attempted to play a flute, exploding the head of ${target}.`,
            `${message.author} straps ${target} to an ICBM and sends them to North Korea along with it.`,
            `${message.author} drowns ${target} in a beer barrel.`,
            `${target} was thrown in the crusher of a trash truck by ${message.author}.`,
            `${target} dropped a Nokia phone on their face and split their skull.`,
            `${message.author} cleaves the head of ${target} with a keyboard.`,
            `${message.author} crushes ${target} with a fridge.`,
            `${target} chokes in a trash can.`,
            `${message.author} fires a supersonic frozen turkey at ${target}, killing them instantly.`,
            `${target} watched the Emoji Movie and died of sheer cringe.`,
            `${message.author} shoots in ${target} mouth with rainbow laser, causing ${target} head to explode with rainbows and ${target} is reborn as unicorn. 🦄`,
            `${target} ate a piece of exotic butter. It was so amazing that it killed them.`,
            `${target} is stuffed into a suit by Freddy on their night guard duty. Oh, not those animatronics again!`,
            `${message.author} grabs ${target} and shoves them into an auto-freeze machine with some juice and sets the temperature to 100 Kelvin, creating human ice pops.`,
            `${message.author} drowns ${target} in a tub of hot chocolate. *How was your last drink?*`,
            `${target} screams in terror as they accidentally spawn in the cthulhu while uttering random latin words. Cthulhu grabs ${target} by the right leg and takes them to his dimension yelling, \`Honey, Dinner\`s ready!\``,
            `${message.author} feeds toothpaste-filled oreos to ${target}, who were apparently allergic to fluorine. GGWP.`,
            `${message.author} forgot to zombie-proof ${target} lawn... Looks like zombies had a feast last night.`,
            `${target} cranks up the music system only to realize the volume was at max and the song playing was Baby by Justin Beiber...`,
            `${target} presses a random button and is teleported to the height of 100m, allowing them to fall to their inevitable death. Moral of the story: Don\`t go around pressing random buttons.`,
            `${target} is injected with chocolate syrup, which mutates them into a person made out of chocolate. While doing a part-time job at the Daycare, they are devoured by the hungry babies. 🍫`,
            `${target} is sucked into Minecraft. ${target}, being a noob at the so called Real-Life Minecraft faces the Game Over screen.`,
            `${message.author} turns on Goosebumps(2015 film) on the TV. ${target} being a scaredy-cat, dies of an heart attack.`,
            `${message.author} after a long day, plops down on the couch with ${target} and turns on The Big Bang Theory. After a Sheldon Cooper joke, ${target} laughs uncontrollably as they die.`,
            `${target} was given a chance to synthesize element 119 (Ununennium) and have it named after them, but they messed up. R.I.P.`,
            `${message.author} gets ${target} to watch anime with them. ${target} couldn\`t handle it.`,
            `${target} tried to get crafty, but they accidentally cut themselves with the scissors.✂️`,
            `${target} goes genocide and Sans totally dunks ${target}!`,
            `${message.author} was so swag that ${target} died due to it. #Swag`,
            `${target} has been found guilty, time for their execution!`,
            `${target} fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. 📱`,
            `${message.author} strikes ${target} with the killing curse... *Avada Kedavra!*`,
            `${target} ate an apple and turned out it was made out of wax. Someone died from wax poisoning later that day.`,
            `${target} was teleported to the timeline where Jurassic World was real and they were eaten alive by the Indominus Rex.`,
            `${target} was charging their Samsung Galaxy Note 7...`,
            `${message.author} shot ${target} using the Starkiller Base!`,
            `${target} was a resident of Alderaan before Darth Vader destroyed the planet...`,
            `${target} was scooped by ${message.author} and their innards are now Ennard.`,
            `${message.author} Alt+F4\`d ${target}.exe!`,
            `${target} was accused of stealing Neptune\`s crown...`,
            `${message.author} eviscerates ${target} with a rusty butter knife. Ouch!`,
            `${message.author} pushes ${target} into the cold vacuum of space.`,
            `${message.author} runs ${target} over with a PT Cruiser.`,
            `${target} trips over his own shoe laces and dies.`,
            `${target} tried to pick out the holy grail. He chose... poorly.`,
            `${message.author} hulk smashes ${target} into a pulp.`,
            `${target} steps on a george foreman and dies of waffle foot.`,
            `${target} dies from just being a bad, un-likeable dude.`,
            `Calling upon the divine powers, ${message.author} smites ${target} and their heathen ways`,
            `${target} has a stroke after a sad miserable existence. They are then devoured by their ample cats.`,
            `${target} takes an arrow to the knee. And everywhere else.`,
            `${target} dies of dysentery.`,
            `${target} dies of AIDS.`,
            `${message.author} killed ${target} by ripping the skin off of their face and making a mask out of it.`,
            `${target} spins a fidget spinner and when it stops he dies...`,
            `${target} ripped his heart out..`,
            `${message.author} fell in love with ${target} then broke his heart literally.`,
            `${message.author} blew his ear drums out listening to music too hard.`,
            `${message.author} hugs ${target} too hard..`,
            `${message.author} tears off ${target}s lips after a kiss.`,
            `${message.author} drags ${target}s ears too hard and rips them off.`,
            `${target} tried to play in the street...`,
            `${target} is killed by a rabbit with a vicious streak a mile wide`,
            `${message.author} forgot to leave the car door window open and ${target} dies from overheating`,
            `${target} dies, but don\`t let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer’s table`,
            `${target} tips his fedora too far and falls onto the tracks of an oncoming subway.`,
            `${target} eats too much copypasta and explodes`,
            `${message.author} kills ${target} with kindness`,
            `no u`,
            `${message.author} kills ${target} with a candlestick in the study`,
            `${target} dies north of the wall and transforms into a white walker`,
            `${message.author} thicc and collapses ${target}\`s rib cage`,
            `${target} loses the will to live`,
            `${target} dies from dabbing too hard`,
            `${target} died from a tragic amount of bad succ`,
            `${target} dies by swearing on a Christian Minecraft server`,
            `${target} died. OOF`,
            `${target} died while listening to \`It\`s every day bro`,
            `${target} died while trying to find the city of England`,
            `${target} died from a high salt intake`,
            `${target} died due to ${message.author} being so stupid`,
            `${target} died from reposting in the wrong neighborhood`,
            `${target} died when testing a hydrogen bomb. There is nothing left to bury.`,
            `${target} died from meme underdose :/`,
            `${target} died after realizing how shitty their grammar was`,
            `${target} died after fapping 50 times in a row with no break.`,
            `${target} dies from severe dislike of sand. It\`s coarse and rough and irritating it gets everywhere`,
          `There will never be enough middle fingers in this world for ${target}`,
            `I'm betting your keyboard is filthy as fuck now from all that Cheeto-dust finger typing, you goddamn weaboo shut in. `,
            `Bards will chant parables of your legendary stupidity for centuries, ${target}`,
            `I can't even call you Fucking Ugly, because Nature has already beaten me to it.`,
            `Why don’t you crawl back to whatever micro-organism cesspool you came from, and try not to breath any of our oxygen on the way there`,
            `I'm just surprised you haven't yet retired from being a butt pirate.`,
            `You are a stupid.`,
            `I bet your dick is an innie and your belly button an outtie.`,
            `They don't make a short enough bus in the Continental United States for a person like you.`,
            `Your penis is smaller than the payment a homeless orphan in Mongolia received for stitching my shoes.`,
            `You losing your virginity is like a summer squash growing in the middle of winter. Never happening.`,
            `You have the face of a bulldog licking piss off a stinging nettle.`,
            `You're like a penny on the floor of a public restroom - filthy, untouchable and practically worthless.`,
            `Don't play hard to get when you are hard to want`,
            `What's the difference between three dicks and a joke? You can't take a joke.`,
            `I want to call you a douche, but that would be unfair and unrealistic. Douches are often found near vaginas.`,
            `Your birth certificate is an apology letter from the abortion clinic.`,
            `WHY SHOULD I LISTEN TO YOU ARE SO FAT THAT YOU CAN'T POO OR PEE YOU STINK LYRE YOU HAVE A CRUSH ON POO﻿`,
            `Twelve must be difficult for you. I don’t mean BEING twelve, I mean that being your IQ.`,
            `Why do you sound like you suck too many cocks?`,
            `Next time, don't take a laxative before you type because you just took a steaming stinking dump right on the page. Now wipe that shit up and don't fuck it up like your life.`,
            `You're like a square blade, all edge and no point.`,
            `There are two ugly people in this chat, and you're both of them.`,
            `Not even your dog loves you. He's just faking it.`,
            `You're so salty you would sink in the Dead Sea`,
            `I would rather be friends with Ajit Pai than you.`,
            `Once upon a time, Santa Clause was asked what he thought of your mom, your sister and your grandma, and thus his catchphrase was born.`,
            `I once smelled a dog fart that had more cunning, personality, and charm than you.`,
            `You were birthed out your mothers ass because her cunt was too busy.`,
            `You're kinda like Rapunzel except instead of letting down your hair you let down everyone in your life`,
            `We all dislike you, but not quite enough that we bother to think about you.`,
            `Where'd ya get those pants? The toilet store?`,
            `You're such a pussy that fucking you wouldnt be gay.`,
            `Goddamn did your parents dodge a bullet when they abandoned you.`,
            `I fucking hate the way you laugh.`,
            `You stuck up, half-witted, scruffy looking nerf herder!`,
            `I hope you win the lottery and lose your ticket.`,
            `I cant wait to forget you.`,
            `I curse the vagina that farted you out.`,
            `I FART IN YOUR GENERAL DIRECTION`,
            `I've never met someone who's at once so thoughtless, selfish, and uncaring of other people's interests, while also having such lame and boring interests of his own. You don't have friends, because you shouldn't.`,
            `If you're dad wasn't so much of a pussy, he'd have come out of the closet before he had you.`,
            `You may think people like being around you- but remember this: there is a difference between being liked and being tolerated.`,
            `You're ugly when you cry.`,
            `May the fleas of ten thousand camels live happily upon your buttocks`,
            `You're not pretty enough to be this dumb`,
            `Your mother was a hamster, and your father reeks of elderberries!`,
            `at least my mom pretends to love me`,
            `I would call you a cunt, but you lack the warmth or the depth.`,
            `I'm not mad. I'm just... disappointed.`,
            `When you die, people will struggle to think of nice things to say about you.`,
            `You are dumber than a block of wood and not nearly as useful`,
            `God wasted a good asshole when he put teeth in your mouth`,
            `You are like the end piece of bread in a loaf, everyone touches you but no one wants you`,
            `You have more dick in your personality than you do in your pants`,
            `You are a pizza burn on the roof of the world's mouth.`,
            `You're so stupid you couldn't pour piss out of a boot if the directions were written on the heel`,
            `You look like your father would be disappointed in you. If he stayed.`,
            `Jesus Christ it looks like your face was on fire and someone tried to put it out with an ice pick`,
            `I don't have the time, or the crayons to explain this to you.`,
            `Those aren't acne scars, those are marks from the hanger.`,
            `If you where any stupider we'd have to water you`,
            `You're so dense, light bends around you.`,
            `You know they say 90% of dust is dead human skin? That's what you are to me.`,
            `You're looking well for a man twice your age! Any word on the aneurism?`,
            `Don't you worry your pretty little head about it. The operative word being little. Not pretty.`,
            `You know, one of the many, many things that confuses me about you is that you remain unmurdered.`,
            `People like you are the reason God doesn't talk to us anymore`,
            `Take my lowest priority and put yourself beneath it.`,
            `I wonder if you'd be able to speak more clearly if your parents were second cousins instead of first.`,
            `You're objectively unattractive.`,
            `You're impossible to underestimate`,
            `Were you born a cunt, or is it something you have to recommit yourself to every morning?`,
            `the only thing you're fucking is natural selection`,
            `Mr. Rogers would be disappointed in you.`,
            `You need to go up to your daddy, get on your knees and apologize to each and every brother and sister that didn't make it to your mother's egg before you`,
            `If you were an inanimate object, you'd be a participation trophy.`,
            `If 'unenthusiastic handjob' had a face, your profile picture would be it.`,
            `I shouldn't roast you, I can't imagine the pain you go through with that face!`,
            `You have a face made for radio`,
            `You should put a condom on your head, because if you're going to act like a dick you better dress like one too.`,
            `You might want to get a colonoscopy for all that butthurt`,
            `If you were a potato you'd be a stupid potato.`,
            `Maybe if you eat all that makeup you will be beautiful on the inside.`,
            `People don't even pity you.`,
            `I'd love to stay and chat but I'd rather have type-2 diabetes`,
            `It's a joke, not a dick. You don't have to take it so hard.`,
            `I would challenge you to a battle of wits, but it seems you come unarmed`,
            `You're an example of why animals eat their young.`,
            `If there was a single intelligent thought in your head it would have died from loneliness.`,
            `Your memes are trash.`,
            `Your mother may have told you that you could be anything you wanted, but a douchebag wasn't what she meant.`,
            `The IQ test only goes down to zero but you make a really compelling case for negative numbers`,
            `Get a damn life you uncultured cranberry fucknut.`
            
                    //add your own messages here or suggest them: https://discord.gg/bRTPbpg
                ]
                const killMsg = messages[Math.floor(Math.random() * messages.length)];
        
                //create an embed for the kill message
              const embed = new Discord.MessageEmbed
              embed.setColor('#FF0040')
              embed.setDescription(killMsg)
              message.channel.send(embed);
             console.log('sent embed');
              }
      
  })
  
  
 
  
  
  
client.login('ODA5MjQ4MjY4NzQzNzM3MzY0.YCSVLg.jXFgFj-SJjziEhafTd-jGohVrvE');