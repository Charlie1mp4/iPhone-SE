module.exports = {
    name: 'network',
    description: "Initiates Network Setup",
    execute(msg, bot){
    const Discord = require("discord.js");
     let swift = msg.guild.channels.cache.find(role => role.name === "iphone-network");
        let setupEmbed = new Discord.MessageEmbed()
            .setColor(`#2ae7f0`)
            .setTitle(`Welcome to iPhone Network **${msg.guild.name}**!`)
            .setDescription(`iPhone-Network has been setup! You can chat with people from other servers, as if they were here.`)       
        if(swift) return msg.reply(`**iPhone Network** has already been set up in this server. Head to ${swift} to start chatting!`) 
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Ask a server administrator to set **iPhone Network** up.");
	channel = msg.guild.channels.create('iphone-network', {
				type: 'text',
				topic: 'Welcome to the iPhone Network v1.0! Say Hi, and be friendly.',
				reason: 'Hello! An admin has done =network and created the channel.',})

		.then(createdChannel => { msg.channel.send(`iPhone Network set up in ${createdChannel}`)
				.then(msg => {createdChannel.send(setupEmbed)
					.then(m => {createdChannel.createWebhook(`iPhone Network`, {
						avatar: `https://cdn.discordapp.com/avatars/729566356634206208/8347a220b620f2e34e54f5334c423878.png?size=256`,
							}).then(webhook => console.log(`Created webhook ${webhook}`)).catch(console.error)
								})});
    })
}}