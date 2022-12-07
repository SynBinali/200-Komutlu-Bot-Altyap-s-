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
.setTitle("**  » Dark Angel **")
.setThumbnail("https://images-ext-1.discordapp.net/external/SwVHJL9RD8c7-2WzT9cyoFKsh0AGEOZnOT3h80toWVY/https/api.creavite.co/out/e5526e89-03c0-4825-b801-4e5e69ac4497_standard.gif?width=320&height=41")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/z6vCUMAbDr)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=790354206040653844&permissions=8&scope=bot)** **•** **[Web-Site](https://code-other.tk)**
Bir komut hakkında detaylı __yardım için__: **d!yardım**

**• Normal Komutlar**
> d!kahve → Türk kahvesi icersiniz!
> d!ara112 → Ambulansı arar.
> d!ara155 → Polisi arar.
> d!araba → Araba gifi atar.
> d!zeki → Zeki gifi atar.
> d!nükler → Nükler gifi atar.
> d!beşlik → Beşlik gifi atar.
> d!ağla → Botu ağlar.

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
    name: 'normal', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};