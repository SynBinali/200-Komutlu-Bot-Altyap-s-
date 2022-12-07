const Discord = require("discord.js");

exports.run = function(client, message) {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Lütfen Yumruk Atmak İçin Birini Etiketleyin**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**${message.author.username}  Sana Yumruk Attı**`
    )
    .setImage(
      "https://media1.giphy.com/media/f9qqV2Dp84wmIaFjxn/giphy.gif"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yumrukat"],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: "yumruk-at",
  description: " Yumruk Atarsınız işte ",
  usage: "-yumruk-at"
};
