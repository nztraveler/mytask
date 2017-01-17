angular.module('skillApp').directive('page', function () {
    return {
        template: '<ul class="page">' +
        '<li ng-class="{\'disabled\': prevDisable}">' +
        '<a ng-click="goPage(-1)" ng-disabled="!prevDisable">' +
        '<i class="glyphicon glyphicon-chevron-left"></i>' +
        '</a>' +
        '</li>' +
        '<li><a>第 {{current}} 页</a></li>' +
        '<li ng-class="{\'disabled\': nextDisable}">' +
        '<a ng-click="goPage(1)" ng-disabled="!nextDisable"><i class="glyphicon glyphicon-chevron-right"></i>' +
        '</a>' +
        '</li>' +
        '</ul>',
        restrict: 'E',
        replace: true,
        scope: {
            page: "=",
            info: "=",
            pageName: "@"
        },
        link: function (scope, ele, attrs) {
            scope.prevDisable = true;
            scope.nextDisable = true;
            scope.current = scope.page || 1;


            if (attrs.page) {
                scope.info.then(function (res) {
                    if (res.data.code === 0) {
                        scope.next = res.data.next;

                        scope.current == 1 ? scope.prevDisable = true : scope.prevDisable = false;
                        scope.next == false ? scope.nextDisable = true : scope.nextDisable = false;
                    }
                });
            }
        },

        controller: function ($scope, $state) {
            var pageName = $scope.pageName || 'page';
            var params = {};

            $scope.goPage = function (offset) {
                if (offset > 0 && $scope.next == true) {
                    params[pageName] = $scope.current * 1 + 1;
                    $state.go('.', params);
                } else if (offset < 0 && $scope.current != 1) {
                    params[pageName] = $scope.current * 1 - 1;
                    $state.go('.', params);
                }
            };

        }
    }
});

