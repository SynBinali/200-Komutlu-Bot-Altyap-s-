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
.setTitle("**  » Dark Angel Bot  **")

.setDescription(`
**» Bağlantılar** 
**•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=790354206040653844&permissions=2146958847&scope=bot)** **•** **[Web-Site](https://dark-angel.ml)**
Bir komut hakkında detaylı __yardım için__: **d!yardım**


**• Komutlar**
> d!güvenlik  #kanal Güvenlik Kanalını Belirlersiniz > ! 
> d!sunucu-kur > Sohbet & Oyun Temalı Sunucu Kurar ! 
> d!çekiliş-sistemi > Çekiliş Sistemini Görürsünüz !
> d!otorol → Otorol Sistemini Görürsünüz ! 
> d!sunucu-tanıt > Sunucunuzu Tanıtırsınız !
> d!kayıt-bilgi →  Kayıt için bilgi.
> d!taç → Sunucunun sahibini gösterir.
> d!sil → Yazdığınız miktarda mesajı siler.
> d!ban → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> d!mute → Etiketlediğiniz kişiyi sunucuda Mutelersiniz.
> d!duyuru → Bot yazdıgının mesajı duyuru yapar.
> d!slowmode → Yavaş modu ayarlarsınız. 
> d!forceban →  ID ile ban atar!
> d!unban → Birisinin banını açarsınız.
> d!üyedurum →  Sunucu üyeleri hakkında bilgi verir
> d!nuke → Nuke Atarsınız


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
    enabled: false, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'moderasyon'
};