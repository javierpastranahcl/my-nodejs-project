'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reddit = require('../controllers/reddit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var reddit = new _reddit.Reddit('');

// Set up the category parameter for this route
router.param('category', function (req, res, next, category) {
  req.category = category;
  next();
});

// GET reddit index
router.get('/', reddit.getRedditContent);
router.get('/:category', reddit.getRedditContent);

exports.default = router;