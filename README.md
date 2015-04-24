## Is.js

A tiny component to detect the type of a variable.

[![Build Status](https://travis-ci.org/mohnish/is.js.svg?branch=master)](https://travis-ci.org/mohnish/is.js)
[![Code Climate](https://codeclimate.com/github/mohnish/is.js/badges/gpa.svg)](https://codeclimate.com/github/mohnish/is.js)

## Installation

- Node `npm install is.js`
- Browser TODO

## Usage

Node

```js
var is = require('is.js');
```

Browser

### TODO

## API

### new is(variable)

```js
var foo = new is('MT');
```

or

```js
var foo = is(1); // skip the new keyword
```

### is.type

```js
var foo = is([]);
foo.type
// => 'Array'
```

### is#isArray()

```js
var foo = is([]);
foo.isArray()
// => true
```

### is#isObject()

```js
var foo = is({});
foo.isObject()
// => true
```

### is#isNumber()

```js
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

```js
var foo = is(undefined);
foo.isUndefined()
// => true
```

### is#isNull()

```js
var foo = is(null);
foo.isNull()
// => true
```

### is#isFunction()

```js
var foo = is(function() { return true; });
foo.isFunction()
// => true
```

### is#isBoolean()

```js
var foo = is(true);
foo.isBoolean()
// => true
```

### is#isDate()

```js
var foo = is(new Date);
foo.isDate()
// => true
```

### is#isRegExp()

```js
var foo = is(/MT/);
foo.isRegExp()
// => true
```

### Running tests

- First run `npm install`
- Then, run `make`

## License

(The MIT License)

Copyright (c) 2015 Mohnish Thallavajhula &lt;i@mohni.sh&gt;

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
