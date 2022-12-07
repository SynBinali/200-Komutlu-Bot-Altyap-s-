'use strict';

superfetch = source("super-fetch")
redis = require('redis')

describe "basic implementation", ->

  _cache = null

  beforeEach (done) ->
    namespace = "test"
    _cache = superfetch.create_cache ({namespace: namespace})
    _cache.flush ->
      done()

  it 'fetches the key from the cache after the first time', (done) ->

    test_func = (key, cb) ->
      data = "stored data @ #{key}"
      cb(null, data)

    getSpy = sinon.spy(_cache, "_get")
    setSpy = sinon.spy(_cache, "_set");

    _cache.fetch "key", test_func, (err, data) ->
      data.should.eql "stored data @ key"
      expect(getSpy.calledOnce).to.be.true
      expect(setSpy.calledOnce).to.be.true
      _cache.fetch "key", test_func, (err, data) ->
        data.should.eql "stored data @ key"
        expect(getSpy.calledTwice).to.be.true
        expect(setSpy.calledOnce).to.be.true
        done()

#   it 'adds a custom namespace if provided', (done) -> done 'pending'
#   it 'expires key based on ttl if provided', (done) -> done 'pending'
#   it 'removes all keys from namespace', (done) -> done 'pending'

# describe "next features", ->
#   it 'stores arrays as redis arrays or sets', (done) -> done 'pending'
#   it 'stores arrays of hashes & creates optional patterns for fast querying, using multi & lua as required', (done) -> done 'pending'
