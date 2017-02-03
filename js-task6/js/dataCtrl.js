angular.module('myApp')
    .controller('DataCtrl', ['$state','$scope','$window','$rootScope','PROVINCE','CITY','managerService','classService','commonUtil','imgService','uploadService','userService','$timeout','constantService',DataCtrl]);
        function DataCtrl($state, $scope, $window, $rootScope, PROVINCE, CITY, managerService, classService,
                                      commonUtil, imgService, uploadService, userService, $timeout, constantService) {
        var vm = this;

        // if ($rootScope.userData && $rootScope.userData.id == $state.params.uid) { // 我的学院
        //     vm.isSelf = true;
        //     vm.userData = $rootScope.userData;
        //     vm.uid = $rootScope.userData.id;
        // } else { // TA的学院
        //     vm.isSelf = false;
        //     vm.userData = {};
        //     vm.uid = $state.params.uid;
        //     getUserDetail();
        // }

        // if (vm.userData.thumb == undefined || vm.userData.thumb == '') {
        //     vm.userData.thumb = constantService.defaultThumb;
        // }


        // vm.editable = false;
        // vm.provinceList = PROVINCE;
        // vm.cityList = CITY;

        //获取个人资料
        // function getUserDetail() {
        //     userService.getUserDetail("full", [vm.uid]).then(function (res) {
        //         if (res.data.code == 0) {
        //             vm.userData = managerService.combineSelfDetail(res);
        //         }
        //         else {
        //             $rootScope.alert(res.data.message);
        //         }
        //     });
        // }


        //修改个人资料
        vm.save = function () {
            userService.changeUserInfo(vm.userData).then(function (res) {
                if (res.data.code == 0) {
                    managerService.addSelfDetail(vm.userData);
                    $rootScope.$broadcast('userInfoChange', vm.userData);
                    vm.editable = !vm.editable;
                }else {
                    $rootScope.alert(res.data.message);
                }
            });
        };

        vm.cancel = function () {
            $window.history.back();
        };
        // vm.edit = function () {
        //     vm.editable = !vm.editable;
        // };
        // vm.changeSelect = function () {
        //     vm.userData.city = "";
        // };
    }