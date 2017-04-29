const https = require('https');

function getPosts(callback) {
  return https.get('https://jsonplaceholder.typicode.com/posts', function (response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function receiveData(d) {
      body += d;
    });

    response.on('end', function endRequest() {
      // Data reception is done, do whatever with it!
      var parsed = JSON.parse(body);

      callback({
        posts: parsed,
      });
    });
  });
}

getPosts(function receivePosts(data) {
  console.log('Got post data: ', data);
});

console.log('Exiting program');
