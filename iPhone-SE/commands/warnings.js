const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: "warnings",
	description: "lists warnings for a certain user",
	execute(msg, args, bot) {
		if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('You lack the permissions necessary to run this command.')
		const user = msg.mentions.members.first() || msg.author
		let warnings = db.get(`warnings_${msg.guild.id}_${user.id}`)
		if(warnings === null) return msg.channel.send(`${user} has no warnings`)
		msg.channel.send(`${user} has **${warnings}** warning(s)`)
	}
}