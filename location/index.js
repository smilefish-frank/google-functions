var location = require('@brandify/location');
//require('@google/cloud-debug').start();

exports.getLocationsHTTP = function getLocationsHTTP(req, res) 
{
  res.setHeader('Content-Type', 'application/json');
  var json = location.getLocationsByGeoCode(77.0, 88.0);
  res.status(200).send(json).end();
};

exports.getLocationsMQ = function getLocationsMQ(event, callback) {
  
  // The Cloud Pub/Sub Message object.
  const pubsubMessage = event.data;

  // We're just going to log the message to prove that
  // it worked.
  console.log(Buffer.from(pubsubMessage.data, 'base64').toString());

    var json = location.getLocationsByGeoCode(77.0, 88.0);
    callback(null, json);
};