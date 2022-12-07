const backup = require("discord-backup");
const config = require("../ayarlar.json");
const prex = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  let anan = db.get(`toplam_${message.author.id}`) || "0"
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry: Bu komudu kullanabilmek için `Yönetici ` yetkisine sahip olmanız gerek.");
  if (anan < 15) {
    backup.create(message.guild).then((backupData) => {
        db.set(`yedek_${backupData.id}`, message.author.id);
        const date = new Date(backupData.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth() + 1).toString(), dd = date.getDate().toString();
        const formattedDate = `${dd[1] ? dd : "0" + dd[0]}/${mm[1] ? mm : "0" + mm[0]}/${yyyy}`;
        db.add(`toplam_${message.author.id}`, 1);
        db.push(`y_${message.author.id}`, {
          adı: backupData.name,
          id: backupData.id,
          tarih: formattedDate
        });
    
        let embed = new prex.MessageEmbed()
          .setTitle("<a:tikk:826027563566366762> Yedek Alındı!")
          .setDescription(`**Bilgilendirme**\n \n**Yedek ID'si **\n> \`\`\`${backupData.id}\`\`\`\n \n**Yedek Bilgisi İçin**\n> \`\`\`${config.prefix}yedek-bilgi ${backupData.id}\`\`\`\n \n**Yedeği Yüklemek İçin**\n> \`\`\`${config.prefix}yedek-yükle ${backupData.id}\`\`\``)
          .setColor("GREEN")
          .setTimestamp()
          .setImage("http://m.yollayap.com/busd/1612274253503.gif")
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setFooter(message.author.tag + " Tarafından Oluşturuldu!", message.author.avatarURL({ dynamic: true }));
        return message.channel.send(embed);
      })
      .catch(() => {
        return message.channel.send(
          ":x: Bir Hata Oluştu. Botun Yönetici Yetkisine Sahip Olduğundan Emin Ol!"
        );
      });
  }
};

exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: "Yedek"
};

exports.help = {
  name: 'yedek-al',
  description: 'Sunucunuzun Yedeğini Alırsınız  !',
  usage: 'yedek-al'
};