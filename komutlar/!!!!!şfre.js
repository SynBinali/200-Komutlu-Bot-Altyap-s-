
const generator = require('generate-password');
exports.run = (client, message, args) => { 

 if (args[0] === "sayılı") {
var şifre = generator.generate({
    length: 10,
    numbers: true
});
 

message.author.send(şifre)
}


 if (args[0] === "sayısız") {
var şifre = generator.generate({
    length: 10,
    numbers: false
});
 

message.author.send(şifre)
}

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['şifre'], 
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: 'şifre-kur',
  description: 'Şifre Oluşturur', 
  usage: 'şifre-kur'
};


