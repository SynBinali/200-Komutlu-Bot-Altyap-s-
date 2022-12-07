exports.run = async (client, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannel = message.member.voice.channel;
  if (!message.member.voice.channel) { return message.channel.send("Lütfen Bir Kanala Girin"); }

  const permissions = message.member.voice.channel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Bu kanala bağlanma yetkim yok"); }
  if (permissions.has("SPEAK") === false) { return message.channel.send("Bu kanalda konuşma yetkim yok"); }

  message.member.voice.channel.join();

};

exports.conf = {
  enabled: true,
  aliases: [],  
  permLevel: 0,
  kategori: "Moderasyon"
};

exports.help = {
  name: "çek",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "çek",
};