# connect-lag

Connect middleware for adding a random delay to responses

## Installation

For now, you can point your `package.json` file at this repository:

```json
{
  "name": "cool-app",
  "dependencies": {
    "connect-s3": "git://github.com/localdata/connect-lag.git"
  }
}
```

## Use

There are some examples in the `examples` folder, but roughly:

```javascript
var connect = require('connect');
var lag = require('connect-lag');

var app = connect()
.use(lag({
  min: 250,
  max: 750
}))
.listen(process.env.PORT || 3000);
```

## Why?

Sometimes we develop/test on our local machines, and things are just a little
too snappy. This middleware helps us simulate an actual network connection
without having to set up a separate proxy. It's not totally accurate, of
course, since it modifies the server behavior and doesn't slow down each packet
uniformly.
