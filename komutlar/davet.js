const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("PİNK")
.setTitle("**•Davet**")
.setThumbnail("")
.setDescription(`
• Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz.** Herhangi bir **bug/hata** bulursanız d!bug-bildir ile bize iletebilirsiniz.

• Sunucuma nasıl eklerim?
Sunucuna eklemek istiyorsan [buraya tıklayarak](https://discord.com/oauth2/authorize?client_id=793242553398853682&permissions=2146958847&scope=bot) ekleyebilirsin.
© 2020 Dark Angel | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'davet', 
    description: 'davet!',
    usage: '-davet'
};