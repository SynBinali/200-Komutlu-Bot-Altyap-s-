

const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = client => {
console.log(`  Aktif, Komutlar yüklendi!`);
console.log(` ${client.user.username} ismi ile giriş yapıldı!`);
client.user.setStatus("dnd");

var oyun = [
"d!yardım tüm komutlar ",
];

setInterval(function() {

var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

client.user.setActivity(oyun[random], "");
}, 3 * 2500);

}