/**
 * Created by CT on 2017/1/13.
 */

var myApp = angular.module('myApp');
myApp.controller('myCtrl1', ['$scope', '$filter', '$http', '$log', function ($scope, $filter, $http, $log) {
    $scope.search = 1;
    $scope.currentPage = 1;//初始化当前页
    $scope.maxSize = 5;// 可选页数范围，中间页数的数量
    $scope.maxPerPage = 10;//每页数量
    // 第一次获取后台数据
    $http.get('/skill-ajax/a/occupation/document/1?type=1&size=10&page=1')
        .success(function (response) {
            // 后台返回总数据量
            $scope.num = response.total;
            $scope.names = response.data;
        });

    // 点击搜索事件
    $scope.searchClick = function () {
// 把number作为搜索参数传入，实现搜索
        console.log($scope.search);
        if ($scope.search >= 1 && $scope.search <= 8) {
            $http.get('/skill-ajax/a/occupation/document/' + $scope.search + '?type=1&size=10&page=1')
                .success(function (response) {
                    // 后台返回总数和所有数据
                    $scope.num = response.total;
                    $scope.names = response.data;
                    $scope.currentPage = 1;//初始化当前页
                });
        }
        else {
            alert("请输入1~8的数字");
        }

    };

    // 分页函数，分页使用数据监听
    $scope.$watch('currentPage', function (newValue) {
        $http.get('/skill-ajax/a/occupation/document/'+$scope.search+'?type=1&size=10&page='+ newValue)
            .success(function (response) {
                // 后台返回总数据量
                $scope.names = response.data;
            });
    });
}]);

// $scope.users = [
//     {"id": 1, "name": "AAA BBB"},
//     {"id": 2, "name": "BBB CCC"},
//     {"id": 3, "name": "AAA CCC"},
//     {"id": 4, "name": "BBB DDD"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 1, "name": "AAA BBB"},
//     {"id": 2, "name": "BBB CCC"},
//     {"id": 3, "name": "AAA CCC"},
//     {"id": 4, "name": "BBB DDD"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 1, "name": "AAA BBB"},
//     {"id": 2, "name": "BBB CCC"},
//     {"id": 3, "name": "AAA CCC"},
//     {"id": 4, "name": "BBB DDD"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 1, "name": "AAA BBB"},
//     {"id": 2, "name": "BBB CCC"},
//     {"id": 3, "name": "AAA CCC"},
//     {"id": 4, "name": "BBB DDD"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 1, "name": "AAA BBB"},
//     {"id": 2, "name": "BBB CCC"},
//     {"id": 3, "name": "AAA CCC"},
//     {"id": 4, "name": "BBB DDD"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 1, "name": "AAA BBB"},
//     {"id": 2, "name": "BBB CCC"},
//     {"id": 3, "name": "AAA CCC"},
//     {"id": 4, "name": "BBB DDD"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"},
//     {"id": 5, "name": "AAA EEE"}
//
// ];
// 'search.skillName','search.name' ,'search.authorName'


//
//
// {
//     // $scope.totalItems = 64;
//     $scope.currentPage = 1;//初始化当前页
//     $scope.allitem = [];//存放所有页
//     $scope.maxSize = 5;// 可选页数范围，中间页数的数量
//     // $scope.itemsPerPage= 6; //每页数据
//     // $scope.setPage = function (pageNo) {
//     //     $scope.currentPage = pageNo;
//     // };
//     //
//     // $scope.pageChanged = function() {
//     //     $log.log('Page changed to: ' + $scope.currentPage);
//     // };
//     // $scope.bigTotalItems = 175;
//     // $scope.bigCurrentPage = 1;
//
//     $http.get('/a/document/search/query?type=1&size=268')
//         .success(function (response) {
//                 // 数据储存在names中
//                 $scope.names = response.data;
//
//                 console.log(response);
//                 console.log($scope.names);
//                 //  提取返回数据的文档总数和每页数量,
//                 var num = response.total;
//
//                 $scope.totalItems = num;//表格数据总数
//                 console.log(num);
//                 for (var i = 0; i < num; i += 10) {
//                     $scope.allitem.push($scope.names.slice(i, i + 10))
//                 }//此方法可以将一个数组分成多个数组并且放在了一个大数组里面，按每个数组10条数据【因为组件默认为10条数据一页】存放，假如41条数据的话我们将分成5页
//                 //
//             }
//         );
//
//     $scope.filterClick=function () {
//         $scope.dataFilter = $filter('filter','$scope.search');
//
//         $scope.dataFilter(dataFilter)
//         var num2 = $scope.namesFilter.length;
//         $scope.totalItems = num2;//表格数据总数
//         console.log(num2);
//         for (var i = 0; i < num2; i += 10) {
//             $scope.allitem.push($scope.namesFilter.slice(i, i + 10))
//         }//此方法可以将一个数组分成多个数组并且放在了一个大数组里面，按每个数组10条数据【因为组件默认为10条数据一页】存放，假如41条数据的话我们将分成5页
//     };
//


// $scope.func = function(e){return e.age>4;}

// function onclick(){
//     $scope.names| filter:search;
// };


// 计算page数量
// $scope.pages=Math.ceil($scope.total /$scope.size);

// $scope.pageArr=[];
// for (var i=1;i<=$scope.pages;i++){
//     $scope.pageArr.push(i);
// }
// console.log($scope.pageArr);


// });


// var count=0 ;
// count = count + 1;


// myApp.controller('PaginationCtrl', function ($scope, $log) {
//     // 数据总数
//     $scope.totalItems = 64;
//     // 初始页数
//     $scope.currentPage = 1;
//
//     $scope.setPage = function (pageNo) {
//         $scope.currentPage = pageNo;
//     };
//
//     $scope.pageChanged = function() {
//         $log.log('Page changed to: ' + $scope.currentPage);
//     };
// // 可选页数范围，中间页数的数量
//     $scope.maxSize = 5;
//     // 数据总数
//     // $scope.bigTotalItems = 175;
//
// });