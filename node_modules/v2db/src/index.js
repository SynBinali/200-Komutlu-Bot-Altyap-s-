const { colorize } = require('./Utils/functions')();
const i18n = require('./Utils/i18n');

/**
 * @description Options.
 * @param {object} [options] - Options object.
 * @param {string} [options.name = db] - Name of the database file.
 * @param {string} [options.seperator = .] - Seperator for each parameter.
 * @param {en | tr} [options.language = en] - Language of the warn or errors.
 * @param {boolean} [options.yaml = false] - Use yaml or not.
 * @example
 * const v2db = require('v2db')({
 *  name: 'database',
 *  seperator: '.',
 *  language: 'en',
 *  yaml: false
 * });
 */
const Index = (options = {}) => {
  /**
   * @description Functions
   */
  const fn = {};
  const opts = {};

  const defaultOptions = {
    name: 'db',
    seperator: '.',
    language: 'en',
    yaml: false,
  };
  options = Object.assign(defaultOptions, options);

  opts.adapter = options.yaml
    ? require('./Adapters/YamlDB')(options)
    : require('./Adapters/JsonDB')(options);

  /**
   * @description Sets a value.
   * @param {string} key
   * @param {any} value
   * @returns {any}
   * @example v2db.set('hello.world.message', 'hello world!')
   */
  fn.set = (key, value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (typeof value === 'undefined')
      throw new TypeError(i18n('valueBlank', options.language));

    return opts.adapter.set(key, value);
  };

  /**
   * @description Gets a value.
   * @param {string} key
   * @returns {any}
   * @example v2db.get('hello.world.message');
   */
  fn.get = (key) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));

    return opts.adapter.get(key);
  };

  /**
   * @description Clone of {@link v2db#get}
   * @example v2db.fetch('hello.world.message');
   */
  fn.fetch = (key) => {
    console.log(
      colorize('orange', i18n('useGetInsteadFetch', options.language))
    );
    return fn.get(key);
  };

  /**
   * @description Deletes a value.
   * @param {string} key
   * @returns {any}
   * @example v2db.delete('hello.world.message')
   */
  fn.delete = (key) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    return opts.adapter.del(key);
  };

  /**
   * @description Checks a value.
   * @param {string} key
   * @returns {boolean}
   * @example v2db.has('hello.world')
   */
  fn.has = (key) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));

    return !!fn.get(key);
  };

  /**
   * @description Updates a value.
   * @param {string} key
   * @param {function} func
   * @returns {any}
   * @example v2db.update('numbers.hundred', (x) => x === 200)
   */
  fn.update = (key, func) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!func) throw new TypeError(i18n('value', options.language));
    if (typeof func !== 'function')
      throw new TypeError(i18n('valueMustBe', options.language, 'Function'));

    return opts.adapter.update(key, func);
  };

  /**
   * @description Adds a value to Number.
   * @param {string} key
   * @param {number} value
   * @returns {any}
   * @example v2db.add('numbers.hundred', 25)
   */
  fn.add = (key, value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (typeof value === 'undefined')
      throw new TypeError(i18n('valueBlank', options.language));
    if (typeof value !== 'number')
      throw new TypeError(i18n('valueMustBe', options.language, 'Number'));

    return opts.adapter.add(key, value);
  };

  /**
   * @description Substracts a value from Number.
   * @param {string} key
   * @param {number} value
   * @returns {any}
   * @example v2db.substract('numbers.hundred', 50)
   */
  fn.substract = (key, value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (typeof value === 'undefined')
      throw new TypeError(i18n('valueBlank', options.language));
    if (typeof value !== 'number')
      throw new TypeError(i18n('valueMustBe', options.language, 'Number'));

    return opts.adapter.add(key, -value);
  };

  /**
   * @description Pushes a value.
   * @param {string} key
   * @param  {...any} value
   * @returns {any}
   * @example v2db.push('members.array', {member1: 'member1'}, 'string', ['array'])
   */
  fn.push = (key, ...value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));
    if (!Array.isArray(fn.get(key))) fn.set(key, []);

    let data = fn.get(key);

    value.forEach((val) => {
      data.push(val);
    });
    fn.set(key, data);

    return data;
  };

  /**
   * @description Unpushes a value.
   * @param {string} key
   * @param  {...any} value
   * @returns {any}
   * @example v2db.push('members.array', 'string')
   */
  fn.unpush = (key, ...value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));
    if (!Array.isArray(fn.get(key))) fn.set(key, []);

    let data = fn.get(key);

    value.forEach((val) => {
      data = data.filter((x) =>
        typeof x === 'object'
          ? JSON.stringify(x) !== JSON.stringify(val)
          : x !== val
      );
    });
    fn.set(key, data);

    return data;
  };

  /**
   * @description Returns file.
   * @returns {any}
   * @example v2db.all()
   */
  fn.all = () => {
    return opts.adapter.all();
  };

  /**
   * @description Deletes file.
   * @returns {boolean}
   * @example v2db.deleteAll()
   */
  fn.deleteAll = () => {
    return opts.adapter.delAll();
  };

  return fn;
};

module.exports = Index;
