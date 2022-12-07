const Discord = require(`discord.js`);
const db = require(`quick.db`)

exports.run = async(client, message, args) => {
let kişi = message.mentions.users.first()
if(!args[0]) {
    const kayitstats = await db.fetch(`kayitstats_${message.author.id}.${message.guild.id}`)
    const abone = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**${message.author} İsimli Yetkilinin Toplam Kayıtı**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${kayitstats ? kayitstats : '0'}\`  Kayıtın Var.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(abone)}
if(kişi) {
    const abonestats2 = await db.fetch(`kayitstats_${kişi.id}.${message.guild.id}`)
    const abone1 = new Discord.MessageEmbed()
    .setAuthor(kişi.username, kişi.avatarURL)
    .setThumbnail(message.mentions.users.first().avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin Bilgileri**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${abonestats2 ? abonestats2 : '0'}\` Kayıtın Var.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(abone1)}  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
 kategori: "Kayıt"
};
exports.help = {
 name: 'kayıtstats'
};