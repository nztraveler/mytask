/**
 * Created by CT on 2017/1/5.
 */
var app = angular.module('myApp',[]);
app.controller('formCtrl',function ($scope,$http) {
    $http.get('/a/students')
        .success(function (response) {
           $scope.names = response.data;
        });
});