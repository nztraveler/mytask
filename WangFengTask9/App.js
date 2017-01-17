/**
 * Created by wf on 2016/12/16.
 */

var myApp = angular.module("myApp", ['ui.router', 'oc.lazyLoad']);

myApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $urlRouterProvider.when("", "/pageTab");

    $stateProvider
        .state("pageTab", {
            url: "/pageTab",
            templateUrl: "pageTab.html",

            resolve: {
                loadMyFile: _lazyLoad(
                    ['css/pageTab.css',
                        'framework/ptteng-paging/pagination.js']
                )
            }
        })
        .state("pageTab.page1", {
            url: "/page1",
            templateUrl: "page1.html",
            controller: 'load',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/page1.js', 'css/page1.css']
                )
            }
        })
        .state("pageTab.page2", {
            url: "/page2",
            templateUrl: "page2.html",
            controller: 'register',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/page2.js', 'css/page2.css']
                )
            }
        })
        .state("pageTab.page3", {
            url: "/page3/:id",
            templateUrl: "page3.html",
            controller: 'signUp',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/test.js', 'css/page3.css']
                )
            }
        })

        .state("pageTab.page4", {
            url: "/page4",
            templateUrl: "page4.html",
            // controller:'simpleUp',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/page4.js', 'css/page4.css']
                )
            }
        })

});
