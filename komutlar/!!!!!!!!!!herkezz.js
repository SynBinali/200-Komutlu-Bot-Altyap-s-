const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':hayirr: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkese rol verebilmem için bir rol etiketlemelisin.')


   const embed = new Discord.MessageEmbed()
     .setDescription(`Herkese ${rol} adlı rol verildi!`)
        .setColor(rol.hexColor)
   const ver = new Discord.MessageEmbed()
   .setDescription('Bir kullanıcıya ``' + rol.name + '`` adlı rol verildi!')
   .setColor(rol.hexColor)

   message.guild.members.cache.forEach(u => {
u.roles.add(rol)
})
  // message.channel.send('Herkese **'+ rol.name +'** adlı rol verildi!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['toplu-rol-ver',"hrolver"],
    permLevel: 5,
	kategori: "Sahip"
}

exports.help = {
    name: 'banaozel',
  kategori: "Sahip",
    description: 'owner only.',
    usage: 'owneronly'
}