/**
 * Created by pmcc on 2017/3/10.
 */

var mainApp = angular.module('mainApp',['ui.router']);
mainApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index',{
            url:'/',
            templateUrl:'./views/main.html'
            // controller:'mainCtrl'
        })
        .state('about',{
            url:"/about",
            templateUrl:'./views/about.html',
            controller:'aboutCtrl'
        })
}]);