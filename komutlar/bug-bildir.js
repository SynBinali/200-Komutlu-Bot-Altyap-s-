const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** :x:')
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const embed = new Discord.MessageEmbed()
.setTitle("Dark Angel Bug Sistemi")
.setColor('BLUE')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('827522495392514118').send(embed)
  
message.channel.send("Bug bildiriminiz gönderildi. :confetti_ball:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: 'bug-bildir',
  description: 'bug belirtmeye yarar',
  usage: 'bug-bildir <bug>'
}