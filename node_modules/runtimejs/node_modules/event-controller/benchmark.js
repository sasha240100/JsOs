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

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var EventEmitter = require('events').EventEmitter;
var EventController = require('./');
var assert = require('assert');

var count1 = 0;
var count2 = 0;

suite
  .add('EventEmitter', function() {
    var obj = new EventEmitter();

    obj.on('event1', function (a, b, c) {
      count1 += a + b + c;
    });

    obj.on('event1', function (a, b, c) {
      count1 += c + b + a;
    });

    obj.emit('event1', 10, 11, 12);
  })
  .add('EventController', function() {
    var obj = new EventController();

    obj.add(function (a, b, c) {
      count2 += a + b + c;
    });

    obj.add(function (a, b, c) {
      count2 += c + b + a;
    });

    obj.dispatch(10, 11, 12);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    assert.ok(count1);
    assert.ok(count2);
  })
  .run({ 'async': true });
