'use strict';

/**
 * get-ipinfo
 * Copyright © 2015 Johnie Hjelm
 */

// Dependencies
var got = require('got');

// Constants
var IPinfo = {
	hostname: 'http://ipinfo.io/',
	ip_regex: /^\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b$/
};

module.exports = function (type, cb) {

  // Default
	var url = null;

  /**
   * Wrapper for url
   */

	if (typeof type === 'function') {
		url = IPinfo.hostname + 'json';
    cb = type;
	} else if (IPinfo.ip_regex.test(type)) {
		url = IPinfo.hostname + type + '/json';
	} else {
		url = IPinfo.hostname + 'json';
	}

	got(url, {
		headers: {
			'user-agent': 'https://github.com/adroiter/get-ipinfo'
		}
	}, function (err, res) {

		if (err) {
			cb(err);
			return;
		}

		res = JSON.parse(res);

		cb(null, res);

	});

}
