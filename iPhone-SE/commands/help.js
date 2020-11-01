const Discord = require('discord.js')

module.exports = {
  name: "help",
  description: "Shows the help menu with information on every command.",
  execute(msg, args, bot) {
        if (!msg.member.hasPermission("SEND_MESSAGES")) {
            return msg.channel.send("You lack permissions to run this command!").then(m => m.delete({ timeout: 5000 }));
        }
        let categories = ["fun", "misc", "mod", "economy"]
let funEmbed = new Discord.MessageEmbed()
   .setTitle(`iPhone SE Fun Commands`)
   .setDescription(`Here are all the fun commands in the bot!`)
   .addField("=8ball (question)", `Gives an 8balled (random) answer to the question you ask.`)
   .addField("=flip",`Flips a coin (heads or tails).`)
   .addField("=roll", `Rolls a die.`)
   .addField("=dm [@user] (message)",`DMs the targeted user with the specified message.`)
   .setColor("RANDOM")
   .setFooter(`Requested by ${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
   .setTimestamp()
let miscEmbed = new Discord.MessageEmbed()
   .setTitle(`iPhone SE Miscellaneous Commands`)
   .setDescription(`Here are all the commands that are uncategorized.`)
   .addField("=dm [@user] (message)",`DMs the targeted user with the specified message.`)
   .addField("=help", `Shows the main help menu.`)
   .addField("=invite", `Provides the invite links to iPhone.`)
   .addField("=ping", `Shows the bot's ping in milliseconds.`)
   .addField("=credits", `Shows the credits of the creators/devs of this awesome bot.`)
   .setColor("RANDOM")
   .setFooter(`Requested by ${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
   .setTimestamp()
let modEmbed = new Discord.MessageEmbed()
   .setTitle(`iPhone SE Moderation Commands`)
   .setDescription(`Here are all the moderation/admin commands in the bot!`)
   .addField("=announce [#channel] (Message)",`Announces something to the targeted channel.`)
   .addField("=ban [@user] (reason)",`Bans the targeted user (reason optional).`)
   .addField("=kick [@user] (reason)", `Kicks the targeted user (reason optional).`)
   .addField("=clear [amount]",`Purges the amount of messages specified.`)
   .addField("=hide [#channel] (reason)", `Hides a channel so that no one except allowed roles can see it (reason optional).`)
    .addField("=unhide [#channel] (reason)", `Unhides a channel that was previously hidden (reason optional).`)
   .addField("=lock [#channel] (reason)", `Locks a channel so that no one can type in it (reason optional).`)
   .addField("=unlock [#channel] (reason)", `Unlocks a channel that was previously locked (reason optional).`)
   .addField("=status [TYPE] (text)", `Changes the bot's status live. Options for type:\n WATCHING, LISTENING, STREAMING, PLAYING\n (Note: This command can only be used by bot owners, not server owners.)`)
   .setColor("RANDOM")
   .setFooter(`Requested by ${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
   .setTimestamp()
let ecoEmbed = new Discord.MessageEmbed()
   .setTitle(`iPhone SE Economy Commands`)
   .setDescription(`Here are all the economy commands in the bot!`)
   .addField("=bal [@user]",`Checks your SE balance in coins. If no user value was given, your balance will show.`)
   .addField("=blackjack",`Plays a game of good old blackjack against the bot.`)
   .addField("=buy [item]", `Buys an item from the shop. Use \`=shop\` to see what items you can purchase.`)
   .addField("=clearinv",`Clears your inventory of items.`)
   .addField("=daily", `Get your daily dose of coins.`)
    .addField("=inventory", `Checks your inventory of items.`)
   .addField("=pay [@user] [amount]", `Gives another user the specified amount of coins via wire transfer.`)
   .addField("=shop", `Find items to buy in this neat little shop o' items.`)
   .addField("=slots", `Spins a slot machine (costs 100 coins)`)
   .addField("=work", `Work for your supper (has a 10 minute cooldown)`)
   .setColor("RANDOM")
   .setFooter(`Requested by ${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
   .setTimestamp()
let mainEmbed = new Discord.MessageEmbed()
   .setTitle(`Help Menu`)
   .setDescription(`Here is the menu to commands.`)
   .addField("=help mod", `Shows all moderation/admin commands.`)
   .addField("=help fun", `Shows all the fun commands.`)
   .addField("=help economy", `Shows all the economy commands.`)
   .addField("=help misc", `Any commands not included in the above commands get listed here.`)
   .setColor("RANDOM")
   .setFooter(`Requested by ${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
   .setTimestamp()
  let category = args.join(" ").toLowerCase()
  if (category === categories[0]) {
    category = funEmbed
  } else if (category === categories[1]) {
    category = miscEmbed;
  } else if (category === categories[2]) {
    category = modEmbed
  } else if (category === categories[3]) {
    category = ecoEmbed;
  } else {
    category = mainEmbed
  }
  return msg.channel.send(category);
  }
};
