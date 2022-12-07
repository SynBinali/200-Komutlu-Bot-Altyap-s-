const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:by:752306236606906399> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<a:by:752306236606906399>  **Ayarlanmamış bir özellik sıfırlanamaz! **`)
 
 
  message.channel.send(`<a:giri:804983224538628127> **Otorol mesajı başarılı bir şekilde sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-mesaj-sıfırla'],
	kategori: "Moderasyon"
  };
  
  exports.help = {
    name: 'otorol-mesaj-sıfırla',
    description: 'Otorol Mesajını  Sıfırlarsınız',
    usage: 'otorol-mesaj-sıfırla'
  };