var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var data;
MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    data = result;
    // console.log(data)
    db.close();
  });
});


router.get('/', function (req, res, next) {
  res.json(data)
});
router.get('/page/:name', function (req, res, next) {
  const id = parseInt(req.params.name);
  const start = (id - 1) * 16;
  const end = id * 16 -1;
  const da = data.slice(start,end);
  res.json(da)
});

module.exports = router;
