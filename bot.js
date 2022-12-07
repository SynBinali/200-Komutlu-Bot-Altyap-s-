const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const ms = require('ms');

const dctrat = require('dctr-antispam.js'); 
require('./util/eventLoader.js')(client);
const fetch = require('node-fetch');


client.on('ready', () => {
    client.user.setPresence({status: '', activity: { name: 'd!yardım ', type: 'WATCHING' }})    
})
const { Constants } = require('discord.js');
Constants.DefaultOptions.ws.properties.$browser = `Discord Android`

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Adet Komut Yüklenmeye Başlıyor...`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`${moment().format("HH:mm:ss")} | Yüklenen Komut => ${props.help.name}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});













/////////////////////////////!//////////////////////////

//


client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(
        "<a:OnaylanmPng:807979384416895016>" +
          member.user.username +
          "`** HoşGeldin! Otomatik Rolün Verildi Seninle Beraber** `" +
          member.guild.memberCount +
          "` **Kişiyiz!**"
      );
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
});




///////////////////////////////////////////////





// OTOROL SON

client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`);
  ///....

  ///....
  if (!mesaj) {
    return client.channels.cache
      .get(kanal)
      .send(
        "<a:OnaylanmPng:807979384416895016> `" +
          member.user.username +
          "`**Adlı Kullanıcı Aramıza Katıldı!** `" +
          sayaç +
          "` **Kişi Olmamıza** `" +
          sonuç +
          "` **Kişi Kaldı.** `" +
          member.guild.memberCount +
          "` **Kişiyiz!**"
      );
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels
      .get(kanal)
      .send(
        `<a:hg:752305081545916438> **Sayaç Sıfırlandı!** \`${member.guild.memberCount}\` **Kişiyiz!**`
      );
    await db.delete(`sayacK_${member.guild.id}`);
    await db.delete(`sayacS_${member.guild.id}`);
    await db.delete(`sayacHG_${member.guild.id}`);
    await db.delete(`sayacBB_${member.guild.id}`);
  }
  if (mesaj) {
    const mesaj31 = mesaj
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.size}`)
      .replace("-kalanuye-", `${sonuç}`)
      .replace("-hedefuye-", `${sayaç}`);
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});

client.on("guildMemberRemove", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`);
  if (!kanal) return;
  if (!sayaç) return;
  ///....

  if (!mesaj) {
    return client.channels.cache
      .get(kanal)
      .send(
        "<:ReddedilmiPng:807979384316362763> `" +
          member.user.username +
          "` **Adlı Kullanıcı Aramızdan Ayrıldı.**`" +
          sayaç +
          "` **Kişi Olmamıza** `" +
          sonuç +
          "` **Kişi Kaldı.** `" +
          member.guild.memberCount +
          "` **Kişiyiz!**"
      );
  }

  if (mesaj) {
    const mesaj31 = mesaj
      .replace("-uye-", `${member.user.tag}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`)
      .replace("-kalanuye-", `${sonuç}`)
      .replace("-hedefuye-", `${sayaç}`);
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});
////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////



///// PREMİUM SİSTEMİ BOTJS///////
client.on("message", async message => {


let gold = require("quick.db").fetch(`prexgold${message.author.id}`)
if (gold === "gold") {

  const embed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(" Hizaya Geçin Bu Bir **Gold** Üye ! ")
  message.channel.send(embed)

  } else {

return;

  }

})
///// PREMİUM SİSTEMİ BOTJS/////// END///




//////////////////////////////////////

client.on('guildMemberAdd',async member => {
    let user = client.users.cache.get(member.id);
    let kanal = client.channels.cache.get(db.fetch(`guvenlik${member.guild.id}`)) 
         const Canvas = require('canvas')
         const canvas = Canvas.createCanvas(360,100);
         const ctx = canvas.getContext('2d');
    
    const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png') //resimleri yapıştırdık darkcode ailesi
      const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png') //nurayada yapıştırdık 
      const kurulus = new Date().getTime() - user.createdAt.getTime();
      const gün = moment(kurulus).format('dddd');  
      var kontrol;
        if (kurulus > 2629800000) kontrol = resim2 ///dedikki kuruluş tarihi 2629800000 saniyeden buyuk ise resim2 yi gonder
      if (kurulus < 2629800000) kontrol = resim1 ///dedikki kuruluş tarihi 2629800000 saniyeden kuçuk ise resim1 yi gonder
  
  
       const background = await Canvas.loadImage( "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png"); //arka planımız
         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
     
  
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: "png"}));
    ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
    ctx.beginPath();
      ctx.lineWidth = 4;
    ctx.fill()
      ctx.lineWidth = 4;
    ctx.arc(180, 46, 36, 0, 2 * Math.PI);
      ctx.clip();
    ctx.drawImage(avatar, 143,10, 73, 72  );
  
     if (!kanal) return
         const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'güvenlik.png');
      kanal.send(attachment)
  });
  //////////////////////
  
client.on('guildCreate', guild => {
  const owner = guild.owner
  const mrb = guild.owner
  if (!mrb) return;
  let codevenom = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setAuthor(guild.name, guild.iconURL())
  .addField('**Merhaba**', `${owner}`)
  .addField('** Bu Mesaj Sadece Sunucu Sahiplerine Gelmektedir Beni Eklediğiniz İçin Teşekür Ederim**')
  .addField('**Botumuzun özelliklerini öğrenmek için**', `**${prefix}yardım** yazmanız yeterlidir!`)
  .addField('Botumuzu eklemek istiyorsanız', `**${prefix}davet** yazarak ekleyebilirsiniz.`)
  mrb.send(codevenom);
});
///////////
client.on("message", async message =>  {
if(message.author.bot) return
if(message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
let prefix = db.fetch("prefix."+message.guild.id) || ayarlar.prefix
const codevenom = new Discord.MessageEmbed()
.setTitle('Selam! '+message.author.username)
.setDescription(`:grey_question: Prefixim: **${prefix}** \n\n🔍 Yardım için: **${prefix}yardım**`)
.setColor('BLUE')
message.channel.send(codevenom) 
}  
})
/////
//// Tİcket Sistemi Başlangıç ///



/////Ticket Sistemi Son ////



////BOT OTOROL////

client.on("guildMemberAdd", async member => {
  let veri = db.fetch(`csbo_${member.guild.id}`)  
  if (veri){
  if (member.user.bot) {
  let csr = member.guild.roles.cache.get(veri)
  if(csr){
  member.roles.add(csr)
  }}}
  })
  //////bot otorol son/////,



client.login(ayarlar.token);