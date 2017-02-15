var location = require('node-library/location/location');

exports.getLocation = function getLocation(req, res) 
{
  res.setHeader('Content-Type', 'application/json');
  var json = location.getLocation("myId");
  res.status(200).send(json).end();
};
