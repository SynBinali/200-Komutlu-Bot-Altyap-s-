const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '447383435586174976') return;
  let goldu = args[0]
  if (!goldu) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`golduye${goldu}`, 'gold')
  
  message.channel.send(`**${goldu}** IDli kullanıcı artık gold üye oldu!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-ver"],
  permLevel: 0
};
exports.help = {
  name: 'gold-ver',
  description: '[Admin Komutu]',
  usage: 'gold-ver <ID>'
};
