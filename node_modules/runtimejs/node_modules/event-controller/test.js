// Copyright 2015 runtime.js project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var test = require('tape');
var EventController = require('./');

test('normal usage', function(t) {
  t.plan(3);
  var controller = new EventController();

  controller.add(function(value) {
    t.equal(value, 42);
  });

  controller.add(function(value) {
    t.equal(value, 42);
    t.ok(true);
  });

  controller.dispatch(42);
});

test('remove event', function(t) {
  t.plan(1);
  var controller = new EventController();

  function handler1(value) {
    t.equal(value, 42);
  }

  function handler2() {
    throw new Error('should not be called');
  }

  controller.add(handler1);
  controller.add(handler2);
  controller.remove(handler2);

  controller.dispatch(42);
  t.end();
});

test('add and remove', function(t) {
  var controller = new EventController();

  function handler1() { throw new Error() }
  function handler2() { throw new Error() }
  function handler3() { throw new Error() }
  function handler4() { throw new Error() }

  controller.add(handler1);
  controller.add(handler2);
  controller.add(handler2);
  controller.add(handler3);
  controller.remove(handler4);
  controller.remove(handler2);
  controller.add(handler4);
  controller.add(handler4);
  controller.remove(handler1);
  controller.remove(handler4);
  controller.remove(handler3);
  controller.dispatch(42);
  t.end();
});

test('dispatch multiple arguments', function(t) {
  var controller = new EventController();

  controller.add(function(a, b, c, d, e) {
    t.equal(a, 10);
    t.equal(b, 11);
    t.equal(c, 12);
    t.equal(d, 13);
    t.equal(e, 14);
    t.end();
  });

  controller.dispatch(10, 11, 12, 13, 14);
});

test('construct without new', function(t) {
  t.throws(function() {
    var controller = EventController();
  });
  t.end();
});

test('use without instance', function(t) {
  var controller = new EventController();

  t.throws(function() {
    controller.add.call(null, function() {});
  });

  t.throws(function() {
    controller.remove.call(null, function() {});
  });

  t.throws(function() {
    controller.dispatch.call(null, function() {});
  });

  t.throws(function() {
    controller.raise.call(null, function() {});
  });

  t.end();
});
