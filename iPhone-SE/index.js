require('dotenv').config()
const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["CHANNEL", "MESSAGE", "USER", "REACTION"] });
const prefix = "=";
const fs = require("fs");
const enmap = require('enmap')
const sqlite3 = require('better-sqlite3')
const settings = new enmap({
    name: "settings",
    autoFetch: true,
    fetchAll: true,
    cloneLevel: "deep"
})
const db = require('quick.db');
bot.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync("./commands/")
    .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
    console.log(`${file} loaded ✅`);
}

bot.on('ready', async () => {
    let statChannel = bot.channels.cache.get('772058902014459914');
    statChannel.setName(`All Members: ${message.guild.memberCount()}`)
    }, 60000);

const keepAlive = require('./server');

keepAlive();
bot.login(process.env.token) 
bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
     bot.user.setActivity({ name: `${message.guild.memberCount} servers | =help`, type: 'PLAYING'})
})
bot.on('message', async message => {
  if(!message.guild) return;
    let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (!prefix) {
        prefix = '-';
    }
    let guildPrefix = new Discord.MessageEmbed()
        .setTitle('Prefix')
        .setDescription(`The prefix for this server is set to ${prefix}`)
        .setFooter(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true, format: 'png' })
        );

    if (message.author.bot) return;
    if (!message.guild) return;

    if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`)))
        return message.channel.send(guildPrefix);
});
bot.on('message', async message => { 
    if(message.channel.name == 'iphone-network' && !message.author.bot){
          if(message.content.startsWith('@')) return message.channel.send(`I did not send your message, if you ping someone in the network, it will be carzy with all the pings they get from other servers.`);
       if(message.content.includes('@everyone')) return message.channel.send(`I did not send your message, becuase you're a bad boy pinging everyone.`);
        if(message.content.includes('@here')) return message.channel.send(`I did not send your message, becuase you're a bad boy pinging everyone.`);
         if(message.content.includes('https://discord.gg/')) return message.channel.send(`I did not send your message, Network advertising is illegal.`);
      bot.guilds.cache.forEach(async guild=>{
        if(guild == message.guild) return;
        let channel = guild.channels.cache.find(ch => ch.name === 'iphone-network');
        if(!channel) return;
        try {
        const webhooks = await channel.fetchWebhooks();
        const webhook = webhooks.first();

            let user = message.author;
            let content = message.content;
            let guildname = ` | Server: ${message.guild.name}`;
            if(message.author.id == '529815278456930314' || message.author.id == '615946810959200362' || message.author.id == '291633488535486474' || message.author.id == '320546614857170945') { guildname = ' | ClockBot Developer';
            }
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#00c1ff")
        .setDescription(message.content)
        .setFooter(message.guild.name, (message.guild.iconURL({ dynamic: true })))
            channel.send(embed)
            message.attachments.forEach(attachment => {
                // do something with the attachment
                const url = attachment.url;
      let embed = new Discord.MessageEmbed()
     .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor("#00c1ff")
        .setDescription(message.content)
        .setFooter(message.guild.name, (message.guild.iconURL({ dynamic: true })))
       
        channel.send(embed)
            })
        } catch (error) {
            console.error('Error trying to send: ', error)};
        }
    )}
})

bot.on("message", async msg => {
    if (!msg.content.startsWith(prefix)) {
        return;
    }
    const args = msg.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(args);

    if (command === "ping") {
        bot.commands.get("ping").execute(msg, args, bot);
    }

    if (command === "ban") {
        bot.commands.get("ban").execute(msg, args, bot);
    }
    
    if (command === "kick") {
        bot.commands.get("kick").execute(msg, args, bot);
    }
    if (command === "join") {
      let vc = msg.member.voice;
    if(!vc) return msg.channel.send("You are not in a voice channel!");
    vc.channel.join();
    }
    if (command === "lock") {
        bot.commands.get("lock").execute(msg, args, bot);
    }

    if (command === "unlock") {
        bot.commands.get("unlock").execute(msg, args, bot);
    }

    if (command === "hide") {
        bot.commands.get("hide").execute(msg, args, bot);
    }
    if (command === "network") {
        bot.commands.get("network").execute(msg, args, bot);
    }
    if (command === "unhide") {
        bot.commands.get("unhide").execute(msg, args, bot);
    }

    if (command === "clear") {
        bot.commands.get("clear").execute(msg, args, bot);
    }

    if (command === "dm") {
        bot.commands.get("dm").execute(msg, args, bot);
    }

    if (command === "8ball") {
        bot.commands.get('8ball').execute(msg, args, bot);
    }

    if (command === "roll") {
        bot.commands.get('roll').execute(msg, args, bot);
    }

    if (command === "status") {
        bot.commands.get('status').execute(msg, args, bot);
    }

    if(command === "unmute") {
        bot.commands.get('unmute').execute(msg, args, bot);
    }

    if(command === "warn") {
        bot.commands.get('warn').execute(msg, args, bot)
    }

    if(command === "warnings") {
        bot.commands.get('warnings').execute(msg, args, bot)
    }

    if(command === "clearwarn") {
        bot.commands.get('clearwarn').execute(msg, args, bot)
    }
    
    if (command === "help") {
        bot.commands.get("help").execute(msg, args, bot);
    }
     if (command === "panel") {
        bot.commands.get("panel").execute(msg, args, bot);
    }
    
    if (command === "reload") {
        bot.commands.get("reload").execute(msg, args, bot);
    }
    if (command === "help-mod") {
        bot.commands.get("help_mod").execute(msg, args, bot);
    }
     if (command === "status") {
    bot.commands.get('status').execute(msg, args, bot);
  }
    if (command === "help-fun") {
        bot.commands.get("help_fun").execute(msg, args, bot);
    }
    
    if (command === "help-misc") {
        bot.commands.get("help_misc").execute(msg, args, bot);
    }
    
    if (command === "announce") {
        bot.commands.get("announce").execute(msg, args, bot);
    }
    
     if (command === "credits") {
        message.channel.send("My owner is Charlie.mp4#6395")
    }
    
     if (command === "flip") {
        bot.commands.get("flip").execute(msg, args, bot);
    }
    
     if (command === "ac") {
        bot.commands.get("ac").execute(msg, args, bot);
    }
    if (command === "sibling") {
        bot.commands.get("sibling").execute(msg, args, bot);
    }
    if (command === "mute") {
        bot.commands.get("mute").execute(msg, args, bot);
    }
    
     if (command === "invite") {
        bot.commands.get("invite").execute(msg, args, bot);
    }
     if (command === "work") {
        bot.commands.get("work").run(msg, args, bot);
    }
    if (command === "bal") {
        bot.commands.get("bal").run(msg, args, bot);
    }
    if (command === "buy") {
        bot.commands.get("buy").run(msg, args, bot);
    }
    if (command === "shop") {
        bot.commands.get("shop").run(msg, args, bot);
  
    }
    if (command === "addbal") {
        bot.commands.get("addbal").run(msg, args, bot);
    }
    if (command === "setbal") {
        bot.commands.get("setbal").run(msg, args, bot);
    }
    if (command === "blackjack") {
        bot.commands.get("blackjack").run(msg, args, bot);
    }
    if (command === "slots") {
        bot.commands.get("slots").run(msg, args, bot);
    }
    if (command === "subtractbal") {
        bot.commands.get("subtractbal").run(msg, args, bot);
    }
    if (command === "pay") {
        bot.commands.get("pay").run(msg, args, bot);
    }
    if (command === "ticket-setup") {
        let ticketChannel = msg.mentions.channels.first();
        if (!ticketChannel) ticketChannel = msg.channel;

        const ticketSetupEmbed = new Discord.MessageEmbed()
            .setTitle("Ticket System")
            .setColor("RANDOM")
            .setDescription("React to open a ticket!")
            .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true, format: 'png' }))
        let s = await ticketChannel.send(ticketSetupEmbed)
        settings.set(`${msg.guild.id}-ticket`, s.id)
        s.react('🎫')

        msg.channel.send("Ticket setup done!")
    }

    if(command === "close") {
        if(!msg.channel.name.includes('ticket-')) return
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("You lack permissions to run this command!").then(m => m.delete({timeout: 5000}))
        msg.channel.delete()
    }
})

bot.on('message', async (msg) => {
    const args = msg.content
        .slice(0)
        .trim()
        .split(/ +/g);
    if (msg.channel.name == 'oriental-network' && !msg.author.bot) {

        let user = msg.author.username
        let userAvatar = msg.author.avatarURL({ dynamic: true, type: 'png' })
        let networkMessage = args.join(" ")
        let userGuild = msg.guild.name
        let guildIcon = msg.guild.iconURL({ dynamic: true, type: "png" })

        bot.guilds.cache.forEach(guild => {
            if (guild == msg.guild) return;
            let networkChannel = guild.channels.cache.find(ch => ch.name === 'oriental-network');
            if (!networkChannel) return;
            let networkEmbed = new Discord.MessageEmbed()
                .setAuthor(user + " ", userAvatar)
                .setColor("RANDOM")
                .setDescription(networkMessage)
                .setFooter(userGuild, guildIcon)
                .setTimestamp()
            networkChannel.send(networkEmbed)
            msg.react('📧')
        })
    }
})

bot.on('messageReactionAdd', async (reaction, user, msg) => {
    if (user.partial) await user.fetch()
    if (reaction.partial) await reaction.fetch()
    if (reaction.message.partial) await reaction.message.fetch()

    if (user.bot) return

    let ticketID = await settings.get(`${reaction.message.guild.id}-ticket`)

    if (!ticketID) return

    if (reaction.message.id == ticketID && reaction.emoji.name == "🎫") {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            type: "text",
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ]
        }).then(async channel => {
            const ticketCreatedEmbed = new Discord.MessageEmbed()
                .setTitle("Welcome to your ticket!")
                .setColor("RANDOM")
                .setDescription("We will be with you shortly! \n DO NOT ping staff to review your ticket, as doing so will result in punishment.")
                .setFooter(user.username, user.avatarURL({ dynamic: true, format: 'png' }))
                .setTimestamp()
            channel.send(`<@${user.id}>`).then(m => m.delete({ timeout: 500 }))
            channel.send(ticketCreatedEmbed)
        })
    }
})