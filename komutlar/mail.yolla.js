const Discord = require("discord.js"),
client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send("`Kullanım : t!mailgonder <mail adresi> <baslik (tek kelimeden oluşabilir!)> <içerik>`")
    if(!args) return message.channel.send("`Kullanım : t!mailgonder <mail adresi> <baslik (tek kelimeden oluşabilir!)> <içerik>`")
    if(!args[1]) return message.channel.send("`Kullanım : t!mailgonder <mail adresi> <baslik (tek kelimeden oluşabilir!)> <içerik>`")
    if(!args[2]) return message.channel.send("`Kullanım : t!mailgonder <mail adresi> <baslik (tek kelimeden oluşabilir!)> <içerik>`")
    var gmail = args[0];
    var baslik = args[1];
    var gmailim = "maili gönderecek gmailin adresi";
    var sifre = "üstteki mailin şifresi";
    var args = args.slice(2).slice('').join(' ');
    var sonicerik = `${args}\n\n\nTwist Community adlı sunucusundan gönderildi. Gönderen ${message.author.tag}`;
    const send = require('gmail-send')({// Gönderebilmek için Hesap ayarlarından "Daha az güvenli uygulama erişimi" yerini açınız. 
        user: gmailim,
        pass: sifre,
        to:   gmail,
        subject: baslik,
        text:sonicerik,
      });
      send().then(({ result, full }) => message.channel.send(`${gmail} adresine başarıyla mail gönderildi!\n`+"Baslik : `"+baslik+"`\nİçerik : `"+args+"`"))
      .catch((error) => console.log('Gmaile erişilemedi.( Hesap ayarlarından "Daha az güvenli uygulama erişimi" yerini açınız. )'))
      ;
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mailyolla", "mail-gönder"],
  permLevel: 4
};

exports.help = {
  name: 'mail-yolla',
  description: 'mailyolla',
  usage: 'mailyolla'
};
