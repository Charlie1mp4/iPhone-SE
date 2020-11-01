const ms = require('parse-ms')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "work",
    description: "work for your supper",
    /**
     * @param {Discord.Message} msg
     * @param {Discord.Client} bot
     * @param {String[]} args
     */
    run: async (msg, args, bot) => {
        let user = msg.author
        let timeout = 600000
        let jobs = [
            "Cashier",
            "Farmer",
            "Secretary",
            "Trucker",
            "Librarian",
            "Police Officer",
            "Pilot",
            "Artist",
            "Youtuber",
            "Freelancer",
            "Handyman",
            "Bus Driver",
            "Civil Engineer",
            "Hitman"
        ]
        let thumbnail = [
            'https://i.pinimg.com/originals/39/27/54/392754cf6bed4495e66fcba705c59e71.gif',
            'https://png.pngtree.com/png-clipart/20190612/original/pngtree-cartoon-farm-png-image_3348756.jpg',
            'https://png.pngtree.com/png-clipart/20190618/original/pngtree-beauty-secretary-business-office-png-image_3934598.jpg',
            'https://png.pngtree.com/png-clipart/20200701/original/pngtree-delivery-worker-push-trolley-in-to-truck-png-image_5367925.jpg',
            'https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-cartoon-library-bookshelf-illustration-png-image_5357144.jpg',
            'https://png.pngtree.com/png-clipart/20200701/original/pngtree-security-guard-man-police-png-image_5390789.jpg',
            'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pilot-png-image_3637406.jpg',
            'https://png.pngtree.com/png-clipart/20200831/original/pngtree-vector-watercolor-splash-texture-background-isolated-hand-drawn-blob-spot-watercolor-png-image_5478780.jpg',
            'https://png.pngtree.com/png-clipart/20190516/original/pngtree-youtube-logo-icon-png-image_3560543.jpg',
            'https://png.pngtree.com/png-clipart/20200701/original/pngtree-young-guy-programmer-freelancer-working-online-working-from-home-office-computer-png-image_5369036.jpg',
            'https://png.pngtree.com/png-clipart/20190516/original/pngtree-modern-building-construction-repair-tools-illustration-png-image_3570642.jpg',
            'https://png.pngtree.com/png-clipart/20190705/original/pngtree-yellow-handpainted-bus-urban-bus-png-image_4241860.jpg',
            'https://png.pngtree.com/png-clipart/20190611/original/pngtree-cartoon-construction-site-png-image_2540017.jpg',
            'https://png.pngtree.com/png-clipart/20191121/original/pngtree-gun-icon-in-simple-style-png-image_5161559.jpg'
        ]
        let jobType = Math.floor(Math.random() * jobs.length) + 1
        if (jobType === 1) {
            jobType = jobs[0]
            thumbnail = thumbnail[0]
        }
        if (jobType === 2) {
            jobType = jobs[1]
            thumbnail = thumbnail[1]
        } 
        if (jobType === 3) {
            jobType = jobs[2]
            thumbnail = thumbnail[2]
        } 
        if (jobType === 4) {
            jobType = jobs[3] 
            thumbnail = thumbnail[3]
        } 
        if (jobType === 5) {
            jobType = jobs[4]
            thumbnail = thumbnail[4]
        }
        if (jobType === 6) {
            jobType = jobs[5]
            thumbnail = thumbnail[5]
        }
        if (jobType === 7) {
            jobType = jobs[6] 
            thumbnail = thumbnail[6]
        }
        if (jobType === 8) {
            jobType = jobs[7] 
            thumbnail = thumbnail[7]
        }
        if (jobType === 9) {
            jobType = jobs[8] 
            thumbnail = thumbnail[8]
        }
        if (jobType === 10) {
            jobType = jobs[9] 
            thumbnail = thumbnail[9]
        }
        if (jobType === 11) {
            jobType = jobs[10]
            thumbnail = thumbnail[10]
        }
        if (jobType === 12) {
            jobType = jobs[11] 
            thumbnail = thumbnail[11]
        }
        if (jobType === 13) {
            jobType = jobs[12] 
            thumbnail = thumbnail[12]
        }
        if (jobType === 14) {
            jobType = jobs[13] 
            thumbnail = thumbnail[13]
        }
        let author = await db.fetch(`worked_${msg.guild.id}_${user.id}`);

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return msg.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1
            if (jobType === jobs[0]) amount = Math.floor(Math.random() * 50) + 1
            if (jobType === jobs[1]) {
                amount = Math.floor(Math.random() * 100) + 1
                if (amount < 30) amount = 30 
            }
            if (jobType === jobs[2]) {
                amount = Math.floor(Math.random() * 150) + 1
                if (amount < 60) amount = 60
            }
            if (jobType === jobs[3]) {
                amount = Math.floor(Math.random() * 125) +1
                if (amount < 50) amount = 50
            }
            if (jobType === jobs[4]) {
                amount = Math.floor(Math.random() * 125) +1
                if (amount < 40) amount = 40
            }
            if (jobType === jobs[5]) {
                amount = Math.floor(Math.random() * 125) +1
                if (amount < 50) amount = 50
            }
            if (jobType === jobs[6]) {
                amount = Math.floor(Math.random() * 225) +1
                if (amount < 125) amount = 125
            }
            if (jobType === jobs[7]) {
                amount = Math.floor(Math.random() * 100) +1
                if (amount < 40) amount = 40
            }
            if (jobType === jobs[8]) {
                amount = Math.floor(Math.random() * 125) +1
                if (amount < 35) amount = 35
            }
            if (jobType === jobs[9]) {
                amount = Math.floor(Math.random() * 200) +1
                if (amount < 100) amount = 100
            }
            if (jobType === jobs[10]) {
                amount = Math.floor(Math.random() * 150) +1
                if (amount < 75) amount = 75
            }
            if (jobType === jobs[11]) {
                amount = Math.floor(Math.random() * 120) +1
                if (amount < 50) amount = 50
            }
            if (jobType === jobs[12]) {
                amount = Math.floor(Math.random() * 575) +1
                if (amount < 300) amount = 300
            }
            if (jobType === jobs[13]) {
                amount = Math.floor(Math.random() * 250) +1
                if (amount < 120) amount = 120
            }
            db.add(`coins_${msg.guild.id}_${user.id}`, amount)
            db.set(`worked_${msg.guild.id}_${user.id}`, Date.now())
            const workedEmbed = new Discord.MessageEmbed()
                .setTitle(`You worked for your supper!`)
                .setColor("RANDOM")
                .setThumbnail(thumbnail)
                .setDescription(`\nYou worked as a **${jobType}** and made **${amount}** coins!`)
                .setFooter(user.username, user.displayAvatarURL({ dynamic: true, format: 'png' }))
            msg.channel.send(workedEmbed)
        }
    }
}