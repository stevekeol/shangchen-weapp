const router = require('express').Router();
const {
  login,
  checkPhone,
  getDecodedUserInfo,

  employeePost,
  employeeGet,
  employeeDelete,
  employeesGet,

  clientPost,
  clientGet,
  clientDelete,
  clientsGet
} = require('./api.js');


/****************************************
 * 暂时省略 api 介绍
****************************************/
router.get('/login', login);
router.post('/checkPhone', checkPhone);
router.post('/getDecodedUserInfo', getDecodedUserInfo);

router.post('/employee', employeePost);
router.get('/employee', employeeGet);
router.delete('/employee', employeeDelete);
router.get('/employees', employeesGet);

router.post('/client', clientPost);
router.get('/client', clientGet);
router.delete('/client', clientDelete);
router.get('/clients', clientsGet);

module.exports = router;