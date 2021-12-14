const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['hk'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle('KYS')
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);
        //embed.setDescription('This code comes from a GitHub project [ZerioDev/Music-bot](https://github.com/ZerioDev/Music-bot).\nThe use of this one is possible while keeping the credits for free.\nIf you want to remove the credits join the Discord support server.');
        embed.addField(`Enabled - ${commands.size}`,'KYS');

        embed.setTimestamp();
        embed.setFooter('Music comes first', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};