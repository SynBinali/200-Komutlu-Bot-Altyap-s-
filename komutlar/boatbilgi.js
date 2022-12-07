const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setFooter('Dark Angel \'Buyur benim istatistiklerim' , bot.user.avatarURL())
  .addField(" **<a:RainbowOkGif:807979489392066590> Geliştiricim**", "<@447383435586174976>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("» **Sitemiz**", "[Tıkla](http://dark-angel.ml/)")
  .addField("» **Destek Sunucumuz**", "[Tıkla](https://discord.gg/2J4rTrSBBG)")
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=793242553398853682&permissions=2146958847&scope=bot)")
   
 

 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'istatistik'],
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
//nukecode


////