var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

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
