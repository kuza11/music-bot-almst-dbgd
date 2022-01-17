module.exports = {
    name: 'join',
    aliases: ['j'],
    utilisation: '{prefix}join',
    voiceChannel: true,

    async execute(message){
        const queue = await player.createQueue(message.guild);
        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`I can't join the voice channel ${message.author}... try again ? ❌`);
        }
    },
}