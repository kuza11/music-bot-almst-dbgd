const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sex',
    aliases: ['sx'],
    utilisation: '{prefix}sex',

    execute(client, message, args) {

        message.channel.send("https://www.pornhub.com");
    },
}