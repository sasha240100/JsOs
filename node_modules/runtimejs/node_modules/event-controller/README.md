## SYNOPSIS

Simple JavaScript event controller implementation. Similar to Node.js `EventEmitter`, but manages a single event type.

- Useful for building interfaces that favor composition over inheritance. Event controllers could be assigned to instance properties instead of using inherited `EventEmitter`.
- Manages a single event, avoids extra event type lookup. Can't dispatch arbitrary events, each event type needs its own controller.
- Doesn't rely on strings to identify event types.
- Might be faster (see benchmark below).

[![Build Status](https://travis-ci.org/runtimejs/event-controller.svg?branch=master)](https://travis-ci.org/runtimejs/event-controller)

## USAGE

```js
var EventController = require('event-controller');
var event1 = new EventController();

// Add listener
event1.add(function (value) {
  // handle event
});

// Dispatch
event1.dispatch('hello');
```

Interface example:

```js
function MyObject() {
  this.onError = new EventController();
  this.onReceive = new EventController();
}

var obj = new MyObject();

// Add error handler
obj.onError.add(function() {});

// Dispatch error
obj.onError.dispatch(new Error());
```

##API

###.add(fn)

Add new event listener.

###.remove(fn)

Remove event listener.

###.dispatch(args...) .raise(args...)

Dispatch new event.

##BENCHMARK

Random [benchmark](https://github.com/runtimejs/event-controller/blob/master/benchmark.js) results for 1 event type and 2 listeners .

```
EventEmitter x 1,269,447 ops/sec ±3.63% (85 runs sampled)
EventController x 3,427,809 ops/sec ±2.19% (88 runs sampled)
Fastest is EventController
```


##LICENSE

Apache License, Version 2.0
