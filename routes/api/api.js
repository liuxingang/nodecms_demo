/**
 * Created by pmcc on 17/2/5.
 */
'use strict';
var express = require('express');
var mysql = require('mysql');
var superagent = require('superagent');
var config = require('../../config/config');
var router = express.Router();

// 链接数据库
var connection = mysql.createConnection(config.mySql);
connection.connect();


//网站首页轮播图 api
router.get('/api/v1/index/carousel',function(req,res){
  // console.log(config.mySql);
    var sql = "SELECT * FROM `carousel`";
    connection.query(sql, function(err, rows) {
        if (err) throw err;
        res.send(rows);
        console.log("\n推荐数据推送成功\n");
    });

});

//企业概况信息查询 企业简介(intro),发展历程（development），文化理念（cultural）联系我们（connect）
//eg: /api/v1/company?channelName=intro
router.get('/api/v1/company',function (req,res) {
    var channelName = req.query.channelName;
    var sql = "SELECT * FROM company WHERE channelName='"+channelName+"'";
    connection.query(sql,function (err,rows) {
       if (err) throw err;
        res.send(rows);
        console.log(channelName+"查询成功")
    });
});

//动态——公司新闻list
router.get('/api/v1/getCompanyNews',function (req,res) {
    var sql = "SELECT * FROM companyNews WHERE newsType ='companyNews'" ;
    connection.query(sql,function (err,rows) {
        if (err) throw err;
        var data = {data:rows,channelText:'公司新闻'}
        res.send(data);
    });
});

//新闻详情single
//eg: /api/v1/getCompanyNewsById?id =
router.get('/api/v1/getCompanyNewsById',function (req,res) {
    var newsId = req.query.id;
    var sql = "SELECT * FROM companyNews WHERE newsId ='" + newsId +"'";
    connection.query(sql,function (err,rows) {
        if (err) throw err;
        var data = {data:rows};
        res.send(data);
    });
});

//动态——行业新闻list
router.get('/api/v1/getTradeNews',function (req,res) {
    var sql = "SELECT * FROM companyNews WHERE newsType = 'tradeNews'";
    connection.query(sql,function (err,rows) {
        if (err) throw err;
        var data = {data:rows,channelText:'行业新闻'}
        res.send(data);
    });
});



module.exports = router;
// exports.router = router;