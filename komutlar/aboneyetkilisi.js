const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let aboneyetkilisi = message.mentions.roles.first()
  if (!aboneyetkilisi) return message.channel.send('Lütfen Abone Yetkili rolünü etiketlermisin?')
   
  db.set(`aboneyetkilisi_${message.guild.id}`, aboneyetkilisi.id)
  message.channel.send(`Abone Yetkili Rolü Başarıyla Ayarlandı; **${aboneyetkilisi}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["abone-y-rol"],
 permLevel: 3,
  kategori:"Abone"
};

exports.help = {
 name: 'aboneyetkilisi-ayarla',
 description: 'Abone Yetkilisi Rolünü Ayarlarsınız.',
 usage: 'kayıt-rol <@rol>'
};