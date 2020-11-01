const Discord = require('discord.js')

module.exports = {
  name: "panel",
  description: "Panel links",
  execute(msg, args, bot) {
        if(msg.author.id !== '615946810959200362' && msg.author.id !== '529815278456930314') return msg.channel.send("You lack permissions to run this command!").then(m => m.delete({ timeout: 5000 }));
        

let serverIcon = msg.guild.iconURL(); 

let panelEmbed = new Discord.MessageEmbed()
   .setAuthor(`${msg.guild.name}`, serverIcon
)
   .setDescription(`This command is still being built! Please wait for it to be finished.`)
   .addField("Meanwhile, Moderator#9476:", `[Here's the panel link](https://panel.chaoticdestiny.host)`)
   .addField("And here's the new host:", `[Link to Repl](https://repl.it/@Charliemp4/iPhone-SE)`)
   .setColor("RED")
   .setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
   .setTimestamp()
msg.channel.startTyping().then(
        msg.channel.stopTyping()
    )
   msg.channel.send(panelEmbed);
  }}