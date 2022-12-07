const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const kurallar = new Discord.MessageEmbed()

.setColor("BLUE")


.setDescription(`
*** ${message.guild.name} Sunucu Kuralları ***
 *** Ses & Chat odalarında Küfür, Troll, Rahatsız etmek & Bass Yasaktır.***
 *** Kişisel sorunlarınızı sunucuya taşımak, Düzeni bozmak, Çıkan tartışmayı uzatmak Yasaktır. ***
***  Din, dil, ırk, Cinsiyetçilik ayrımı Yasak.***
*** Cinsel içerikli görseller paylaşmak Yasaktır.***
***  Spam, flood ve caps Yasaktır.***
*** Küfür, argo ve reklam kesinlikle yasaktır!***
***  Spam ve flood yasaktır!***
***  Din, ırk ve siyaset konuşmak yasaktır!***
 *** Herkes birbirine saygılı olmalıdır!***
 ***  Herkesin görüşü kendinedir bu yüzden tartışmak yasaktır!***
 ***Üstünlük göstermek/taslamak yasaktır!***
 *** Caps ve emoji kullanımı yasaktır! (Aşırı Olmadıkça)***
 *** Oynuyor kısmına reklam, küfür koymak yasaktır!***
 *** Yetkililere karşı gelmek yasaktır!***
***  Bot basmak/j4j yapmak yasaktır!***
   ***Rahatsızlık vermek yasaktır!*** 
***   Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.***
  *** ${message.guild.name} Sunucuya Gelen Herkes Kuralları Okumuş Sayılacaktır ***
  `)
 

return message.channel.send(kurallar)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'kurallar', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'kurallar'
};