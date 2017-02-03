/**
 * Created by CT on 2017/1/16.
 */
var myApp = angular.module('myApp', []);
myApp.controller('DataCtrl', ['$scope', '$window','$rootScope'
    // ,'userService','managerService'
    ,function($scope,$window, $rootScope
    // ,userService,managerService
){
    var vm = this ;
    vm.provinceArr = provinceArr ; //省份数据
    vm.cityArr = cityArr;    //城市数据
    vm.getCityArr = vm.cityArr[0]; //默认为省份
    vm.getCityIndexArr = ['0','0'] ; //这个是索引数组，根据切换得出切换的索引就可以得到省份及城市

    //改变省份触发的事件 [根据索引更改城市数据]
    vm.provinceChange = function(index)
    {
        vm.getCityArr = vm.cityArr[index] ; //根据索引写入城市数据
        vm.getCityIndexArr[1] = '0' ; //清除残留的数据
        vm.getCityIndexArr[0] = index ;
        //输出查看数据
        console.log(vm.getCityIndexArr,provinceArr[vm.getCityIndexArr[0]],cityArr[vm.getCityIndexArr[0]][vm.getCityIndexArr[1]]);
    }
    //改变城市触发的事件
    vm.cityChange = function(index)
    {
        vm.getCityIndexArr[1] = index ;
        //输出查看数据
        console.log(vm.getCityIndexArr,provinceArr[vm.getCityIndexArr[0]],cityArr[vm.getCityIndexArr[0]][vm.getCityIndexArr[1]]);
    }

    vm.save = function () {
        // $window.location.reload;
        alert("保存成功");
    };

    // vm.cancel = function () {
    //     // $window.history.back();
    //     window.location.reload();
    // };


}]);