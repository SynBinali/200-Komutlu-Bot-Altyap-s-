const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    //BYMAYFE YAPIP PAYLAŞMIŞTIR BABİ ÇALANLAR İZİN ALIRSA BENDEN PARDON İZİN ALIRSANIZ ÇALMIYORSUNUZ BENDEN İZİN ALIN HERHANGİ BİRYERDE PAYLAŞMAK İÇİN 

 var guild = message.guild;
 var banlayan = message.author.tag;
 var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
 if(!kisi) return message.reply("Banlayacağım Kişiyi Belirtmen Gerekiyor `ID / @kullanici / username`")

let vip = db.fetch(`pre.${message.author.id}`);
 if(!vip) return message.channel.send(`**HATA**  Premium Üye Değilsin`)
		 
 
 //var gun = args.slice(1).join(' ') ? `${args.slice(1).join(' ')}` :"";
 var neden = args.slice(1).join(' ') 
 let banxx = await message.guild.fetchBans();

if (!banxx.get(kisi.id)) return message.reply(":x: Kişi Yasaklanmamış")

if(neden) {
  try {
  await message.channel.send(`${kisi.tag} adlı kullanıcının banı açıldı. \nNedeni: **${neden}**`)
  await guild.members.unban(kisi.id, neden);
} catch (error) {
  message.reply("Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
  console.log(error)
}
} else {
  try {
    await message.channel.send(`${kisi.tag} adlı kullanıcının banı açıldı.`)
    await guild.members.unban(kisi.id, neden);
  } catch (error) {
    message.reply("Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
    console.log(error)
  }

}




};


exports.conf = {
  aliases: [],
  permLevel: 2,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'unban',
  description: 'Birisinin Banını Açarsnız !',
  usage: 'unban'
};