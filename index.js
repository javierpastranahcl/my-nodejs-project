var express = require('express');
var fetch = require('isomorphic-fetch');
var HttpStatus = require('http-status-codes');
var app = express();

app.get('/api', function (req, res) {
  const dataSource = 'https://www.reddit.com/.json';
  fetch(dataSource)
    .then(r => r.json())
    .then((body) => {
      res.status(HttpStatus.OK).json(body);
    })
    .catch(error => {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error });
    });
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
