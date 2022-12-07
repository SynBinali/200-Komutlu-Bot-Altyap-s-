const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let kayityetkilisi = message.mentions.roles.first()
  if (!kayityetkilisi) return message.channel.send('Lütfen Kayıt Yetkili rolünü etiketlermisin?')
   
  db.set(`kayityetkili_${message.guild.id}`, kayityetkilisi.id)
  message.channel.send(`Kayıt Yetkili Rolü Başarıyla Ayarlandı; **${kayityetkilisi}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["kayıt-y-rol"],
 permLevel: 3,
  kategori:"Kayıt"
};

exports.help = {
 name: 'kayıt-yetkili-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};