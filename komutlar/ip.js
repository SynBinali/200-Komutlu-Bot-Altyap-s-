const Discord = require('discord.js');
const IPinfo = require('get-ipinfo');
exports.run = async (client, message, args) => {
let ipadresi = args[0]
if(!ipadresi) return message.reply("Lütfen bir ip adresi giriniz.")
IPinfo(ipadresi, function(err, ip) {
const embed = new Discord.MessageEmbed()
    .setTitle('İp Bilgileri')
    .addField('Oturduğu Şehir:', ip.city || "NULL")
    .addField('İp Numarası:', ip.ip || "NULL")
    .addField('Host:', ip.hostname || "NULL")
    .addField('Yer:', ip.region || "NULL")
    .addField('Kordinat:', ip.loc || "NULL")
    .addField('Şirket:', ip.org || "NULL")
    .addField('Posta Kodu:', ip.postal || "NULL")
    .setColor('RANDOM');
message.channel.send(embed)
          })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'ip-bilgi', 'aypi'],
  permLevel: 0
};

exports.help = {
  name: "ip",
  description: "Botun istatistiklerini gösterir",
  usage: "ip"
};