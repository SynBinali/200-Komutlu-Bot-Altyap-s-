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

.setColor("RANDOM")
.setTitle("**  » Yenilikler  **")

.setDescription(`
**» Bağlantılar** 
**•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=790354206040653844&permissions=2146958847&scope=bot)** **•** **[Web-Site](https://dark-angel.ml)**
Bir komut hakkında detaylı __yardım için__: **d!yardım**

*** Yenilikler ***
> 1- Otorol Sistemi Getirildi.
> 2- Sayaç Sistemi Getirildi.
> 3- Sunucu Tanıt Komutu Eklendi.
> 4- Çekiliş Sistemi Getirildi.
> 5- d!sunucukur > Sohbet & Oyun Temalı Sunucu Kurar !
> 6- Güvenlik Sistemi Getirildi > d!güvenlik #kanal.
> 7- d!backup Sunucu Yedekleme Sistemi Getirildi.
> 8- d!botlist Ayarlanabilir Botlist Sistemi Getirildi.
> 9- d!bot-otorol > Bot Otorol Sistemi Getirildi.
**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : <@447383435586174976>**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
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
    name: 'yenilikler', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'yenilikler'
};