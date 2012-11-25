# submit

  form upload and progress api

## Installation

    $ component install ForbesLindesay/submit

## Events

  - `error` an error occurred
  - `abort` upload was aborted
  - `progress` (e) upload in progress (`e.percent`, `e.totalSize` etc)
  - `end` upload is complete

## API

### Submit(form)

  Initialize an `Submit` with the given `form`, where `form`
  is a `FormData` object.

```js
var submit = new Submit(form);
var submit = Submit(form);
```

### Submit#to(path)

  __POST__ the multipart form to `path`.

```js
submit.to('/upload');
submit.on('progress', reportProgress);
submit.on('end', done);
```

# License

  MIT
