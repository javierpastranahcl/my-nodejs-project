'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRedditContent = getRedditContent;
exports.getRedditPath = getRedditPath;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REDDIT_HOST = 'https://www.reddit.com';

function getRedditContent(subreddit, category) {
  var resourcePath = getRedditPath(subreddit, category);
  console.log('Fetching ', resourcePath);
  return (0, _isomorphicFetch2.default)(resourcePath).then(function (r) {
    return r.json();
  });
}

function getRedditPath(subreddit, category) {
  var rPath = subreddit ? '/r/' + subreddit : '';
  var rFullPath = rPath ? '' + rPath + (category ? '/' + category : '') : '';
  return '' + REDDIT_HOST + rFullPath + '/.json';
}