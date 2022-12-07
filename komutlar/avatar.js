
const {oneLine} = require("common-tags");
exports.run = async (client, message, args, color) => {
  if(!args[0]) return message.channel.send("Bir üye etiketle!");

  const user = message.mentions.users.first() || client.users.cache.get(args[0]);

  message.channel.send({
    embed: {
      description: oneLine`
        **[\`PNG\`](${user.displayAvatarURL().replace(user.displayAvatarURL().includes(".gif") ? ".gif" : ".png", ".png")})**
        **-**
        **[\`JPG\`](${user.displayAvatarURL().replace(user.displayAvatarURL().includes(".gif") ? ".gif" : ".png", ".jpg")})**
        **-**
        **[\`GIF\`](${user.displayAvatarURL().replace(user.displayAvatarURL().includes(".gif") ? ".gif" : ".png", ".gif")})**`,
      author: {
        name: `${user.username} isimli kullanıcının avatarı`
      },
      image: {
        url: user.displayAvatarURL()
      },
      color: 0x00FFFF
    }
  });
}

exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0,
	kategori: "Kullanıcı"
};

  exports.help = {
    name: 'avatar', 
    description: 'Etiketlediğiniz Kişinin Avatarını GÖRÜRSÜNÜZ!',
    usage: 'avatar'
};