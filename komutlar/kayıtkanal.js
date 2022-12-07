const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send('Lütfen Kayıt Kanalını Etiketlermisin?')
   
  db.set(`kayitk_${message.guild.id}`, kanal.id)

 
  message.channel.send(`Kayıt Kanalı Başarıyla Ayarlandı; **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"Kayıt"
};

exports.help = {
 name: 'kayıt-kanal',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};