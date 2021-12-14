let id;

var cnt = 0;

module.exports = {
    name: 'pinging',
    aliases: ['pg'],
    utilisation: '{prefix}pinging [name] [count]',
    execute(client, message, args) {
        var i = 0;
        id = setInterval(ping, 2000);
        cnt = parseInt(args[1]);
        if(cnt > 10 || args[1] == null || Number.isNaN(cnt)){cnt = 10; message.channel.send(`Please enter a valid number ${message.author}... setting to default - 10. ❌`);}
        function ping(){
            message.channel.send(`${args[0]}`);
            i++;
            if(i >= cnt) {
                clearInterval(id);
                id = null;
            }  
        }
        
    },
}