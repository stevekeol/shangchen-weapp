/*******************************
 * 指定 MongoDB 数据库的 Schema 规范
 *******************************/

const Schema = require('mongoose').Schema;
const { EmployeeModel, ClientModel } = require('./models.js'); //用作引用

const employee = new Schema({
  phone: String,
  password: String,
  name: String,
  avatorUrl: String,
  openid: String,
  group: String,
  role: String, //admin, leader, worker
  registers: {type: Array, default: []},
  deals: {type: Array, default: []},
  createTime: String
},{autoIndex: false, versionKey: false});

const client = new Schema({
  phone: String,
  name: String,
  address: String,
  contact: {type: Object, default: {}},
  register: Boolean,
  deal: Boolean,
  appointment: {type: Object, default: {}},
  communicationHistory: {type: Array, default: []},
  createTime: String
},{autoIndex: false, versionKey: false});

module.exports = {
  getSchema: function(name) {
    switch(name) {
      case 'employee':
        return employee;
      case 'client':
        return client;
    }
  }
};

  // stars: [{ type: Schema.Types.String, ref: ArticleModel }] //收藏夹