/*
 * super-fetch
 * https://github.com/jonog/super-fetch
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
*/


(function() {
  var SuperFetch, redis,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  redis = require('redis');

  'use strict';

  SuperFetch = (function() {
    var _expires_in, _namespace, _storage;

    _namespace = null;

    _expires_in = null;

    _storage = null;

    function SuperFetch(options) {
      var _ref, _ref1;
      this.options = options;
      this.fetch = __bind(this.fetch, this);
      _namespace = ((_ref = this.options) != null ? _ref.namespace : void 0) || 'sf';
      _expires_in = ((_ref1 = this.options) != null ? _ref1.expires_in : void 0) || null;
      _storage = redis.createClient();
    }

    SuperFetch.prototype.set_namespace = function(ns) {
      return _namespace = ns;
    };

    SuperFetch.prototype._get = function(key, cb) {
      key = "" + _namespace + ":" + key;
      return _storage.get(key, function(err, data) {
        if (err != null) {
          return cb(err);
        }
        if (data == null) {
          return cb(null, null);
        }
        return cb(null, JSON.parse(data));
      });
    };

    SuperFetch.prototype._set = function(key, data, ttl, cb) {
      key = "" + _namespace + ":" + key;
      if (ttl != null) {
        return _storage.set(key, JSON.stringify(data), "EX", ttl, function() {
          return cb(null, data);
        });
      } else {
        return _storage.set(key, JSON.stringify(data), function() {
          return cb(null, data);
        });
      }
    };

    SuperFetch.prototype.fetch = function() {
      var cb, func, key, opts, ttl, _i,
        _this = this;
      key = arguments[0], opts = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), cb = arguments[_i++];
      func = opts[0];
      ttl = opts[1];
      return this._get(key, function(err, data) {
        if (err != null) {
          return cb(err);
        }
        if (data != null) {
          return cb(null, data);
        }
        return func(key, function(err, data) {
          if (err != null) {
            return cb(err);
          }
          return _this._set(key, data, ttl, cb);
        });
      });
    };

    SuperFetch.prototype.flush = function(cb) {
      return _storage.flushdb(function() {
        return cb();
      });
    };

    return SuperFetch;

  })();

  exports.create_cache = function(options) {
    var obj;
    return obj = new SuperFetch(options);
  };

}).call(this);
