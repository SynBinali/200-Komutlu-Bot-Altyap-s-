const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu]()`  + "" + ``  + "** | **" + `[Web Sitesi](https://botclub.me/)  `, false)
              return message.channel.send(Genel)
         
       
       return;
    }
	
	//GENEL KOMUTU
    if(args[0] === "Ticket" || args[0] === "bilet" || args[0] === "ticket" || args[0] === "tikıt") {
              let Ticket = new Discord.MessageEmbed()
  .setAuthor('Ticket ', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Ticket').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
              return message.channel.send(Ticket)
         
       
       return;
    }
	
	
	
	//GENEL KOMUTU
    if(args[0] === "Kayıt" || args[0] === "kayıt" || args[0] === "register" || args[0] === "reg") {
              let kayit = new Discord.MessageEmbed()
  .setAuthor('Kayıt ', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Kayıt').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
              return message.channel.send(kayit)
         
       
       return;
    }
	
	
	
	
//GENEL KOMUTU
    if(args[0] === "Kullanıcı" || args[0] === "user" || args[0] === "kullanıcı" || args[0] === "qullanıcı") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Kullanıcı').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu](https://discord.gg/dmCQy8zf)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
              return message.channel.send(Genel)
         
       
       return;
    }
	
	    if(args[0] === "Bot" || args[0] === "bot" || args[0] === "botlabot" || args[0] === "qot") {
              let bot = new Discord.MessageEmbed()
  .setAuthor('Bot Komutları', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Bot').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu](https://discord.gg/wRdr938r)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
              return message.channel.send(bot)
         
       
       return;
    }
	
	
	
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu](https://discord.gg/wRdr938r)`  + "" + ``  + "** | **" + `[Web Sitesi](http://botclub.me)  `, false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
//EĞLENCE KOMUTU
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Sahip Komutları', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }


 //MODERASYON KOMUTU
  if(args[0] === "Abone" || args[0] === "abone" || args[0] === "sub" || args[0] === "subscribe") {
   let abonesistemi = new Discord.MessageEmbed()
  .setAuthor('Abone Sistemi', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Abone').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
   return message.channel.send(abonesistemi)
             
       
               return;
  }

 //MODERASYON KOMUTU
  if(args[0] === "Logo" || args[0] === "logo" || args[0] === "logolar" || args[0] === "logos") {
   let logosistemi = new Discord.MessageEmbed()
  .setAuthor('Logo Sistemi', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Logo').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
   return message.channel.send(logosistemi)
             
       
               return;
  }
  
   //MODERASYON KOMUTU
  if(args[0] === "Yedek" || args[0] === "yedek" || args[0] === "yedekleme" || args[0] === "backup") {
   let yedekl = new Discord.MessageEmbed()
  .setAuthor('Yedekleme Sistemi', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Yedek').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
   return message.channel.send(yedekl)
             
       
               return;
  }
  
    
   
   
   
  
  
  
     //MODERASYON KOMUTU
  if(args[0] === "Ticket" || args[0] === "ticket" || args[0] === "tikck" || args[0] === "asdasd") {
   let yedekl = new Discord.MessageEmbed()
  .setAuthor('Ticket Sistemi', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Ticket').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=818567252004962404&scope=bot&permissions=2108157183)` + "** | **" + `[Destek Sunucusu](https://discord.gg/CKyasCWCZQ)`  + "" + ``  + "** | **" + `[Web Sitesi](http://dark-angel.ml/)  `, false)
   return message.channel.send(yedekl)
             
       
               return;
  }
  
   
   

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\` \n **Örnek:** \`${prefix}yardım Genel\``)
  .addField('Kategoriler:', `
  **[${prefix}yardım Genel](https://discord.gg/wRdr938r)** 
  **[${prefix}yardım Eğlence](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Moderasyon](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Sunucu](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Abone](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Logo](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Yedek](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Kullanıcı](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Bot](https://discord.gg/wRdr938r)**
  **[${prefix}yardım kayıt](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Ticket](https://discord.gg/wRdr938r)**
  **[${prefix}yardım Sahip](https://discord.gg/wRdr938r)**
  `)
  .addField("» Linkler", ` [Davet Et]()` + "** | **" + `[Destek Sunucusu](https://discord.gg/wRdr938r)`  + "" + ``  + "** | **" + `[Web Sitesi](http://botclub.me)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    


  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'],
    permLevel: 0, 
	kategori: "Genel"
  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };