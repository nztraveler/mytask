/**
 * Created by CT on 2017/1/13.
 */

var myApp = angular.module('myApp');
myApp.controller('myCtrl1', ['$scope', '$filter', '$http', '$log', function ($scope, $filter, $http, $log) {
    $scope.search = 1;
    $scope.currentPage = 1;//初始化当前页
    $scope.maxSize = 5;// 可选页数范围，中间页数的数量
    $scope.maxPerPage = 10;//每页数量
    // 第一次获取后台数据
    $http.get('/skill-ajax/a/occupation/document/1?type=1&size=10&page=1')
        .success(function (response) {
            // 后台返回总数据量
            $scope.num = response.total;
            $scope.names = response.data;
        });

    // 点击搜索事件
    $scope.searchClick = function () {
// 把number作为搜索参数传入，实现搜索
        console.log($scope.search);
        if ($scope.search >= 1 && $scope.search <= 8) {
            $http.get('/skill-ajax/a/occupation/document/' + $scope.search + '?type=1&size=10&page=1')
                .success(function (response) {
                    // 后台返回总数和所有数据
                    $scope.num = response.total;
                    $scope.names = response.data;
                    $scope.currentPage = 1;//初始化当前页
                });
        }
        else {
            alert("请输入1~8的数字");
        }

    };

    // 分页函数，分页使用数据监听
    $scope.$watch('currentPage', function (newValue) {
        $http.get('/skill-ajax/a/occupation/document/'+$scope.search+'?type=1&size=10&page='+ newValue)
            .success(function (response) {
                // 后台返回总数据量
                $scope.names = response.data;
            });
    });
}]);
