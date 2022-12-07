const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')
   let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.reply('Lütfen Kayıt Yrtkilisini Etiketleyin Sileceğin Kişiyi Etiketle!');
     if (db.has(`kayitstats_${user.id}`) === false) return message.reply("Zaten 0 Görünüyor!")


   message.reply('Belirtilen Kişinin Kayıt Rol Verme Sayısı Sıfırlanmıştır.')
db.delete(`kayitstats${user.id}`)

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: ["abonestats-kapat"], 
permLevel: 0,
kategori: "Kayıt"
}

exports.help = {
 name: 'abonesayısını-sıfırla', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};