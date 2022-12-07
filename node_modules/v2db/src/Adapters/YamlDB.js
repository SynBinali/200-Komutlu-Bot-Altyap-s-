const fs = require('fs');
const i18n = require('../Utils/i18n');
let YAML;

const YamlDB = (options = {}) => {
  const fn = {};
  const opts = {};

  const defaultOptions = { seperator: '.', language: 'en' };
  options = Object.assign(defaultOptions, options);

  opts.name = options.name;
  opts.lang = options.language;
  opts.utils = require('../Utils/functions')({ seperator: options.seperator });

  if (
    !fs.existsSync(`./${opts.name}.yaml`) ||
    fs.readFileSync(`./${opts.name}.yaml`, 'utf-8') === ''
  )
    fs.writeFileSync(`./${opts.name}.yaml`, '');

  try {
    YAML = require('yaml');
  } catch (err) {
    throw new Error(
      '\x1b[31m' +
        opts.utils.colorize('red', i18n('installYAML', opts.lang)) +
        '\x1b[0m'
    );
  }

  fn.set = (key, value) => {
    let data = fn.all();
    data = opts.utils._set(data, key, value);
    fs.writeFileSync(`./${opts.name}.yaml`, YAML.stringify(data));

    return data;
  };

  fn.get = (key) => {
    return opts.utils._get(fn.all(), key);
  };

  fn.del = (key) => {
    let data = fn.all();
    data = opts.utils._del(data, key);
    fs.writeFileSync(`./${opts.name}.yaml`, YAML.stringify(data));

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
    fs.writeFileSync(`./${opts.name}.yaml`, '');
    return true;
  };

  fn.all = () => {
    let data = YAML.parse(fs.readFileSync(`./${opts.name}.yaml`, 'utf-8'));
    return data;
  };

  return fn;
};

module.exports = YamlDB;
