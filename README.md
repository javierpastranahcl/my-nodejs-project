# Try running the two provided samples. What do you notice about the outputs?

# Let's get started with packages, servers and Express.
```
npm i --save-dev express
```

# You will also need some helper modules:
```
npm i --save-dev body-parser cookie-parser multer
```

# Create your simplest server. Start with a file called server.js:
``` js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
```
