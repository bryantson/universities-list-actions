# sort-json-array [![NPM version](https://img.shields.io/npm/v/sort-json-array.svg?style=flat)](https://www.npmjs.com/package/sort-json-array)

>  Sort an array of JSON objects by a property

[![NPM](https://nodei.co/npm/sort-json-array.svg?downloads=true&stars=true)](https://www.npmjs.com/package/sort-json-array/)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install sort-json-array --save
```

## Usage

Sort an array of JSON objects by a property:

```js
var sortJsonArray = require('sort-json-array');

sortJsonArray([{name: 'c'}, {name: 'a'}, {name: 'b'}], 'name');
//=> [{name: 'a'}, {name: 'b'}, {name: 'c'}]

sortJsonArray([{name: 'c'}, {name: 'a'}, {name: 'b'}], 'name','des');
//=> [{name: 'c'}, {name: 'b'}, {name: 'a'}]

sortJsonArray([{name: 'c'}, {name: 'a'}, {name: 'b'}], 'name','asc');
//=> [{name: 'a'}, {name: 'b'}, {name: 'c'}]
```

## Params

```js
sortJsonArray(array, property, order);
```

* `array`: **{Array}** The array to be sorted.
* `property`: **{String}**: The Property based on what the array should be sorted.
* `order`: **{String}**: Pass 'des' if you want array to be sorted in descending order. Pass 'asc' if you want array to be sorted in ascending order. By default it will be sorted in ascending order.

## Examples

```js
var sortJsonArray = require('sort-json-array');

var user = [
  { name: 'c', location: "San Jose" },
  { name: 'a', location: "San Francisco"},
  { name: 'b', location: "New York" },
];

// sort by `name` in ascending order because order is not passed
console.log(sortJsonArray(user, 'name'));

// sort by `location` in descending order
console.log(sortJsonArray(user, 'location','des'));

// sort by `name` in ascending order
console.log(sortJsonArray(user, 'name','asc'));
```

## Running tests

Install dev dependencies and run test:

```sh
$ npm install -d && npm test
```

## Author

**Apurva Patel**

## License

Copyright © 2016, [Apurva Patel](https://github.com/apurvapatel141092).
Released under the [MIT license](https://github.com/apurvapatel141092/sort-json-array/blob/master/LICENSE).

***
