const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args, themiss) => {

   message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let davetsayi = personalInvites.reduce((p, v) => v.uses + p, 0);
return message.channel.send(`${user} - Davetinizle gelen kişi sayısı: ${davetsayi}`);
   })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetsayım"],
  permLevel: 0
};

exports.help = {
  name: 'davetlerim',
  description: 'Davetinizle gelen kişi sayısını gösterir',
  usage: 'davetlerim'
}