'use strict';
var test = require('tape');
var isint = require('./');

function typedArrayTest(t, typed, fn, values) {
  for (var i = 0; i < values.length; ++i) {
    var value = values[i];
    typed[0] = value;
    t.equal(fn(value), typed[0] === value);
  }
}

test('int8', function (t) {
  t.equal(isint.int8(null), false);
  t.equal(isint.int8(undefined), false);
  t.equal(isint.int8(), false);
  t.equal(isint.int8([]), false);
  t.equal(isint.int8({}), false);
  t.equal(isint.int8(1.2), false);
  t.equal(isint.int8(-3.5), false);
  t.equal(isint.int8(NaN), false);
  t.equal(isint.int8(Infinity), false);
  t.equal(isint.int8(-Infinity), false);
  t.equal(isint.int8(-0), true);
  t.equal(isint.int8(0), true);
  t.equal(isint.int8(-1), true);
  t.equal(isint.int8(-129), false);
  t.equal(isint.int8(-128), true);
  t.equal(isint.int8(127), true);
  t.equal(isint.int8(128), false);
  typedArrayTest(t, new Int8Array(1), isint.int8,
    [-129, -128, 127, 128]);
  t.end();
});

test('int16', function (t) {
  t.equal(isint.int16(null), false);
  t.equal(isint.int16(undefined), false);
  t.equal(isint.int16(), false);
  t.equal(isint.int16([]), false);
  t.equal(isint.int16({}), false);
  t.equal(isint.int16(1.2), false);
  t.equal(isint.int16(-3.5), false);
  t.equal(isint.int16(NaN), false);
  t.equal(isint.int16(Infinity), false);
  t.equal(isint.int16(-Infinity), false);
  t.equal(isint.int16(-0), true);
  t.equal(isint.int16(0), true);
  t.equal(isint.int16(-1), true);
  t.equal(isint.int16(-32769), false);
  t.equal(isint.int16(-32768), true);
  t.equal(isint.int16(32767), true);
  t.equal(isint.int16(32768), false);
  typedArrayTest(t, new Int16Array(1), isint.int16,
    [-32769, -32768, 32767, 32768]);
  t.end();
});

test('int32', function (t) {
  t.equal(isint.int32(null), false);
  t.equal(isint.int32(undefined), false);
  t.equal(isint.int32(), false);
  t.equal(isint.int32([]), false);
  t.equal(isint.int32({}), false);
  t.equal(isint.int32(1.2), false);
  t.equal(isint.int32(-3.5), false);
  t.equal(isint.int32(NaN), false);
  t.equal(isint.int32(Infinity), false);
  t.equal(isint.int32(-Infinity), false);
  t.equal(isint.int32(-0), true);
  t.equal(isint.int32(0), true);
  t.equal(isint.int32(-1), true);
  t.equal(isint.int32(-2147483649), false);
  t.equal(isint.int32(-2147483648), true);
  t.equal(isint.int32(2147483647), true);
  t.equal(isint.int32(2147483648), false);
  typedArrayTest(t, new Int32Array(1), isint.int32,
    [-2147483649, -2147483648, 2147483647, 2147483648]);
  t.end();
});

test('uint8', function (t) {
  t.equal(isint.uint8(null), false);
  t.equal(isint.uint8(undefined), false);
  t.equal(isint.uint8(), false);
  t.equal(isint.uint8([]), false);
  t.equal(isint.uint8({}), false);
  t.equal(isint.uint8(1.2), false);
  t.equal(isint.uint8(-3.5), false);
  t.equal(isint.uint8(NaN), false);
  t.equal(isint.uint8(Infinity), false);
  t.equal(isint.uint8(-Infinity), false);
  t.equal(isint.uint8(-0), true);
  t.equal(isint.uint8(0), true);
  t.equal(isint.uint8(-1), false);
  t.equal(isint.uint8(-129), false);
  t.equal(isint.uint8(-128), false);
  t.equal(isint.uint8(127), true);
  t.equal(isint.uint8(128), true);
  t.equal(isint.uint8(255), true);
  t.equal(isint.uint8(256), false);
  typedArrayTest(t, new Uint8Array(1), isint.uint8,
    [-129, -128, 127, 128, 255, 256]);
  t.end();
});

test('uint16', function (t) {
  t.equal(isint.uint16(null), false);
  t.equal(isint.uint16(undefined), false);
  t.equal(isint.uint16(), false);
  t.equal(isint.uint16([]), false);
  t.equal(isint.uint16({}), false);
  t.equal(isint.uint16(1.2), false);
  t.equal(isint.uint16(-3.5), false);
  t.equal(isint.uint16(NaN), false);
  t.equal(isint.uint16(Infinity), false);
  t.equal(isint.uint16(-Infinity), false);
  t.equal(isint.uint16(-0), true);
  t.equal(isint.uint16(0), true);
  t.equal(isint.uint16(-1), false);
  t.equal(isint.uint16(-32769), false);
  t.equal(isint.uint16(-32768), false);
  t.equal(isint.uint16(32767), true);
  t.equal(isint.uint16(32768), true);
  t.equal(isint.uint16(65535), true);
  t.equal(isint.uint16(65536), false);
  t.equal(isint.uint16(Math.pow(2, 16) - 1), true);
  t.equal(isint.uint16(Math.pow(2, 16)), false);
  typedArrayTest(t, new Uint16Array(1), isint.uint16,
    [-32769, -32768, 32767, 32768, 65535, 65536]);
  t.end();
});

test('uint32', function (t) {
  t.equal(isint.uint32(null), false);
  t.equal(isint.uint32(undefined), false);
  t.equal(isint.uint32(), false);
  t.equal(isint.uint32([]), false);
  t.equal(isint.uint32({}), false);
  t.equal(isint.uint32(1.2), false);
  t.equal(isint.uint32(-3.5), false);
  t.equal(isint.uint32(NaN), false);
  t.equal(isint.uint32(Infinity), false);
  t.equal(isint.uint32(-Infinity), false);
  t.equal(isint.uint32(-0), true);
  t.equal(isint.uint32(0), true);
  t.equal(isint.uint32(-1), false);
  t.equal(isint.uint32(-2147483649), false);
  t.equal(isint.uint32(-2147483648), false);
  t.equal(isint.uint32(2147483647), true);
  t.equal(isint.uint32(2147483648), true);
  t.equal(isint.uint32(Math.pow(2, 32) - 1), true);
  t.equal(isint.uint32(Math.pow(2, 32)), false);
  typedArrayTest(t, new Uint32Array(1), isint.uint32,
    [-2147483649, -2147483648, 2147483647, 2147483648,
      Math.pow(2, 32) - 1, Math.pow(2, 32)]);
  t.end();
});
