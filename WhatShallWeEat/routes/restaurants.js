var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var request = require('request');

router.get('/:uuid', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
  var db = client.db('whatshallweeat');  
  if (err) throw err

  db.collection('restaurants').find({'uuid': req.params.uuid}).toArray(function (err, result) {
    if (err) throw err

    res.send(result);
    })
  })
  
});

router.get('/list/:location', function(req, res, next) {
  var fs = require('fs'), filename = __dirname + '/googlekey';
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    request(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?${req.params.location}&sensor=true&rankby=distance&key=${data}&keyword=food`, function (error, response, body) {
      res.send(body)
    });
  })
});

router.post('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
  var db = client.db('whatshallweeat');
  if (err) throw err

  db.collection('restaurants').insertOne(req.body, function(err, result) {
    if (err) throw err
    
    })
  
  db.collection('restaurants').find({'uuid': req.body.uuid}).toArray(function (err, result) {
    if (err) throw err

    res.send(result);
    client.close();
    })
  })
});

router.delete('/', function(req, res, next) {
 
MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
  var db = client.db('whatshallweeat');
  if (err) throw err

  db.collection('restaurants').deleteOne({'uuid': req.body.uuid, 'name': req.body.name}, function (err, result) {
    if (err) throw err
    
    })
  
  db.collection('restaurants').find({'uuid': req.body.uuid}).toArray(function (err, result) {
    if (err) throw err

    res.send(result);
    client.close();
    })
  })
});

module.exports = router;
