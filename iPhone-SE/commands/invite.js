const Discord = require('discord.js')

module.exports = {
  name: "invite",
  description: "Provides the invite link to the bot",
  execute(msg, args, bot) {
        if (!msg.member.hasPermission("SEND_MESSAGES")) {
            return msg.channel.send("You lack permissions to run this command!").then(m => m.delete({ timeout: 5000 }));
        }
 let inviteEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle("Invite iPhone SE to your server!")
    .setDescription("Below are helpful invite links having to do with iPhone SE. If you need any help with the links, contact a developer listed in the credits command.")
    .addField("Bot invite link: (Admin Perms)", "[Click here to invite iPhone SE to your server!](https://discord.com/api/oauth2/authorize?client_id=729566356634206208&permissions=8&scope=bot)", false)
    .addField("Bot invite link: (Select perms)", "[Click here to invite iPhone SE to your server!](https://discord.com/api/oauth2/authorize?client_id=729566356634206208&permissions=1342631030&scope=bot)", false)
    .addField("Server links:", "[Developer server](https://discord.gg/njPfJ2G)\n[Support Server](https://discord.gg/TA2QTncWmB)\n [:globe_with_meridians: Website](https://sites.google.com/view/charlie-mp4-offical-homepage/iphone-se)", false)
    .setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
   .setTimestamp();

    msg.channel.send(inviteEmbed);
  }};