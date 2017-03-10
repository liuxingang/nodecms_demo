本地mysql启动 修改config.js 数据库配置文件  导入数据库 document/nodesql
supervisor app.js  启动服务 自动刷新

前端api
轮播图：/api/v1/index/carousel

//企业概况信息查询 企业简介(intro),发展历程（development），文化理念（cultural）联系我们（connect）
//eg: /api/v1/company?channelName=intro

//公司新闻list
/api/v1/getCompanyNews

//行业新闻list
/api/v1/getTradeNews

//新闻详情
/api/v1/getCompanyNewsById?id=8a9a6932-04b1-11e7-ab62-a0999b094dbd

