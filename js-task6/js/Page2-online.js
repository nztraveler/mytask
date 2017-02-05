/**
 * Created by CT on 2017/1/13.
 */
var myApp = angular.module('myApp');
myApp.controller('myCtrl1', ['$scope', '$state','$filter', '$http','$stateParams', function ($scope,$state, $filter, $http,$stateParams) {

    $scope.search = Number($stateParams.oid); //把url参数oid和search类型绑定起来,并把类型转换为数值
    $scope.currentPage = $stateParams.page; //把url参数page和当前页数绑定起来
    $scope.maxSize = 5;// 下方分页处最多显示5个分页序号
    $scope.maxPerPage = 10;//每页数量

    // 获取后台数据
    //第一次进入页面，url中无参数，故设置默认参数为1
    if ($scope.search == undefined || $scope.currentPage==undefined ){
        $scope.search = 1;
        $scope.currentPage = 1;
        $state.go('.', {oid:$scope.search, page:$scope.currentPage});//以新url参数刷新页面
    }
    $http.get('/skill-ajax/a/occupation/document/1?type='+ $scope.search+'&size=10&page='+$scope.currentPage)
        .success(function (response) {
            // 后台返回总数据量
            $scope.num = response.total;//数据总数保存在num中，对应分页的'total-items',分页插件会自动计算出总页数
            $scope.names = response.data;//返回的具体数据保存在names中
            $scope.currentPage = $stateParams.page; //由于获取到了$scope.names数据总数，分页插件会自动计算总页数并重置当前页数为1，所以需要再次绑定url中的当前页数


        });

    // 点击搜索事件
    $scope.searchClick = function () {
// 把number作为搜索参数传入，实现搜索
        if ($scope.search >= 1 && $scope.search <= 8) {
            $scope.currentPage = 1;//初始化当前页
            $state.go('.', {oid:$scope.search, page:$scope.currentPage});
        }
        else {
            alert("请输入1~8的数字");
        }
    };

    // 分页使用数据监听currentPage的改动
    $scope.$watch('currentPage', function () {
        $http.get('/skill-ajax/a/occupation/document/'+$scope.search+'?type=1&size=10&page='+$scope.currentPage)
            .success(function (response) {
                $state.go('.', {oid:$scope.search, page:$scope.currentPage});
                //把$state.go放在外面会出问题，但放在里面就正常了。
            });
    });
}]);
