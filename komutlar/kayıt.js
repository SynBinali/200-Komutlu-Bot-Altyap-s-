const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
  const kayitkanal = await db.fetch(`kayitk_${message.guild.id}`)
  
  if(kayitkanal == null) return message.channel.send('');
  if (message.channel.id !== kayitkanal) return message.channel.send(`Bu Komutu Sadece <#${kayitkanal}> Kanalında Kullanabilirsiniz!`);
  if (kayitkanal == true) return; 
  if (kayitkanal == false) return message.channel.send(`Bu Sunucuda Kayıt Sistemi Aktif Edilmemiş.`);
  
 if(!message.member.roles.cache.has(db.fetch(`kayityetkili_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
 }
  let user = message.mentions.members.first()
   if (!user) return message.reply('Kime Rol Verceğimi Yazmadın!').catch(console.error);
   if (user.roles.cache.has(db.fetch(`kayıtrolü_${message.guild.id}`))) return message.channel.send("Bu Kullanıcıda Zaten Abone Rolü Var!")
  user.roles.add(db.fetch(`kayıtrolü_${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTimestamp()
  .setFooter('')
  .addField(`Kayıt Olan Kullanıcı;`, `${user}`,true)
  .addField(`Kayıt Eden Yetkili;`,`${message.author}`,true)
      message.channel.send(embed)
  db.add(`kayitstats${message.author.id}.${message.guild.id}`, 1)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['k'],
  kategori: "Kayıt"
};

exports.help = {
  name: "kayıt",
  description: "Kayıt Edersiniz!",
  usage: "kayıt"
};