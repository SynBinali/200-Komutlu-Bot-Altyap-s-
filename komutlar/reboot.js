const Discord = require("discord.js");
const snekfetch = require("snekfetch")
const axios = require("axios")
const fs = require('fs');
const hastebin = require('hastebin-gen');
const db = require("quick.db");
const moment = require("moment");
moment.locale("tr");
const parse = require("parse-ms");
const ms = require('ms')
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
if(message.author.id !== ayarlar.sahip) return
const filter = (reaction, user) => {
return ["799004768705839104", "799004901882462238"].includes(reaction.emoji.id) && user.id === message.author.id;
};
message.channel.send(
new Discord.MessageEmbed()
.setColor(ayarlar.renk)
.setTimestamp()
.setFooter("reboot isteği")
.setDescription("Merhaba sahibim, botu baştan başlatmak istiyorsan lütfen aşağıda belirlenen emojiye tıkla.")
).then(async s => {
await s.react(`799004768705839104`)
await s.react(`799004901882462238`)
s.awaitReactions(filter, {max: 1,time: 60000,errors: ['time']}).then(async collected => {
const reaction = collected.first();
if(reaction.emoji.id === "799004768705839104") {
await s.reactions.removeAll()
s.edit(
new Discord.MessageEmbed()
.setColor("GREEN")
.setTimestamp()
.setFooter("reboot isteği başarılı!")
.setDescription("Bot kendini baştan başlattı!")
)
setTimeout(() => {
process.exit(150)
},1000)
}
if(reaction.emoji.id === "799004901882462238") {
await s.reactions.removeAll()
s.edit(
new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setFooter("reboot isteği reddedildi!")
.setDescription("İşlemi başarı ile reddettiniz.")
)
}
}).catch(async err => {
await s.reactions.removeAll()
s.edit(
new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setFooter("reboot isteği başarısız!")
.setDescription("Bir emojiye tıklamadığınız için işlem iptal edildi.")
)
})
})
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rb"],
  permLevel: 5,
  kategori: "Sahip"
};

module.exports.help = {
  name: 'reboot',
  description: 'Botu baştan başlatır',
  usage: 'reboot' 
};