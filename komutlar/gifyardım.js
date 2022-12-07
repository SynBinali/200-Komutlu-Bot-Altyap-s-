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
** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=790354206040653844&permissions=8&scope=bot)** **•** ****
Bir komut hakkında detaylı __yardım için__: **d!yardım**

• Bot ile ilgili tavsiyelerinizi veya istediniğiniz bi kodu **d!istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **d!bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> d!moderasyon → Moderasyon komudları görüntüler.
> d!kullanıcı → Kullanıcı komutları.
> d!eğlence → eğlence komutları.
> d!logo → Logo komutları.
> d!gifyardım → Gif komutları.
> d!extra → Extra komutlar.
> d!çekiliş → Çekiliş Yaparsınız Örnek d!çekiliş 1h Kod vb
**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : <@447383435586174976>**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Tüm Hakları Saklıdır.`)
 

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
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};