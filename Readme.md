# submit

form upload and progress api

[![Build Status](https://img.shields.io/travis/ForbesLindesay/submit/master.svg)](https://travis-ci.org/ForbesLindesay/submit)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/submit.svg)](https://david-dm.org/ForbesLindesay/submit)
[![NPM version](https://img.shields.io/npm/v/submit.svg)](https://www.npmjs.com/package/submit)

## Installation

    npm install submit

## Usage: `submit(form).to(path)`

Submit the form `form` to the path `path`.

The result is a [Promises/A+](http://promises-aplus.github.io/promises-spec/) promise with the addition of a small subset of the event emitter API that only supports `progress` events which can be handled by calling `.on('progress', (e) => ...)`

```js
var submit = require('submit');
submit(form).to('/upload')
  .on('progress', function (e) {
    console.log(e.percent + '%');
  })
  .then(function (res) {
    console.log('complete')
  }, function (err) {
    console.log('error')
  })
  .done();
}
```

## License

  MIT