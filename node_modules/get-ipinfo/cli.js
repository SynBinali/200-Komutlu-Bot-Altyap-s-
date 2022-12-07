#!/usr/bin/env node
'use strict';

var meow    = require('meow');
var pkg     = require('./package.json');
var IPinfo  = require('./');

var cli = meow({
  help: [
    '',
    'Usage',
    '  $ ipinfo',
    '',
    '{',
    '  "ip": "90.111.11.111"',
    '  "hostname": "Hostname"',
    '  "city": "Stockholm"',
    '  "region": "Stockholms Lan"',
    '  "country": "SE"',
    '  "loc": "59.329323,18.068581"',
    '  "org": "Adroiter AB"',
    '  "postal": "1337"',
    '}',
    '',
    'Options',
    '  --ip    Specify an IP address',
    '  --type  Type of information: ip|hostname|city|region|country|loc|org|postal'
  ].join('\n')
});

// Set flag
var type = cli.flags.type;

IPinfo(cli.flags.ip, function (err, ip) {
  if (err) {
    throw err;
  }

  console.log(type ? ip[type] : ip);
});
