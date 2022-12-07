const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "d!";
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:ReddedilmiPn:807979384316362763>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<a:by:752306236606906399>  **Otorol Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: `d!otorol-mesaj -uye- Hoşgeldin! seninle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('<:OnaylanmPng:807979384416895016> **Oto Rol mesajı** `'+mesaj+'` **Olarak ayarlandı!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-mesaj'],
	kategori: "Moderasyon"
  };
  
  exports.help = {
    name: 'otorol-mesaj',
    description: 'Otorol Mesajını Ayarlarsınız',
    usage: 'otorol-mesaj'
  };