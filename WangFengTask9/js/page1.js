angular.module('myApp', [])
    .controller('load', ['$state', '$scope', '$http', function ($state, $scope, $http) {
        $scope.userName = "";
        $scope.userSubmit = "";

        //var userKey ={
        //    mobile:$scope.userName,
        //    pwd: $scope.userSubmit
        //};
        //    console.log($.param(userKey));
        $scope.Submit = function () {
            $http({
                method: 'POST',
                url: '/skill-ajax/a/login',
                data: $.param({
                    mobile: $scope.userName,
                    pwd: $scope.userSubmit
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (response) {
                    if (response.message === "success") {
                        //location.href = "list.html"
                        alert('恭喜您成功登陆');
                        $state.go('pageTab.page2');
                    } else {
                        $scope.msg = response.message
                    }
                    console.log(response);

                })
                .error(function (response) {
                    alert("跨域未配置，无法连接服务器")
                })

        }

    }]);
