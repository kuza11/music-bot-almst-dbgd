const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hell',
    aliases: ['hl'],
    utilisation: '{prefix}hell',

    execute(client, message, args) {

        message.channel.send("Peklo je místo v posmrtném životě, ve kterém jsou zemřelí podrobeni utrpení za viny, obvykle jako věčný trest. Náboženství s lineárním pojetím historie líčí peklo jako věčné příkladem křesťanství a islám, zatímco náboženství s cyklickým pojetím času a reinkarnací líčí peklo jako přechodný stav mezi inkarnacemi, jako například v dharmických náboženstvích. Peklo je tradičně umístěno v podzemí (viz podsvětí). Jiným místem posmrtného života je nebe či ráj. Další náboženství považují podsvětí za říši mrtvých obvykle umístěné podzemí například Hádés nebo Šeol. Ve starověkých mytologiích existuje vstup do podsvětí ze světa živých (viz také brána do pekel) kam odcházeli duše zemřelých. Peklo je součástí řady mytologií, náboženství a folkloru. Peklo je obýváno démony a dušemi zemřelých. Peklo je v náboženských představách včetně křesťanství a islám popisováno jako jezero ohně a síry. V jiných tradicích je peklo naopak chladné.");
    },
}