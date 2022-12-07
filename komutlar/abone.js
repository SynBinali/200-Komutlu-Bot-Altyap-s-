const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
  const codeworkabone = await db.fetch(`abonek_${message.guild.id}`)
  
  if(codeworkabone == null) return message.channel.send('');
  if (message.channel.id !== codeworkabone) return message.channel.send(`Bu Komutu Sadece <#${codeworkabone}> Kanalında Kullanabilirsiniz!`);
  if (codeworkabone == true) return; 
  if (codeworkabone == false) return message.channel.send(`Bu Sunucuda Abone Sistemi Aktif Edilmemiş.`);
 
	
 if(!message.member.roles.cache.has(db.fetch(`aboneyetkilisi_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
 }

  let user = message.mentions.members.first()
   if (!user) return message.reply('Kime Rol Verceğimi Yazmadın!').catch(console.error);
   if (user.roles.cache.has(db.fetch(`abonerolü_${message.guild.id}`))) return message.channel.send("Bu Kullanıcıda Zaten Abone Rolü Var!")
  user.roles.add(db.fetch(`abonerolü_${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTimestamp()
  .setFooter('')
  .addField(`Abone Rolü Alan Kullanıcı;`, `${user}`,true)
  .addField(`Abone Rolü Veren Yetkili;`,`${message.author}`,true)
      message.channel.send(embed)
  db.add(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['a'],
  kategori: "Abone"
};

exports.help = {
  name: "abone",
  description: "Abone Rolü Verir!",
  usage: "abone"
};