var express = require('express');
var async = require('async');
var superagent = require('superagent');
var config = require('../config/config');
var router = express.Router();

router.get('/',function(req,res){
  var data = {};
  async.parallel({
      carousel: function (cb) {
          superagent.get(config.webSever.devServeUrl+'/api/v1/index/carousel').end(function (err,r) {
              console.log(err);
              console.log(r.body);
              // data.carousel = r.body;
              // res.render('index',{data:data,title:"首页"})
              cb(null,r.body)
          })
      },
      companyNews: function (cb) {
          superagent.get(config.webSever.devServeUrl+'/api/v1/getCompanyNews').end(function (err,r) {
              console.log(r.body)
              // res.render('news/index',{data:r.body,title:"公司新闻",url:'/companyNews'})
              cb(null,r.body)
          })
      }
  },function (err,result) {
      console.log("------result------");
      console.log(result);
      res.render('index',{data:result,title:"首页"})
  })


});


//关于我们 -企业简介
router.get('/about/intro',function(req,res){
    superagent.get(config.webSever.devServeUrl+'/api/v1/company?channelName=intro').end(function (err,r) {
      console.log(r.body)
        res.render('about/index',{data:r.body[0],title:"关于我们",url:'/intro'})
    })
});
//关于我们 -发展历程
router.get('/about/development',function(req,res){
    superagent.get(config.webSever.devServeUrl+'/api/v1/company?channelName=development').end(function (err,r) {
        console.log(r.body)
        res.render('about/index',{data:r.body[0],title:"关于我们",url:'/development'})
    })
});
//关于我们 -文化理念
router.get('/about/cultural',function(req,res){
    superagent.get(config.webSever.devServeUrl+'/api/v1/company?channelName=cultural').end(function (err,r) {
        console.log(r.body)
        res.render('about/index',{data:r.body[0],title:"关于我们",url:'/cultural'})
    })
});
//关于我们 -联系我们
router.get('/about/connect',function(req,res){
    superagent.get(config.webSever.devServeUrl+'/api/v1/company?channelName=connect').end(function (err,r) {
        console.log(r.body)
        res.render('about/index',{data:r.body[0],title:"关于我们",url:'/connect'})
    })
});


//新闻动态 -公司新闻
router.get('/news/companyNews',function(req,res){
    superagent.get(config.webSever.devServeUrl+'/api/v1/getCompanyNews').end(function (err,r) {
        console.log(r.body)
        res.render('news/index',{data:r.body,title:"公司新闻",url:'/companyNews'})
    })
});

//新闻内容
router.get('/news/companyNews/:id',function(req,res){
    var newsId = req.params.id;
    superagent.get(config.webSever.devServeUrl+'/api/v1/getCompanyNewsById?id='+newsId).end(function (err,r) {
        console.log(r.body)
        var newsType = r.body.data[0].newsType;
        var newsTypeText = r.body.data[0].newsTypeText;
        console.log(newsTypeText)
        res.render('news/details',{data:r.body,title:newsTypeText,url:newsType})
    })
});
//新闻动态 -行业新闻
router.get('/news/tradeNews',function(req,res){
    superagent.get(config.webSever.devServeUrl+'/api/v1/getTradeNews').end(function (err,r) {
        console.log(r.body)
        res.render('news/index',{data:r.body,title:"公司新闻",url:'/tradeNews'})
    })
});

module.exports = router;
// exports.router = router;
