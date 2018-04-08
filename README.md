# that-depends-scss

[![Build Status](https://travis-ci.org/reergymerej/that-depends-scss.svg?branch=master)](https://travis-ci.org/reergymerej/that-depends-scss)

Reads in JS, returns the imported/required file paths.

## Usage

```js
// foo.scss
@import 'blah'
```

```js
import thatDependsJS from 'that-depends-scss'

const fooSource = fs.readFileSync('foo.js', 'utf8')
const dependenciesOfFoo = thatDependsSCSS(fooSource)

TODO
// returns ['./a', 'a', 'z']
```
