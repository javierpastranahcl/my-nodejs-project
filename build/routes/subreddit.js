'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reddit = require('../controllers/reddit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Set up the category parameter for this route
router.param('sub', function (req, res, next, sub) {
  req.reddit = new _reddit.Reddit(sub);
  next();
});

router.param('category', function (req, res, next, category) {
  req.category = category;
  next();
});

// GET reddit index
router.get('/:sub', function (req, res) {
  return req.reddit.getRedditContent(req, res);
});
router.get('/:sub/:category', function (req, res) {
  return req.reddit.getRedditContent(req, res);
});

exports.default = router;