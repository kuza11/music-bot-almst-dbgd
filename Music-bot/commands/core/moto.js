//const { ClientUser } = require('discord.js');
module.exports = {
    name: 'moto',
    aliases: ['mot'],
    utilisation: '{prefix}moto',
    execute(client, message){
    message.channel.send({files: [{attachment: 'path'}]})
    },
}