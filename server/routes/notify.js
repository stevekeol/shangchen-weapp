
var addAppointmentTask = function() {
  return new Promise((resolve, reject) => {
    clientModel.find({}, function(err, row) {
      if(row) {
        resolve(row);
      } else {
        resolve(null)
      }
    })
  })
}

module.exports.addAppointmentTask = addAppointmentTask;