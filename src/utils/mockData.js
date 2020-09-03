//客户列表
const clients = [{
    name: '张杰',
    phone: '15258800906',
    address: '杭州市余杭区荆长大道西园3幢3单元',
    contact: '杜敏', //此处应该是ObejctID
    status: 'yixiang',
    createTime: '2020-08-20 16:30',
    source: '介绍',
    records: [{
      createTime: '2020-08-20 17:00',
      content: '初次交流装修风格'
    }, {
      createTime: '2020-08-20 18:00',
      content: '再次交流家居风格'
    }],
    appointments: [{
      isHandled: true,
      timestamp: 1598510461288,
      content: '沟通家具装修风格'
    }, {
      isHandled: false,
      timestamp: 1598780461288,
      content: '沟通价格套餐'
    }]
  }, {
    name: '方国军',
    phone: '15258800900',
    address: '',
    contact: '杜敏', //此处应该是ObejctID
    status: 'jiaofu',
    createTime: '2020-08-20 16:30',
    source: '介绍',
    records: [{
      createTime: '2020-08-20 17:00',
      content: '初次交流装修风格'
    }, {
      createTime: '2020-08-20 18:00',
      content: '再次交流家居风格'
    }],
    appointments: [{
      isHandled: true,
      timestamp: 1598510461288,
      content: '沟通家具装修风格'
    }, {
      isHandled: false,
      timestamp: 1598780461288,
      content: '沟通价格套餐'
    }]
  }, {
    name: '彭小华',
    phone: '15258800901',
    address: '杭州市余杭区荆长大道西园3幢3单元',
    contact: '聂碧清', //此处应该是ObejctID
    status: 'yixiang',
    createTime: '2020-08-20 16:30',
    source: '介绍',
    records: [{
      createTime: '2020-08-20 17:00',
      content: '初次交流装修风格'
    }, {
      createTime: '2020-08-20 18:00',
      content: '再次交流家居风格'
    }],
    appointments: [{
      isHandled: true,
      timestamp: 1598510461288,
      content: '沟通家具装修风格'
    }, {
      isHandled: false,
      timestamp: 1598780461288,
      content: '沟通价格套餐'
    }]
  }, {
    name: '赵子煜',
    phone: '15258800902',
    address: '杭州市余杭区荆长大道西园3幢3单元',
    contact: '聂碧清', //此处应该是ObejctID
    status: 'dingjin',
    createTime: '2020-08-20 16:30',
    source: '介绍',
    records: [{
      createTime: '2020-08-20 17:00',
      content: '初次交流装修风格'
    }, {
      createTime: '2020-08-20 18:00',
      content: '再次交流家居风格'
    }],
    appointments: [{
      isHandled: true,
      timestamp: 1598510461288,
      content: '沟通家具装修风格'
    }, {
      isHandled: false,
      timestamp: 1598780461288,
      content: '沟通价格套餐'
    }]
  }, 
];

//员工列表
const employees = [{
  name: '陈潘',
  phone: 18308363494,
  password: 'cp_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['sale'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '杜敏',
  phone: 18284981290,
  password: 'dm_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['sale'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '聂碧清',
  phone: 15984441339,
  password: 'nbq_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['sale'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '鲜涛',
  phone: 13541969528,
  password: 'xt_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['designOne'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '尹学文',
  phone: 18064922265,
  password: 'yxw_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['project'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '王燕',
  phone: 13155564000,
  password: 'wy_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['service'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '鲜涛1',
  phone: 13541969528,
  password: 'xt_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['designOne'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
}, {
  name: '鲜涛2',
  phone: 13541969528,
  password: 'xt_2020',
  avatorUrl: undefined,
  openid: undefined,
  groups: ['designTwo'],
  isAdmin: true,
  createTime: '2020-05-17 18:30',
  updateTime: '2020-05-20 19:30',
  clients: []
},]