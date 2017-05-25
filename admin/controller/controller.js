/**
 * Created by pmcc on 2017/3/10.
 */

var ip = "http://127.0.0.1:3000";
mainApp.controller('aboutCtrl',function ($scope,$http) {
    $scope.title = "zhe shi ge  title";
    $http.get(ip+'/api/v1/company?channelName=intro').success(function (data) {
        console.log(data);
        $scope.data = data[0];
    })
});