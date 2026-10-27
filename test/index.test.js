import test from 'node:test';
import assert from 'node:assert/strict';

import replacePlaceholders from '../index.js';

test('replaces placeholders with object values', () => {
  const result = replacePlaceholders(
    'Hello, {name}!',
    { name: 'Andrii' },
    /\{(\w+)\}/g,
  );

  assert.equal(result, 'Hello, Andrii!');
});

test('preserves placeholders without matching keys', () => {
  const result = replacePlaceholders(
    'Hello, {name}!',
    {},
    /\{(\w+)\}/g,
  );

  assert.equal(result, 'Hello, {name}!');
});

test('converts replacement values to strings', () => {
  const result = replacePlaceholders(
    'Count: {count}',
    { count: 42 },
    /\{(\w+)\}/g,
  );

  assert.equal(result, 'Count: 42');
});

test('supports custom placeholder patterns', () => {
  const result = replacePlaceholders(
    'Hello, <name>!',
    { name: 'Andrii' },
    /<(\w+)>/g,
  );

  assert.equal(result, 'Hello, Andrii!');
});

test('replaces only own properties', () => {
  const params = Object.create({ name: 'Inherited' });

  const result = replacePlaceholders(
    'Hello, {name}!',
    params,
    /\{(\w+)\}/g,
  );

  assert.equal(result, 'Hello, {name}!');
});
