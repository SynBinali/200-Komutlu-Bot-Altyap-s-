const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:by:752306236606906399> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:by:752306236606906399>  **Bu özellik zaten kapalı! **`)
 
 
  message.channel.send(`<a:giri:804983224538628127>  **Otorol Sistemi başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-kapat'],
	kategori: "Moderasyon"
  };
  
  exports.help = {
    name: 'otorol-kapat',
    description: 'Otorolü Kapatırsınız',
    usage: 'otorol-kapat'
  };