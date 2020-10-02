var express = require('express');
var router = express.Router();
var mongoHandler = require('./mongoHandler.js');
// var notify = require('./notify.js');
var utils = require('./utils.js');
var WXBizDataCrypt = require('./WXBizDataCrypt');

utils.sendTemplateMessage();

const admin = {
  phone: '18308363494',
  password: 'chenpan_1992',
  name: '陈潘',
  role: 'admin'
}

router.get('/login', function(req, res) {
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
});

//删除某个客户的资料
router.get('/deleteClient', function(req, res) {
  if(JSON.parse(req.query.globalData).role === 'admin') {
    async function deleteClient(phone) {
      return await mongoHandler.deleteClient(phone);
    }

    deleteClient(JSON.parse(req.query.clientInfo).phone).then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "deleteClient wrong"});
      }
    });
  } else {
    res.send({"errMsg": "noPermission"});
  }
});

//解密出微信用户的敏感信息
router.post('/getDecodedUserInfo', function(req, res) {
  console.log(req.body);
  let encryptedUserInfo = req.body;

  let pc = new WXBizDataCrypt(encryptedUserInfo.AppID, encryptedUserInfo.session_key);
  let userInfo = pc.decryptData(encryptedUserInfo.encryptedData , encryptedUserInfo.iv);

  //(待)存储到数据库等操作

  res.send({"errMsg": "ok", "result": userInfo});
});

//提交某个雇员资料
router.post('/employee', function(req, res) {
  if(req.body.globalData.role === 'admin') {

    async function addEmployee(employeeInfo) {
      return await mongoHandler.addEmployee(employeeInfo);
    }

    addEmployee(req.body.employeeInfo).then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "addEmployee wrong"});
      }
    });  
  } else {
    res.send({"errMsg": "noPermission"});
  }
});


//提交某个雇员资料
router.post('/employee', function(req, res) {
  if(req.body.globalData.role === 'admin') {

    async function addEmployee(employeeInfo) {
      return await mongoHandler.addEmployee(employeeInfo);
    }

    addEmployee(req.body.employeeInfo).then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "addEmployee wrong"});
      }
    });  
  } else {
    res.send({"errMsg": "noPermission"});
  }
});


//获取某个雇员资料
router.get('/employee', function(req, res) {
  if(req.body.globalData.role === 'admin' || req.body.globalData.role === 'leader') {

    async function findEmployee(employeeInfo) {
      return await mongoHandler.findEmployee(employeeInfo);
    }

    findEmployee(req.body.employeeInfo).then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "findEmployee wrong"});
      }
    });  
  } else {
    res.send({"errMsg": "noPermission"});
  }
});

//获取所有雇员资料（对应权限下）
router.get('/employees', function(req, res) {
  let globalData = JSON.parse(req.query.globalData);
  //此处尚未添加权限
  if(globalData.role === 'admin' || globalData.role === 'leader' || globalData.role === 'worker') {
    async function findEmployees() {
      return await mongoHandler.findEmployees();
    }
    findEmployees().then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "findEmployee wrong"});
      }
    });  
  } else {
    res.send({"errMsg": "noPermission"});
  }
});

//提交某个客户资料（应该返回该雇员的所有资料，其中包含最新添加的客户资料）
router.post('/client', function(req, res) {
  if(req.body.globalData.role === 'admin' || req.body.globalData.role === 'leader' || req.body.globalData.role === 'worker') {
    async function addClient(clientAndEmployeeInfo) {
      let updateEmployeeResult = mongoHandler.updateEmployeeClient(clientAndEmployeeInfo);
      let addClientResult = mongoHandler.addClient(clientAndEmployeeInfo);
      // let addAppointmentTask = notify.addAppointmentTask(clientAndEmployeeInfo);
      return await Promise.all([updateEmployeeResult, addClientResult]);
    }
    addClient(req.body).then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "addClient wrong"});
      }
    });
  } else {
    res.send({"errMsg": "noPermission"});
  }
});

//获取某个客户资料
router.get('/client', function(req, res) {
  if(req.body.globalData.role === 'admin' || req.body.globalData.role === 'leader' || req.body.globalData.role === 'worker') {

    async function getClient(clientInfo) {
      return await mongoHandler.getClient(clientInfo);
    }

    getClient(req.body.clientInfo).then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "getClient wrong"});
      }
    });  
  } else {
    res.send({"errMsg": "noPermission"});
  }
});

//校验某个手机号是否已经录入
router.post('/checkPhone', function(req, res) {
  if(req.body.globalData.role === 'admin' || req.body.globalData.role === 'leader' || req.body.globalData.role === 'worker') {

    async function checkPhone(clientInfo) {
      return await mongoHandler.checkPhone(clientInfo);
    }

    checkPhone(req.body.clientInfo).then(function(result) {
      if(result) {
        res.send({"errMsg": "isExisted", "result": result});
      } else {
        res.send({"errMsg": "ok"});
      }
    });
  } else {
    res.send({"errMsg": "noPermission"});
  }
});


//获所有客户资料（对应权限下）
router.get('/clients', function(req, res) {
  let globalData = JSON.parse(req.query.globalData);
  if(globalData.role === 'admin' || globalData.role === 'leader' || globalData.role === 'worker') {
    //此处尚未添加权限
    async function getClients() {
      return await mongoHandler.getClients();
    }

    getClients().then(function(result) {
      if(result) {
        res.send({"errMsg": "ok", "result": result});
      } else {
        res.send({"errMsg": "getClients wrong"});
      }
    });  
  } else {
    res.send({"errMsg": "noPermission"});
  }
});

module.exports = router;
