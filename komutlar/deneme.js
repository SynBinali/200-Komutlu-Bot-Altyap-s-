const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  
  
  let dil = db.fetch(`dil_${message.guild.id}`)
  
  
 if(dil == 'tr_TR'){
   
   message.channel.send('Merhaba Dil Sistemi Henüz Bitmemiştir!')
   //Buraya kodların Türkçe Hali gelecek.
 } 
  
  
   if(dil == 'en_EN'){
     
   message.channel.send('Hello Language System %01')
     //Buraya kodların İngilizce Hali gelecek.
     
 } 
 
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["denemeo"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'deneme', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'deneme'
};