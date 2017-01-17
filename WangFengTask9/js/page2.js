// (function myrefresh()
// {
//     window.location.reload();
// })();

angular.module('myApp');

//将时间戳转换成日期的形式、之前存储的时候就应该对应的存储为时间戳格式。
myApp.filter('timestamp', function () {
    return function (joinTime) {
        time = new Date(joinTime).toLocaleString().replace(/\//g, "-");
        return time;
    };
})


    .controller('register', function ($state, $scope, $http, $location) {
        if (!$scope.page) {
            $scope.page = 1;
        }
        //初始化page
        $scope.nnn = 1;
        $scope.localeDate = {
            "type": ["CSS", "JS", "JAVA", "运维", "DBA", "产品", "IOS", "ANDROID"],
            "talent": ["学渣", "学霸"],
            "level": ["0基础", "修行3个月以内", "修行6个月以内", "修行1年以内", "修行3年以内", "修行3年以上"]
        };
        $scope.talent = [{name: "全部"}, {name: "学渣", value: 1}, {name: "学霸", value: 2}];
        $scope.level = [{name: "全部"}, {name: "0基础", value: 1}, {name: "修行3个月以内", value: 2},
            {name: "修行6个月以内", value: 3}, {name: "修行1年以内", value: 4}, {name: "修行3年以内", value: 5},
            {name: "修行3年以上", value: 6}];
        $scope.type = [{name: "全部"}, {name: "CSS", value: 1}, {name: "JS", value: 2}, {name: "JAVA", value: 3},
            {name: "运维", value: 4}, {name: "DBA", value: 5}, {name: "产品", value: 6}, {name: "IOS", value: 7},
            {name: "ANDROID", value: 8}];
        // var abc;
        //页数上限
        $scope.pagemax = function (userTotal) {
            return Math.ceil(parseInt(userTotal / 10))
        }
        //请求数据
        $scope.request = function () {

            console.log($scope.nnn);
            $http({
                // .get("/a/a/all/document")
                method: 'get',
                url: ('/skill-ajax/a/all/document?type=1&page=' + $scope.page),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            })

            // $http.get("/ajax/students")
                .success(function (response) {
                    // console.log(12345);
                    console.log(response.total);
                    console.log(response);
                    console.log(aaa);
                    // if (response.message === "查询成功") {
                    $scope.userList = response.data;
                    $scope.userTotal = response.total;
                    $scope.page = response.page;
                    // console.log($scope.userList.total);
                });
        }; //()表示让函数再程序加载完成之后就自动执行
        $scope.request();

        $scope.right = function () {
            $scope.page++;
            $scope.request();
            console.log($scope.userList)
        }
        $scope.left = function () {
            if ($scope.page == 1) {
                alert("已经是第一页啦！")
            } else {
                $scope.page--;
                $scope.request();
                console.log($scope.userList)
            }
        };

        $scope.edit = function () {
            $scope.id = this.user.id;//也是一样的先将当前的id获取出来，赋值给id.

            $state.go('pageTab.page3', {id: $scope.id});
        };

        $scope.del = function () {
            $scope.id = this.user.id;//获取当前点击的目标的id,然后在下面的删除请求上面将获取的目标id值传进去
            console.log($scope.id);

            $http({
                url: "/ajax/students",
                method: "post",
                params: {id: $scope.id},
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })

                .success(function (res) {
                    alert(res.message);

                    $scope.request();//删除完了之后试图上面还没有刷新，所以在这里可以重新请求一次。
                })

        };


    });







