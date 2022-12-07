(function() {
  'use strict';
  var redis, superfetch;

  superfetch = source("super-fetch");

  redis = require('redis');

  describe("basic implementation", function() {
    var _cache;
    _cache = null;
    beforeEach(function(done) {
      var namespace;
      namespace = "test";
      _cache = superfetch.create_cache({
        namespace: namespace
      });
      return _cache.flush(function() {
        return done();
      });
    });
    return it('fetches the key from the cache after the first time', function(done) {
      var getSpy, setSpy, test_func;
      test_func = function(key, cb) {
        var data;
        data = "stored data @ " + key;
        return cb(null, data);
      };
      getSpy = sinon.spy(_cache, "_get");
      setSpy = sinon.spy(_cache, "_set");
      return _cache.fetch("key", test_func, function(err, data) {
        data.should.eql("stored data @ key");
        expect(getSpy.calledOnce).to.be["true"];
        expect(setSpy.calledOnce).to.be["true"];
        return _cache.fetch("key", test_func, function(err, data) {
          data.should.eql("stored data @ key");
          expect(getSpy.calledTwice).to.be["true"];
          expect(setSpy.calledOnce).to.be["true"];
          return done();
        });
      });
    });
  });

}).call(this);
