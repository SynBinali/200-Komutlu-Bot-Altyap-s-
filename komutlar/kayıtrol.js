const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let abonerol = message.mentions.roles.first()
  if (!abonerol) return message.channel.send('Lütfen Abone rolünü etiketlermisin?')
   
  db.set(`kayıtrolü_${message.guild.id}`, abonerol.id)
  message.channel.send(`Abone Rolü Başarıyla Ayarlandı; **${abonerol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"Kayıt"
};

exports.help = {
 name: 'kayıt-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};