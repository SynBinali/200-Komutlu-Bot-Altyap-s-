const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '447383435586174976') return;
  let goldu = args[0]
  if (!goldu) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`golduye${gold}`, 'gold')
  
  message.channel.send(`**${goldu}** Adlı Kullanıcı Gold Üye Değil`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'gold-al',
  description: '[Admin Komutu]',
  usage: 'gold-al <ID>'
};