const fs = require('fs');

const JsonDB = (options = {}) => {
  const fn = {};
  const opts = {};

  const defaultOptions = { seperator: '.' };
  options = Object.assign(defaultOptions, options);

  opts.name = options.name;
  opts.utils = require('../Utils/functions')({ seperator: options.seperator });

  if (
    !fs.existsSync(`./${opts.name}.json`) ||
    fs.readFileSync(`./${opts.name}.json`, 'utf-8') === ''
  )
    fs.writeFileSync(`./${opts.name}.json`, '{}');

  fn.set = (key, value) => {
    let data = fn.all();
    data = opts.utils._set(data, key, value);
    fs.writeFileSync(`./${opts.name}.json`, JSON.stringify(data, null, 2));

    return data;
  };

  fn.get = (key) => {
    return opts.utils._get(fn.all(), key);
  };

  fn.del = (key) => {
    let data = fn.all();
    data = opts.utils._del(data, key);
    fs.writeFileSync(`./${opts.name}.json`, JSON.stringify(data, null, 2));

    return true;
  };

  fn.update = (key, func) => {
    let data = fn.get(key);
    fn.set(key, func(data));

    return fn.get(key);
  };

  fn.add = (key, value) => {
    let data = fn.get(key);
    fn.set(key, data + value);

    return fn.get(key);
  };

  fn.delAll = () => {
    fs.writeFileSync(`./${opts.name}.json`, '{}');
    return true;
  };

  fn.all = () => {
    const data = JSON.parse(fs.readFileSync(`./${opts.name}.json`, 'utf-8'));
    return data;
  };

  return fn;
};

module.exports = JsonDB;
