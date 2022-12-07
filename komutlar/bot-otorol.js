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

.setColor("BLUE")
.setTitle("** Bot Otorol Sistemi  **")

.setDescription(`
** Ayarlamam İçin Bir Rol Etiketlemeilisin. ** 
 **Rolü Etiketleyemiyorsan Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
 **Örnek Kullanım : d!bot-otorol @rol**
 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem.
`)
 
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["otorol-bot"], 
    permLevel: 0,
	kategori: "Moderasyon"
};
  
  exports.help = {
    name: 'bot-otorol', 
    description: 'Botlara Otomatik Sizin Belirlediğiniz Rolü Verir!',
    usage: 'bot-otorol'
};