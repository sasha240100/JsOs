var test = require('tape');

test('test-modules', function(t) {
  t.throws(function() {
    try {
      require('module1');
      require('module2');
    } catch (e) {
      t.ok(e.message.indexOf('module1') >= 1);
      throw e;
    }
  });
  t.end();
});
