'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var REDDIT_HOST = 'https://www.reddit.com/';

app.get('/api', function (req, res) {
  getRedditContent('').then(function (body) {
    res.status(_httpStatusCodes2.default.OK).json(body);
  }).catch(function (error) {
    console.log(error);
    res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ error: error });
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

function getRedditContent(subreddit, category) {
  var resourcePath = getRedditPath(subreddit, category);
  return (0, _isomorphicFetch2.default)(resourcePath).then(function (r) {
    return r.json();
  });
}

function getRedditPath(subreddit, category) {
  var rPath = subreddit ? 'r/' + subreddit : '';
  var rFullPath = rPath ? rPath + '/' + category : '';
  return '' + REDDIT_HOST + rFullPath + '/.json';
}