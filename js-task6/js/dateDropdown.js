angular.module('myApp').factory('dateUtils', function() {
    return {
        getMonthDay: function(dateFields) {
            var d = new Date(dateFields.year, dateFields.month, 0);
            var lastDay = d.getDate();
            return this.days(lastDay);
        },
        days: function(max) {
            var days = [];
            for (var i = 1; i <= max; i++) {
                days.push(i);
            }
            return days;
        },
        years: function(before, after) {
            var currentYear = (new Date()).getFullYear();
            var years = [];
            for (var i = currentYear - before; i <= currentYear + after; i++) {
                years.push(i);
            }
            return years;
        }
    }
});

angular.module('myApp').directive('dateDropdown', function(dateUtils) {
    return {
        restrict: 'A',
        replace: true,
        require: 'ngModel',
        scope: {
            model: '=ngModel'
        },
        template:  '<div class="row">' +
        '<div class="col-xs-4">' +
        '    <select name="dateFields.year" data-ng-model="dateFields.year" placeholder="Year" class="form-control" ng-options="year for year in years" ng-change="checkDate()"></select>' +
        '</div>' +
        '<div class="col-xs-4">' +
        '    <select name="dateFields.month" data-ng-model="dateFields.month" placeholder="Month" class="form-control" ng-options="month for month in months" ng-change="checkDate()"></select>' +
        '</div>' +
        '<div class="col-xs-4">' +
        '     <select name="dateFields.day" data-ng-model="dateFields.day" placeholder="Day" class="form-control" ng-options="day for day in days" ng-change="checkDate()"></select>' +
        '</div>' +
        '</div>',
        controller: function($scope, dateUtils) {
            $scope.days = dateUtils.days(31);
            $scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
            $scope.years = dateUtils.years(40, 0);

            $scope.dateFields = {};

            $scope.dateFields.day = new Date($scope.model).getDate() || 1;
            $scope.dateFields.month = new Date($scope.model).getMonth() ? new Date($scope.model).getMonth() + 1 : 1;
            $scope.dateFields.year = new Date($scope.model).getFullYear() || 2000;

            $scope.$watch('model', function (newDate) {
                if(newDate) {
                    $scope.dateFields.day = new Date(newDate).getDate();
                    $scope.dateFields.month = new Date(newDate).getMonth() + 1;
                    $scope.dateFields.year = new Date(newDate).getFullYear();
                }
            });

            $scope.checkDate = function () {
                $scope.days = dateUtils.getMonthDay($scope.dateFields);
                var lastDays = $scope.days[$scope.days.length - 1];

                if ($scope.dateFields.day > lastDays) {
                    $scope.dateFields.day = 1;
                }

                $scope.model = new Date($scope.dateFields.year, $scope.dateFields.month - 1, $scope.dateFields.day).getTime();
            };
        }
    }
});
