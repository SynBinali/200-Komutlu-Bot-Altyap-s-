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


** EBAYNAZEC BOT Destek Sunucusu **

**・EBAYNAZEC Bot nedir?**
Ebaynazec BOT, 28 Kasım 2020'den itibaren yardımda bulunan bir bottur.

**・EBAYNAZEC Botu neden kullanmalıyım?**
Çünkü, birçok işinizi kolaylaştıracaktır bu bot. Örneğin: Moderasyon için CapsLock engelleme,KüfürEngel,Mute,SesMute ve daha fazlası; Eğlence için Avatar,Düzello,Hesapla,Espri,Memes,KapakSözler ve daha fazlası için bu botu kullanmalısınız.
  Ayrıca EBAYNAZEC BOT, Discord tarafından **onaylıdır.**

**・ Eee, o zaman ne duruyorsun? Hemen bize katıl!**
Linkler:
**-** > [EbayZanec Davet](https://discord.com/oauth2/authorize?client_id=782261372310257704&scope=bot&permissions=8)


**-** [Destek Sunucusu](https://discord.gg/hNxUTqnbU7)
 

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
    name: 'ebaynazec', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'ebaynazec'
};