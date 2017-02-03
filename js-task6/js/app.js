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
            controller: function ($state) {
                $state.go('PageTab.Page1');//默认显示第一个tab
            },
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
            templateUrl: "Page2-online.html",
            // controller:'myCtrl1',  //把controller注入页面
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/Page2-online.js', 'css/page2.css']
                )
            }
})

        .state("PageTab.Page3", {
            url:"/Page3",
    templateUrl: "Page3.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/Page3.js', 'css/page3.css']
                )
            }
})
    .state("PageTab.Page4", {
        url:"/Page4",
        templateUrl: "Page4.html",
        // controller: 'DataCtrl as vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/Page4.js',
                'js/city.js',
                'css/page4.css',
                // 'js/constant.js',
                // 'js/dataCtrl.js',
                'js/dateDropdown.js',
                // 'js/simpleUpload.js'
                ])
        }
    })



});







