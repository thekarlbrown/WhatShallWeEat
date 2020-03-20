var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

router.get('/:uuid', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  if (err) throw err

  db.collection('restaurants').find({'uuid': req.params.uuid}).toArray(function (err, result) {
    if (err) throw err

    res.send(result);
    })
  })
  
});

router.post('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  if (err) throw err

  db.collection('restaurants').insert(req.body).toArray(function (err, result) {
    if (err) throw err
    
    })
  
  db.collection('restaurants').find({'uuid': req.body.uuid}).toArray(function (err, result) {
    if (err) throw err

    res.send(result);
    })
  })
});

router.delete('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  if (err) throw err

  db.collection('restaurants').remove({'uuid': req.body.uuid, 'name': req.body.name}).toArray(function (err, result) {
    if (err) throw err
    
    })
  
  db.collection('restaurants').find({'uuid': req.body.uuid}).toArray(function (err, result) {
    if (err) throw err

    res.send(result);
    })
  })
});

module.exports = router;
