const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run =(client, message, params) => {
    if (!message.guild) {
          if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
      
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('PURPLE')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + "Ambulans Geliyor Dayan")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/684463435161010273/685138347848499240/giphy.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: 'ara112',
  description: 'Ambulans Çağırır (ciddiye almayın)',
  usage: 'ara112'
};
