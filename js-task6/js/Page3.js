// var myApp = angular.module('myApp');
// myApp.controller('myCtrl2',function ($scope,$http) {
//
// });
angular.module('myApp')

    .factory('uploadFileService', function ($http) {
        return {
            uploadFile: function (formData) {
                return $http.post('/skill-ajax/a/u/img/thumb', formData, {
                    withCredentials: true,
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity
                })
            }
        }
    })
    .directive('simpleUpload', function (uploadFileService, $rootScope) {
        return {
            restrict: 'AE',
            scope: true,
            template: '<div class="uploader-box">' +
            '<div class="uploader-box-img" ng-if="img" ng-style="{\'background-image\':\'url(\' + img + \')\'}"></div>' +
            '<span ng-if="uploadStatus">上传中...</span>' +
            '<p ng-click="triggerSelect()" id="myClick">点击上传图片</p>' +
            '</div>' +
            '<input class="hidden" type="file" id="fileInput" onchange="angular.element(this).scope().uploadFile(this.files);">',
            link: function (scope, element, attrs) {

                scope.img = scope.$parent.vm.userData.thumb || '';
                // 是否处于上传中状态
                scope.uploadStatus = false;

                // 点击div触发input:file
                scope.triggerSelect = function () {
                    element.children('input[type=file]').trigger('click');
                };

                // 上传
                scope.uploadFile = function (files) {
                    var fd = new FormData();
                    fd.append("file", files[0]);

                    scope.uploadStatus = true;

                    uploadFileService.uploadFile(fd).then(function (res) {
                        if (res.data.code == 0) {
                            scope.img = res.data.data.url;
                            scope.$parent.vm.userData.thumb = scope.img;
                            scope.uploadStatus = false;
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                };
            }
        }
    })
    .directive('simpleUploadBook', function (uploadFileService, $rootScope) {
        return {
            restrict: 'AE',
            scope: true,
            template: '<div class="uploader-box">' +
            '<img ng-if="img" ng-src="{{img}}" />' +
            '<span ng-if="uploadStatus">上传中...</span>' +
            '<p ng-click="triggerSelect()">点击上传图片</p>' +
            '</div>' +
            '<input class="hidden" type="file" id="fileInput"  onchange="angular.element(this).scope().uploadFile(this.files);">',
            link: function (scope, element, attrs) {

                scope.img = '';
                // 是否处于上传中状态
                scope.uploadStatus = false;

                // 点击div触发input:file
                scope.triggerSelect = function () {
                    element.children('input[type=file]').trigger('click');
                    scope.$parent.$parent.imgClick = true;
                };

                console.log(scope.$parent);
                // 上传
                scope.uploadFile = function (files) {
                    var fd = new FormData();
                    fd.append("file", files[0]);

                    scope.uploadStatus = true;

                    uploadFileService.uploadFile(fd).then(function (res) {
                        if (res.data.code == 0) {
                            scope.img = res.data.data.url;
                            // scope.$parent.$parent.img = scope.img;
                            scope.uploadStatus = false;

                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                };
            }
        }
    });
