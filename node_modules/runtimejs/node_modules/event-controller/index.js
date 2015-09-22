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

function EventController() {
  if (!(this instanceof EventController)) {
    throw new Error('constructor requires "new"');
  }

  this.listeners = [];
}

function testInstance(self) {
  if (!(self instanceof EventController)) {
    throw new Error('"this" is not an instance');
  }
}

EventController.prototype.add = function(fn) {
  testInstance(this);
  if ('function' !== typeof fn) {
    throw new Error('argument 0 is not a function')
  }

  if (this.listeners.indexOf(fn) === -1) {
    this.listeners.push(fn);
  }
};

EventController.prototype.remove = function(fn) {
  testInstance(this);
  if ('function' !== typeof fn) {
    throw new Error('argument 0 is not a function')
  }

  var index = this.listeners.indexOf(fn);
  if (index !== -1) {
    this.listeners.splice(index, 1);
  }
};

EventController.prototype.raise = EventController.prototype.dispatch = function() {
  testInstance(this);
  for (var i = 0, l = this.listeners.length; i < l; ++i) {
    this.listeners[i].apply(this, arguments);
  }
};

module.exports = EventController;
