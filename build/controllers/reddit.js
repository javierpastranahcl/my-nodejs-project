'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reddit = undefined;

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reddit = exports.Reddit = function Reddit(reddit) {
  var _this = this;

  _classCallCheck(this, Reddit);

  this.reddit = null;

  this.getRedditContent = function (req, res) {
    // // Uncomment these and see what this request is actually receiving
    // console.log('====== url ======');
    // console.log(req.url);
    // console.log('====== category ======');
    // console.log(req.category);
    // console.log('====== route ======');
    // console.log(req.route);

    console.log('Reddit: Getting ' + _this.reddit + '/' + (req.category ? req.category : ''));

    (0, _utils.getRedditContent)(_this.reddit, req.category).then(function (body) {
      res.status(_httpStatusCodes2.default.OK).json(body);
    }).catch(function (error) {
      console.log(error);
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ error: error });
    });
  };

  this.reddit = reddit;
};