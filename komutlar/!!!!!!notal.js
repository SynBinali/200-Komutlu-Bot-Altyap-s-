const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args, client) => {
  if (!args[0]) return message.channel.send(`<a:spheli:705564588783173642> Komutu kullanmaya devam etmek için birşey belirtmelisiniz! <a:spheli:705564588783173642>\n<a:zil:646066154925981773> Örnek kullanım: **ekle**, **sil**, **bilgi**, **düzenle** şeklinde.`)
  
  if (args[0] == 'ekle') {

    let notsss = await db.fetch(`not_${message.author.id}`)
                  let hata1 = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Daha önce almış olduğun bir not bulunuyor!\nBu nota **not bilgi** komutuyla erişebilirsin.`)
        if (notsss) return message.channel.send(hata1);
    let not = args.slice(1).join(' ');
                      let hata2 = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Not almam için birşeyler yazmalısın.`)
  if (!not) return message.channel.send(hata2)
    db.set(`not_${message.author.id}`, not)
                          let ferhatsavagex = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Belirttiğin notu başarıyla aldım!\nAldığın notu okumak için: **not bilgi** komutunu kullanın.`)
  message.channel.send(ferhatsavagex)
}
  
  if (args[0] == 'bilgi') {
      let nots = await db.fetch(`not_${message.author.id}`)
                            let hata3 = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Daha önce almış olduğunuz bir not bulunamıyor.\nNot eklemek için: **not ekle** komutunu kullanın.`)
  if(!nots) return message.channel.send(hata3)
                                let  savage = new Discord.MessageEmbed()
              .setAuthor('Notların !', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Aldığınız notu özelinize bıraktım ordan okuyabilirsiniz.`)
    message.channel.send(savage)
                                    let  ferhatsvage = new Discord.MessageEmbed()
              .setAuthor('Aldığınız not bilgileri aşağıda belirtildi!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(nots)
    message.author.send(ferhatsvage)

    }
    if (args[0] == 'sil') {
      let nots = await db.fetch(`not_${message.author.id}`)
                                  let hata4 = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Daha önce almış olduğunuz bir not bulunamıyor.\nNot eklemek için: **d!not ekle** komutunu kullanın.`)
  if(!nots) return message.channel.send(hata4)
      db.delete(`not_${message.author.id}`)
                                  let savagebot = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Almış olduğunuz notu başarıyla sildim!`)
      message.channel.send(savagebot)

    }
      if (args[0] == 'düzenle') {
      let nots = await db.fetch(`not_${message.author.id}`)
                                        let hata5 = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Daha önce almış olduğunuz bir not bulunamıyor.\nNot eklemek için: **d!not ekle** komutunu kullanın.`)
  if(!nots) return message.channel.send(hata5)
        let not = args.slice(1).join(' ');
                              let hata6 = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Not almam için birşeyler yazmalısın.`)
  if (!not) return message.channel.send(hata6)
        db.delete(`not_${message.author.id}`)
        db.set(`not_${message.author.id}`, not)
                                  let ferhatsavagexm = new Discord.MessageEmbed()
              .setAuthor('Hata!', message.author.avatarURL())
              .setColor('GREEN')
                  .setThumbnail(message.author.avatarURL())
              .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL())
              .setDescription(`Belirttiğin notu başarıyla aldım!\nAldığın notu okumak için: **d!not bilgi** komutunu kullanın.`)
        message.channel.send(ferhatsavagexm)
    }
};

exports.conf = {
  enabled: true,  
  guildOnly: false,
  kategori: "kullanıcı",
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: 'not',
  description: 'taslak', 
  usage: 'not'
};