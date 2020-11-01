const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: "slots",
    description: "play slots for money",
    aliases: ["slots"],
    /**
     * @param {Discord.Message} msg
     * @param {Discord.Client} bot
     * @param {String[]} args
     */
    run: async (msg, args, bot) => {
        if (!msg.guild.me.hasPermission("ADD_REACTIONS")) return msg.channel.send("I don't have add_reactions permissions, so I can't run this command.").then(m => m.delete({ timeout: 5000 }))
        let slotTicket = 100
        let amt = await db.fetch(`coins_${msg.guild.id}_${msg.author.id}`)
        if (amt < slotTicket) return msg.channel.send("Slots cost 100 coins to play!").then(m => m.delete({ timeout: 5000 }))
        await db.subtract(`coins_${msg.guild.id}_${msg.author.id}`, 100)
        let winChance = Math.floor(Math.random() * 100) + 1
        if (winChance === 7) {
            const SevensEmbed = new Discord.MessageEmbed()
                .setTitle("JACKPOT")
                .setColor("RANDOM")
                .setDescription("OH MY GOD WHAT")
                .addFields(
                    {
                        name: "Slots", value: "\<:slots_seven:764740200298446860\>|\<:slots_seven:764740200298446860\>|\<:slots_seven:764740200298446860\>", inline: true
                    },
                    {
                        name: "Value", value: "1000000 coins!", inline: true
                    }
                )
                .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            msg.channel.send(SevensEmbed)
            await db.add(`coins_${msg.guild.id}_${msg.author.id}`, 1000000)
        } else if (winChance === 10) {
            const peachEmbed = new Discord.MessageEmbed()
                .setTitle("You won!")
                .setDescription("Nice!")
                .setColor("RANDOM")
                .addFields(
                    {
                        name: "Slots", value: "🍑|🍑|🍑", inline: true
                    },
                    {
                        name: "Value", value: "1000 coins!", inline: true
                    }
                )
                .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            msg.channel.send(peachEmbed)
            await db.add(`coins_${msg.guild.id}_${msg.author.id}`, 1000)
        }  else if (winChance === 49) {
            const appleEmbed = new Discord.MessageEmbed()
            .setTitle("You won!")
            .setDescription("Nice!")
            .setColor("RANDOM")
            .addFields(
                {
                    name: "Slots", value: "🍎|🍎|🍎", inline: true
                },
                {
                    name: "Value", value: "5000 coins!", inline: true
                }
            )
            .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            .setTimestamp()
        msg.channel.send(appleEmbed)
        await db.add(`coins_${msg.guild.id}_${msg.author.id}`, 5000)
        } else if (winChance === 73) {
            const lemonEmbed = new Discord.MessageEmbed()
            .setTitle("You won!")
            .setDescription("Nice!")
            .setColor("RANDOM")
            .addFields(
                {
                    name: "Slots", value: "🍋|🍋|🍋", inline: true
                },
                {
                    name: "Value", value: "3000 coins!", inline: true
                }
            )
            .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            .setTimestamp()
        msg.channel.send(lemonEmbed)
        await db.add(`coins_${msg.guild.id}_${msg.author.id}`, 3000)
        } else {
			let lose = [
             "\<:slots_seven:764740200298446860\>|:apple:|\<:slots_seven:764740200298446860\>",
			 "\<:slots_seven:764740200298446860\>|:peach:|\<:slots_seven:764740200298446860\>",
			 ":banana:|\<:slots_seven:764740200298446860\>|:lemon:",
			 ":peach:|:apple:|:lemon:",
			 ":orange_circle:|:apple:|:lemon:",
			 ":lemon:|:lemon:|\<:slots_seven:764740200298446860\>",
			 ":banana:|:banana:|\<:slots_seven:764740200298446860\>",
			 ":peach:|:peach:|\<:slots_seven:764740200298446860\>",
			 ":apple:|:apple:|\<:slots_seven:764740200298446860\>",
			 ":apple:|\<:slots_seven:764740200298446860\>|\<:slots_seven:764740200298446860\>",
			 "\<:slots_seven:764740200298446860\>|\<:slots_seven:764740200298446860\>|:apple:",
			 ":banana:|:apple:|:peach:",
			 ":lemon:|:banana:|:peach:"
			 ];
			let result = Math.floor(Math.random() * lose.length);
            const loseEmbed = new Discord.MessageEmbed()
                .setTitle("JACKPO--- oh...")
                .setColor("RANDOM")
                .setDescription("Nice! You suck!")
                .addFields(
                    {
                        name: "Slots", value: lose[result], inline: true
                    },
                    {
                        name: "Value", value: "Nothing lmao", inline: true
                    }
                )
                .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png' }))
                .setTimestamp()
            msg.channel.send(loseEmbed)
        }
    }
}