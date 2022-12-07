###
 * super-fetch
 * https://github.com/jonog/super-fetch
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
###

redis = require 'redis'

'use strict';

class SuperFetch

  _namespace = null
  _expires_in = null
  _storage = null

  constructor: (@options) ->
    _namespace = @options?.namespace || 'sf'
    _expires_in = @options?.expires_in || null
    _storage = redis.createClient()

  set_namespace: (ns) ->
    _namespace = ns

  _get: (key, cb) ->
    key = "#{_namespace}:#{key}"
    _storage.get key, (err, data) ->
      return cb(err) if err?
      return cb(null, null) if !data?
      cb null, JSON.parse(data)

  _set: (key, data, ttl, cb) ->
    key = "#{_namespace}:#{key}"
    if ttl?
      _storage.set key, JSON.stringify(data), "EX", ttl, ->
        return cb null, data
    else
      _storage.set key, JSON.stringify(data), ->
        cb null, data

  fetch: (key, opts..., cb) =>
    func = opts[0]
    ttl = opts[1]
    @_get key, (err, data) =>
      return cb(err) if err?
      return cb(null, data) if data?
      func key, (err, data) =>
        return cb(err) if err?
        @_set key, data, ttl, cb

  # TODO - only flush namespace keys
  flush: (cb) ->
    _storage.flushdb ->
      cb()

exports.create_cache = (options) ->
  obj = new SuperFetch(options)
