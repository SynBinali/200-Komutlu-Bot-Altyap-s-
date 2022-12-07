const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const CodEmingHerDaim = require('quick.db');

exports.run = async(client, message, args) => {
  
let sahipID = ayarlar.sahip

let CodEming = args.slice(0).join(' ') || ' Belirtilmemiş.'

if(message.author.id !== sahipID) return message.channel.send(' Sadece **sahibim** bakım modu ayarlayabilir.')

let meteyasin = CodEmingHerDaim.fetch("!methesu7washere")

if(meteyasin) {
CodEmingHerDaim.delete("!methesu7washere")
return message.channel.send(' Bakım sistemi kapatıldı! ')
}

if(!meteyasin) {
CodEmingHerDaim.set("!methesu7washere", CodEming)
return message.channel.send(" Tamamdır! Bakım sistemi aktif edildi! Bakım sebebi: **"+CodEming+"**")
}
}

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0,
kategori: "Sahip" 
}

exports.help = {
name: 'bakım',
description: 'Bakıma Alıncam ıı',
usage: 'bakım'
}