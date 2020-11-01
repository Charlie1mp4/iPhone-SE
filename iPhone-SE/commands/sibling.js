const Discord = require('discord.js')

module.exports = {
  name: "sibling",
  description: "Panel links",
  execute(msg, args, bot) {
        if(msg.author.id !== '762697160457191484' && msg.author.id !== '680686691937288234') return msg.channel.send("You lack permissions to run this command!").then(m => m.delete({ timeout: 5000 }));
        

let serverIcon = msg.guild.iconURL(); 

let siblingEmbed = new Discord.MessageEmbed()
    .setTitle("__Sibling Servers__")
    .setDescription("Here are partnered servers within the bot.")
    .setImage("https://cdn.discordapp.com/attachments/771673238337486888/771986794014179338/Discord-privacy-tips-that-you-should-use-.png")
    .setColor(5301186)
    .setAuthor(`${msg.guild.name}`, serverIcon)
    .addField("\`Server 1: Bot Developers Hangout\`", "**Description:**\n> Bot Developers Hangout is a place where Discord bot developers can test out their bots, share coding ideas, and learn new coding concepts from other developers. \n**Invite link:**\n> https://discord.gg/8hGPGzW\n**Owner:**\n> <@!529815278456930314>", false)
    .addField("\`Server 2: Charlie's World\`", "**Description:**\n> Want to join a small community with bots and more? Look no further then Charlie's World! Charlie.mp4 is also a YouTuber.\n**Invite links:**\n> https://discord.gg/TA2QTncWmB\n**Owner:**\n> <@!680686691937288234>", false)
   .setTimestamp()
   msg.channel.startTyping().then(
        msg.channel.stopTyping()
    )
   msg.channel.send(siblingEmbed)
  }
};