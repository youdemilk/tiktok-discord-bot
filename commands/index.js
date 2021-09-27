const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
        .setColor('#da7422')
        .setTitle('TikTok Video Downloader - Help')
        .setURL("https://github.com/youdemilk/tiktok-discord-bot")
        .addFields({name: "Help", value: "Sends This Help Message" })
        .setFooter("TikTok Video Downloader", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
    message.channel.send({embed: help })
};
