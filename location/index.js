var location = require('./node-library/location');

exports.getLocationsHTTP = function getLocationsHTTP(req, res) 
{
  res.setHeader('Content-Type', 'application/json');
  var json = location.getLocation("myId");
  res.status(200).send(json).end();
};