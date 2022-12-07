const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const destek = new Discord.MessageEmbed()

.setColor("PİNK")
.setTitle("**•Destek**")
.setThumbnail("")
.setDescription(`
• Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz.** Herhangi bir **bug/hata** bulursanız d!bug-bildir ile bize iletebilirsiniz.

• Destek Sunucumuza Gelerek Botlarınızı 7/24 Yapabilirsiniz
[buraya tıklayarak](https://discord.gg/NYUBgY8JH5) 
© 2020 Dark Angel | Tüm hakları saklıdır.
`)
 

return message.channel.send(destek)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'destek', 
    description: 'destek!',
    usage: '-destek'
};