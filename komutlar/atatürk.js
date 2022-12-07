const Discord = require('discord.js');

exports.run = async(client, message) => {
         if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Atamız Mustafa Kemal Atatürkü Saygı Sevgi Ve Minnetle Anıyoruz.')
    .setColor(3447003)
        .setImage(`https://cdn.discordapp.com/attachments/797757475159146516/797812382562779166/17.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//CrewCode
exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};