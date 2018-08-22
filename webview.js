'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const titleRegEx = /^\(([\*\d])\)/;
  const getMessages = function unreadCount() {
    var directCount = 0;
    var indirectCount = 0;

    var matchArr = document.title.match(titleRegEx);
    if (matchArr) {
      if (matchArr[1] === '*') {
        indirectCount = 1;
      } else {
        directCount = Number(matchArr[1]);
      }
    }

    Franz.setBadge(directCount, indirectCount);
  }

  Franz.loop(getMessages);
};
