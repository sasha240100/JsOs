## SYNOPSIS

Prevent multiple copies of your module loaded into application.

[![Build Status](https://travis-ci.org/iefserge/module-singleton.svg)](https://travis-ci.org/iefserge/module-singleton)

For example, `module1` would be loaded twice when the dependency graph looks like this:

```
--main-module
 --module1
 --module2
  --module1
```

## USAGE

Require `module-singleton` at the top of your module, pass `package.json`.

```js
require('module-singleton')(require('./package.json'));
```

##LICENSE

Apache License, Version 2.0
