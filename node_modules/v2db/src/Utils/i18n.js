const strings = {
  installYAML: {
    tr: "YamlDB kullanmak için 'yaml' modülünü kurmalısınız.",
    en: "To use YamlDB, you must install the 'yaml' module.",
  },
  keyBlank: {
    tr: 'Bir anahtar girilmedi',
    en: 'No key entered.',
  },
  valueBlank: {
    tr: 'Bir değer girilmedi.',
    en: 'No value entered.',
  },
  useGetInsteadFetch: {
    tr: "'v2db#fetch' yerine 'v2db#get' kullan.",
    en: "Use 'v2db#get' instead of 'v2db#fetch'.",
  },
  valueMustBe: {
    tr: (x) => `Değer ${x} olmalı.`,
    en: (x) => `Value must be ${x}.`,
  },
};

module.exports = (text, language, ...args) => {
  let string = strings[text][language];
  if (!string) string = strings[text].en;
  if (typeof string === 'function') return string(...args);
  else return string;
};

module.exports.strings = strings;
