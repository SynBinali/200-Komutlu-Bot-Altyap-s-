const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const ayarlar = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:by:752306236606906399>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:by:752306236606906399>  **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @rol #kanal\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`<a:by:752306236606906399>   **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Dark Angel Otorol Sistemi▬▬▬▬▬▬▬▬▬
║►  Otorol Aktif Edildi.
║►   **${rol}** Olarak Güncelledim! 
║►   Otorol Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-ayarla'],
	kategori: "Moderasyon"
  };
  
  exports.help = {
    name: 'otorol-ayarla',
    description: 'Otorolü Ayarlarsınız.',
    usage: 'otorol-ayarla'
  };