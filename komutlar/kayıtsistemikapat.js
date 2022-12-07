const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`kayıtk_${message.guild.id}`)) return message.channel.send('Görünüşe Göre Abone Sistemi Zaten Kapalı Görünüyor :).')
   

   message.reply('Abone Sistem Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`kayıtk_${message.guild.id}`)
db.delete(`kayıtrolü_${message.guild.id}`)
db.delete(`kayıtyetkilisi_${message.guild.id}`) 


}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0,
kategori: "Kayıt"
}

exports.help = {
 name: 'abonesistem-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};