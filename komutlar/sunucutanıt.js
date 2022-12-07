const Discord = require('discord.js')

const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {    
  let cooldown = 8.64e+7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        
        const embed = new Discord.MessageEmbed()
    .setDescription('Bu Komutu Sadece `24 Saatte` Bir Kullanabilirsin.')
            .setColor(0x00ffff)
        message.channel.send({embed})
        
    } else {
        const embed = new Discord.MessageEmbed()
  .setTitle('Başarılı  :white_check_mark: ')
.setDescription('**Sunucunuz Başarıyla** [Sunucumda](https://discord.gg/cA8ArEmHK9) **Tanıtıldı.**\n ``24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz.``')
        .setColor('GREEN')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
            .addField(`Komutu Kullanan Kişi`, message.author.tag, true)
            .addField(`Tanıtılan Sunucun İsmi`, message.guild.name, true)
      .addField(`Tanıtılan Sunucudaki Üye Sayısı`, message.guild.members.cache.size, true)
      .addField(`Tanıtılan Sunucu Davet Linki`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL())
       client.channels.cache.get('809165925781340190').send(embed)
    db.set(`gunluk_${message.guild.id}`, Date.now());
        })}
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-tanıt'],
	kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız
}

exports.help = {
    name: 'sunucutanıt',
    description: 'Sunucunuzu Tanıtır.',
    usage: 'sunucutanıt'
}
