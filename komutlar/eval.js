const Discord = require("discord.js");
exports.run = async (client, message, args, color, prefix) => {
 if(message.author.id !== "447383435586174976") return message.reply(`Bu komutu sadece bot sahibi kullanabilir!`);
 try {
 let codein = args.join(" ");
 let code = eval(codein);
 if (codein.length < 1) return message.reply(`Deneyebilmek i�in bir kod girmelisin!`)
 
 if (typeof code !== 'string')
 code = require('util').inspect(code, { depth: 0 });
 let embed = new Discord.MessageEmbed()
 .setColor('PURPLE')
 .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
 .addField('Sonu�', `\`\`\`js\n${code}\n\`\`\``)
 message.channel.send(embed)
 } catch(e) {
 let embed2 = new Discord.MessageEmbed()
 .setColor('PURPLE')
 .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
 message.channel.send(embed2);
 }
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kod'],
 permLevel: `0`
 };
 
 exports.help = {
 name: 'eval',
 description: 'Kod denemeyi sa�lar.',
 usage: 'eval'
 };