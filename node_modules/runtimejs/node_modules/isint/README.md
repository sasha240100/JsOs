## SYNOPSIS

Test if the value is integer of specified size

[![Build Status](https://travis-ci.org/iefserge/isint.svg?branch=master)](https://travis-ci.org/iefserge/isint)

## USAGE

```js
var isint = require('isint');

isint.int8(-129)          // false
isint.int8(-128)          // true
isint.int8(127)           // true
isint.int8(128)           // false

isint.int16(-32769)       // false
isint.int16(-32768)       // true
isint.int16(32767)        // true
isint.int16(32768)        // false

isint.int32(-2147483649)  // false
isint.int32(-2147483648)  // true
isint.int32(2147483647)   // true
isint.int32(2147483648)   // false

isint.uint8(0)            // true
isint.uint8(-1)           // false
isint.uint8(255)          // true
isint.uint8(256)          // false

isint.uint16(0)                     // true
isint.uint16(-1)                    // false
isint.uint16(Math.pow(2, 16) - 1)   // true
isint.uint16(Math.pow(2, 16))       // false

isint.uint32(0)                     // true
isint.uint32(-1)                    // false
isint.uint32(Math.pow(2, 32) - 1)   // true
isint.uint32(Math.pow(2, 32))       // false
```

##LICENSE

Apache License, Version 2.0
