superfetch = require 'super-fetch'

cache = superfetch.create_cache(namespace: "random")

test_func = (key, cb) ->
  cb(null, "value")

cache.fetch "abc", test_func, (err, data) ->
  console.log('''===> data: ''', data)
  process.exit(0)
