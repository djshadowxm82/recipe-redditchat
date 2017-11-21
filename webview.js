'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function unreadCount() { 
	const el = document.querySelector(".RIYDo");
	
	var count = el ? parseInt(el.textContent, 10) : 0 
	
	Franz.setBadge(count);
  }
  
  Franz.loop(getMessages);
};
