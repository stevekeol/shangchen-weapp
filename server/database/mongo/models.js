const mongoose = require('mongoose');
const schemas = require('./schemas.js');
const { MONGODB_URL } = require('../../utils/config.js');

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const EmployeeModel = mongoose.model('employee', schemas.getSchema('employee'));
const ClientModel = mongoose.model('client', schemas.getSchema('client'));

module.exports = {
  EmployeeModel,
  ClientModel
}