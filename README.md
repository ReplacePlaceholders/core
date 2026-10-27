# @replace-placeholder/core

A lightweight core utility for replacing placeholders in strings using object properties and a custom regular expression.

## Installation

```bash
npm install @replace-placeholder/core
```

## Usage

```js
import replacePlaceholders from '@replace-placeholder/core';

const message = 'Hello, {name}!';
const params = { name: 'Andrii' };
const pattern = /\{(\w+)\}/g;

const result = replacePlaceholders(message, params, pattern);

console.log(result);
// Hello, Andrii!
```

## API

### `replacePlaceholders(message, params, pattern)`

Replaces placeholders in a string with values from an object.

**Parameters**

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | The string containing placeholders. |
| `params` | `object` | An object containing replacement values. |
| `pattern` | `RegExp` | A regular expression with a capturing group for the placeholder name. |

**Returns:** `string` — the message with matching placeholders replaced.

## Examples

### Replace multiple placeholders

```js
const message = 'Hello, {name}! You are {age} years old.';

const result = replacePlaceholders(
  message,
  { name: 'Andrii', age: 40 },
  /\{(\w+)\}/g,
);

console.log(result);
// Hello, Andrii! You are 40 years old.
```

### Use a custom placeholder format

```js
const result = replacePlaceholders(
  'Hello, <name>!',
  { name: 'Andrii' },
  /<(\w+)>/g,
);

console.log(result);
// Hello, Andrii!
```

### Preserve unresolved placeholders

Placeholders without matching properties remain unchanged.

```js
const result = replacePlaceholders(
  'Hello, {name}!',
  {},
  /\{(\w+)\}/g,
);

console.log(result);
// Hello, {name}!
```

### Convert values to strings

Replacement values are converted to strings using `String()`.

```js
const result = replacePlaceholders(
  'Count: {count}',
  { count: 42 },
  /\{(\w+)\}/g,
);

console.log(result);
// Count: 42
```

## Behavior

- Replaces only placeholders matched by the provided regular expression.
- Uses own properties of the `params` object.
- Converts replacement values to strings.
- Leaves unresolved placeholders unchanged.
- Supports custom placeholder formats through regular expressions.

## Requirements

- Node.js >= 20

## License

MIT