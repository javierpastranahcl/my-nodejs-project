'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _subreddit = require('./subreddit');

var _subreddit2 = _interopRequireDefault(_subreddit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Configure the API router
router.use('/', _home2.default);
router.use('/subreddit', _subreddit2.default);

exports.default = router;