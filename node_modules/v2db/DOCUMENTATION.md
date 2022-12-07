<a name="Index"></a>

## Index([options])

Options.

**Kind**: global function

| Param               | Type                               | Default                     | Description                     |
| ------------------- | ---------------------------------- | --------------------------- | ------------------------------- |
| [options]           | <code>object</code>                |                             | Options object.                 |
| [options.name]      | <code>string</code>                | <code>&quot;db&quot;</code> | Name of the database file.      |
| [options.seperator] | <code>string</code>                | <code>&quot;.&quot;</code>  | Seperator for each parameter.   |
| [options.language]  | <code>en</code> \| <code>tr</code> | <code>en</code>             | Language of the warn or errors. |
| [options.yaml]      | <code>boolean</code>               | <code>false</code>          | Use yaml or not.                |

**Example**

```js
const v2db = require('v2db')({
  name: 'database',
  seperator: '.',
  language: 'en',
  yaml: false,
});
```

### Index~fn

Functions

**Kind**: inner constant of [<code>Index</code>](#Index)

- [~fn](#Index..fn)
  - [.set(key, value)](#Index..fn.set) ⇒ <code>any</code>
  - [.get(key)](#Index..fn.get) ⇒ <code>any</code>
  - [.fetch()](#Index..fn.fetch)
  - [.delete(key)](#Index..fn.delete) ⇒ <code>any</code>
  - [.has(key)](#Index..fn.has) ⇒ <code>boolean</code>
  - [.update(key, func)](#Index..fn.update) ⇒ <code>any</code>
  - [.add(key, value)](#Index..fn.add) ⇒ <code>any</code>
  - [.substract(key, value)](#Index..fn.substract) ⇒ <code>any</code>
  - [.push(key, ...value)](#Index..fn.push) ⇒ <code>any</code>
  - [.unpush(key, ...value)](#Index..fn.unpush) ⇒ <code>any</code>
  - [.all()](#Index..fn.all) ⇒ <code>any</code>
  - [.deleteAll()](#Index..fn.deleteAll) ⇒ <code>boolean</code>

<a name="Index..fn.set"></a>

#### fn.set(key, value) ⇒ <code>any</code>

Sets a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |
| value | <code>any</code>    |

**Example**

```js
v2db.set('hello.world.message', 'hello world!');
```

<a name="Index..fn.get"></a>

#### fn.get(key) ⇒ <code>any</code>

Gets a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |

**Example**

```js
v2db.get('hello.world.message');
```

<a name="Index..fn.fetch"></a>

#### fn.fetch()

Clone of [v2db#get](v2db#get)

**Kind**: static method of [<code>fn</code>](#Index..fn)  
**Example**

```js
v2db.fetch('hello.world.message');
```

<a name="Index..fn.delete"></a>

#### fn.delete(key) ⇒ <code>any</code>

Deletes a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |

**Example**

```js
v2db.delete('hello.world.message');
```

<a name="Index..fn.has"></a>

#### fn.has(key) ⇒ <code>boolean</code>

Checks a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |

**Example**

```js
v2db.has('hello.world');
```

<a name="Index..fn.update"></a>

#### fn.update(key, func) ⇒ <code>any</code>

Updates a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                  |
| ----- | --------------------- |
| key   | <code>string</code>   |
| func  | <code>function</code> |

**Example**

```js
v2db.update('numbers.hundred', (x) => x === 200);
```

<a name="Index..fn.add"></a>

#### fn.add(key, value) ⇒ <code>any</code>

Adds a value to Number.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |
| value | <code>number</code> |

**Example**

```js
v2db.add('numbers.hundred', 25);
```

<a name="Index..fn.substract"></a>

#### fn.substract(key, value) ⇒ <code>any</code>

Substracts a value from Number.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |
| value | <code>number</code> |

**Example**

```js
v2db.substract('numbers.hundred', 50);
```

<a name="Index..fn.push"></a>

#### fn.push(key, ...value) ⇒ <code>any</code>

Pushes a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param    | Type                |
| -------- | ------------------- |
| key      | <code>string</code> |
| ...value | <code>any</code>    |

**Example**

```js
v2db.push('members.array', { member1: 'member1' }, 'string', ['array']);
```

<a name="Index..fn.unpush"></a>

#### fn.unpush(key, ...value) ⇒ <code>any</code>

Unpushes a value.

**Kind**: static method of [<code>fn</code>](#Index..fn)

| Param    | Type                |
| -------- | ------------------- |
| key      | <code>string</code> |
| ...value | <code>any</code>    |

**Example**

```js
v2db.push('members.array', 'string');
```

<a name="Index..fn.all"></a>

#### fn.all() ⇒ <code>any</code>

Returns file.

**Kind**: static method of [<code>fn</code>](#Index..fn)  
**Example**

```js
v2db.all();
```

<a name="Index..fn.deleteAll"></a>

#### fn.deleteAll() ⇒ <code>boolean</code>

Deletes file.

**Kind**: static method of [<code>fn</code>](#Index..fn)  
**Example**

```js
v2db.deleteAll();
```
