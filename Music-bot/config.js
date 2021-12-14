module.exports = {
    app: {
        px: 'kuz!',
        token: 'OTE4ODc4ODkxNDY3MjQzNTkw.YbNqpw.7lmAC0bL4nZkocnM3-PQKvOY1eY',
        playing: 'kuz!help',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
