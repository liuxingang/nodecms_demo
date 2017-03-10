var express = require('express');
var superagent = require('superagent');
var config = require('../config/config');
var router = express.Router();

router.get('/admin',function(req,res){

  res.render('admin',{title:"后台"})

});


module.exports = router;
// exports.router = router;
