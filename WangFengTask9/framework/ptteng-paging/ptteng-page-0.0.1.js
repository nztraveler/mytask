/**
 * 简易分页js
 * 依赖包：jquery-2.0.js,bootstrap.js/bootstrap.min.js
 * 使用条件：
 *   1.页面url参数只有page，无其他参数。
 *   2.单个页面只能有一个分页控件。
 *   3.后台传回参数中有page。
 * 使用方法：引入包以后，在需要添加该控件的地方加入 <div data-role="pagination" page="${page }"></div>
 */



'use strict';

angular.module('myApp')
    .directive('paging', function () {
        return {
            templateUrl: 'scripts/directives/ptteng-paging/ptteng-page-0.0.1.html',
            restrict: 'E',
            replace: true,
            scope: {
                next: "@"
            },
            controller: function ($rootScope, $scope, $state, commonUtil) {


                var page = $scope.page = {
                    page: parseInt($state.params.page) || 1,
                    size: parseInt($state.params.size) || 10,
                    next: $state.params.next
                };

                if (page.page == undefined || page.page == "") {
                    page.page = commonUtil.pageDefault.page;
                }
                if (page.size == undefined || page.size == "") {
                    page.size = commonUtil.pageDefault.size;
                }
                if (page.next == undefined || page.next == "") {
                    page.next = commonUtil.pageDefault.next;
                }


                $scope.goPage = function (params) {


                    page.next = $state.params.next;


                    if ("next" == params) {
                        if (page.next) {
                            page.page = parseInt(page.page) + 1;

                        }
                    }
                    else {

                        if (page.page <= 1) {
                            page.page = 1;
                        } else {
                            page.page = parseInt(page.page) - 1;
                        }

                    }


                    $state.go($state.current, {page: pa});

                }


            }
        }
    });

