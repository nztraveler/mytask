/**
 * Created by CT on 2017/1/4.
 */

var myApp = angular.module("myApp", ['ui.router', 'ui.bootstrap', "oc.lazyLoad"]);

myApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $urlRouterProvider.when("", "/PageTab");
    $stateProvider

        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "page-tab.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    ['css/page-tab.css']
                )
            }
})
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "Page1.html"
})

        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page2.html",
            // controller:'myCtrl1',  //把controller注入页面
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/Page2.js', 'css/page2.css']
                )
            }
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







