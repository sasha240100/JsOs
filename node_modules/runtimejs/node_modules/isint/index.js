'use strict';

// Number.isInteger polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
var isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && isFinite(value)
      && Math.floor(value) === value;
};

exports.uint8 = function(value) {
  return isInteger(value) && value >= 0 && value <= 0xff;
};

exports.uint16 = function(value) {
  return isInteger(value) && value >= 0 && value <= 0xffff;
};

exports.uint32 = function(value) {
  return isInteger(value) && value >= 0 && value <= 0xffffffff;
};

exports.int8 = function(value) {
  return isInteger(value) && value >= -128 && value <= 127;
};

exports.int16 = function(value) {
  return isInteger(value) && value >= -32768 && value <= 32767;
};

exports.int32 = function(value) {
  return isInteger(value) && value >= -2147483648 && value <= 2147483647;
};
