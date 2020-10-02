/*******************************
 * 本应用运行的端口
 *******************************/
module.exports.PORT = '8080';


/*******************************
 * 本应用 MongoDB 数据库的连接
 *******************************/
module.exports.MONGODB_URL = 'mongodb://zhangjie:zhangjie900812@127.0.0.1:27017/shangchen';


/*******************************
 * 本应用对应小程序客户端的核心配置
 *******************************/
module.exports.AppID = 'wx8a0f50b6836fecc6';
module.exports.AppSecret = 'f6b7e082e90f767f657a04eee08f740d';

/*******************************
 * 管理员
 *******************************/
module.exports.ADMIN = {
  phone: '13551648321',
  name: '何亮',
  password: 'hl@shangchen'
}
module.exports.SUB_ADMIN = {
  phone: '18308363494',
  name: '陈潘',
  password: 'cp@shangchen'
}


/*******************************
 * 前后端 - 错误码
 *******************************/
module.exports.CODE = {
  '-2': 'server error',
  '-1': 'no auth for u',
  '00': 'success',
  '01': 'phone already here',
  '02': 'no this phone',
  '03': 'password is not match phone',
  '04'
}