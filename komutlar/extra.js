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
**•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=790354206040653844&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **d!yardım**


**• Komutlar**

> [d!anket] → Anket yaparsınız.

> [d!id] → İstediğin bi kişinin ID sini alır.
> [d!kanal-id] → Etiketlediğin kanalın ID sini atar.
> [d!davet-oluştur] → Davet Oluşturur.
> [d!oy-kick] → Oylama yaparak bir kişiyi sunucudan atar.

> [d!davet-sıralaması] → Sunucuda yapılan davetleri sıralar
> [d!iltifat] → Etiketlediğin kişiye bot iltifat eder.
> [d!nick] → Etiketlediğin kişinin ismini değiştirir.
> [d!tekerleme] → Tekerleme yazar.

> [d!desteaç] → Zula deste açar.
> [d!soygunyap] → Vurgun yapmaya hazırmısın? :D

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : <@447383435586174976>**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2021 Dark Angel | Tüm hakları saklıdır.
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
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};