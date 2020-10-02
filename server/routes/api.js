/*******************************************
*
* 桥接层(业务逻辑层)：
* 连接路由层 + 数据库操作层
*
********************************************/
const { CODE } = require('../utils/config.js');

module.exports.login = (req, res, next) => {
  async function login(phone) {
    return await mongoHandler.getEmployee(phone);
  }
  async function updateEmployeeInfo(phone, userInfo) {
    return await mongoHandler.updateEmployeeInfo(phone, userInfo);
  }

  login(JSON.parse(req.query.loginInfo).phone).then(function(result) {
    if(result && result.password === JSON.parse(req.query.loginInfo).password) {
      updateEmployeeInfo(JSON.parse(req.query.loginInfo).phone, JSON.parse(req.query.globalData).userInfo)
      .then(result => {
        res.send({"errMsg": "ok", "result": result});
      })
      .catch(result => { 
        console.log('updateEmployeeInfo fail');
      })      
    } else {
      res.send({"errMsg": "noPermission"});
    }
  });
}


module.exports.checkPhone = (req, res, next) => {
  async function checkPhone(clientInfo) {
    return await mongoHandler.checkPhone(clientInfo);
  }

  checkPhone(req.body.clientInfo).then(function(result) {
    if(result) {
      res.send({code: , result});
    } else {
      res.send({code: "ok"});
    }
  });
}


module.exports.getDecodedUserInfo = (req, res, next) => {
  s
}


module.exports.employeePost = (req, res, next) => {
  s
}


module.exports.employeeGet = (req, res, next) => {
  s
}

//暂时不做
module.exports.employeeDelete = (req, res, next) => {}


module.exports.employeesGet = (req, res, next) => {
  s
}


module.exports.clientPost = (req, res, next) => {
  s
}


module.exports.clientGet = (req, res, next) => {
  s
}

//暂时不做
module.exports.clientDelete = (req, res, next) => {}


module.exports.clientsGet = (req, res, next) => {
  s
}