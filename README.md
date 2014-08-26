## Is.js

A tiny component to detect the type of a variable.

![https://api.travis-ci.org/mohnish/is.js.svg](https://api.travis-ci.org/mohnish/is.js.svg)

## Installation

- Node `npm install is.js`
- Browser TODO

## Usage

Node

```js
`var is = require('is.js');`
```

Browser

### TODO

## API

### new is(variable)

```
var foo = new is('MT');
```

or

```
var foo = is(1); // skip the new keyword
```

### is.type

```
var foo = is([]);
foo.type
// => 'Array'
```

### is#isArray()
```
var foo = is([]);
foo.isArray()
// => true
```

### is#isObject()
```
var foo = is({});
foo.isObject()
// => true
```

### is#isNumber()
```
var foo = is(1);
foo.isNumber()
// => true
foo.isArray()
// => false
```

### is#isString()
```
var foo = is("MT");
foo.isString()
// => true
```

### is#isUndefined()
```
var foo = is(undefined);
foo.isUndefined()
// => true
```

### is#isNull()
```
var foo = is(null);
foo.isNull()
// => true
```

### is#isFunction()
```
var foo = is(function() { return true; });
foo.isFunction()
// => true
```

### is#isBoolean()
```
var foo = is(true);
foo.isBoolean()
// => true
```

### is#isDate()
```
var foo = is(new Date);
foo.isDate()
// => true
```

### is#isRegExp()
```
var foo = is(/MT/);
foo.isRegExp()
// => true
```

### Running tests

- First run `npm install -d`
- Then, run `make`

## License

(The MIT License)

Copyright (c) 2014 Mohnish Thallavajhula &lt;i@mohni.sh&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
