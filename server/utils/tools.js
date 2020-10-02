/**********************************
 * 取出查询参数(从完整url中取出某个具体的参数)
 **********************************/
const url = require('url');  
const querystring = require('querystring');

const getReqParam = function (req, param) {
  const params = querystring.parse(url.parse(req.url).query);
  return params[param];
};

/**********************************
 * 取年月日时分秒 2020-10-02 14:30:28
 **********************************/
const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

/**********************************
 * 取年月日 2020-10-02
 **********************************/
const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-');
}

/**********************************
 * 辅助函数: 补0操作
 **********************************/
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

module.exports = {
  getReqParam,
  formatTime,
  formatDate
}