var location = require('node-library/location/location');

exports.getLocation = function getLocation(event, callback) 
{
  var json = location.getLocation("myId");
  callback(json);
};
