player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
    queue.metedata.send(`Error ${error.message}, reconnecting... ❌`);
    var chan = queue.connection.channel;
    queue.connection.end();
    queue.connect(chan);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
    queue.metedata.send(`Error ${error.message}, reconnecting... ❌`);
    var chan = queue.connection.channel;
    //queue.connection.end();
    queue.destroy();
    queue.connect(chan);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Started playing ${track.title} in **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} added in the queue ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('I was manually disconnected from the voice channel, clearing queue... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nobody is in the voice channel, leaving the voice channel... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('I finished reading the whole queue ✅');
});