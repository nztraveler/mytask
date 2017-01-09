/**
 * Created by CT on 2017/1/4.
 */

var myApp = angular.module("myApp", ['ui.router']);
myApp.controller('myCtrl1', function ($scope,$http) {
    $http.get('/student-ajax/students/')
        .success(function (response) {
            $scope.names = response.data;
            console.log($scope.names);
        });
});
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");
    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
    templateUrl: "page-tab.html"
})

        .state("PageTab.Page1", {
            url:"/Page1",
    templateUrl: "one-login.html"
})

        .state("PageTab.Page2", {
            url:"/Page2",
    templateUrl: "Page2.html"
})

        .state("PageTab.Page3", {
            url:"/Page3",
    templateUrl: "Page3.html"
})
    .state("PageTab.Page4", {
        url:"/Page4",
        templateUrl: "Page4.html"
    })



});







