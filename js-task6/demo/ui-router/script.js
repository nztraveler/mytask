/**
 * Created by CT on 2017/2/5.
 */
var app = angular.module('myExample', ['ui.router']);

app.config( function( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/home');

    // 定義 $state
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<div>我在主頁</div>'
        })
        .state('about', {
            url: '/about/:id',
            template: '<div>我在介紹 {{id}}</div>',
            controller: function ($scope, $stateParams) {
                $scope.id = $stateParams.id;
            }
        });

});

app.controller('myCtrl', function ($scope, $state) {
    $scope.$state = $state;
})