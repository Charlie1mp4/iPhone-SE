const Discord = require("discord.js");

module.exports = {
    name: "status",
    description: "Sets the bots status (Only bot owners can use this)",
    execute(msg, args, bot) {
        if(msg.author.id !== '680686691937288234' && msg.author.id !== '765687453625221160' && msg.author.id !== `762697160457191484`) return msg.channel.send("You lack permissions to run this command!").then(m => m.delete({ timeout: 5000 }));
        let statusType = args[0]
        let statuses = ["WATCHING", "LISTENING", "PLAYING", "STREAMING"]
        if(!statusType === statuses) statusType = "STREAMING"
        let status = args.slice(1).join(" ")
        if(!status) status = "=help"
        bot.user.setActivity(status, {
            type: statusType,
            url: "https://twitch.tv/charlie_mp4yt"
        })
        msg.react('✅')
    }
}