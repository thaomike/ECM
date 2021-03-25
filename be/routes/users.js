var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var data;
MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    data = result;
    db.close();
  });
});


router.get('/',(req,res) => {
  console.log(req)
})
router.post('/',(req,res) => {
  const auth = data.find((use) => {
        return (use.name === req.body.name && use.pass === req.body.pass)
    })
    auth ? res.redirect("http://localhost:3000/home") : res.redirect('http://localhost:3000/login?error=' + encodeURIComponent('Incorrect_Credential'));
})

module.exports = router