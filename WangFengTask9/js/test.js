angular.module("myApp", ['directives'])
    .controller("signUp", ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
//
//     $scope.time1 = "2016/01/03 21:00";

        ( $scope.Test = function () {
            // alert($stateParams.($Scope.id));
            $scope.proId = $stateParams.id;
            // alert($scope.proId);
            console.log($scope.proId);


            if ($scope.proId != "") {
                $http.get('/skill-ajax/student/' + $scope.proId)
                    .success(function (singleMsg) {
                        // console.log(singleMsg);

                        $scope.userdata.username = singleMsg.name;
                        $scope.userdata.qq = singleMsg.qq;
                        $scope.userdata.type = singleMsg.type * 1;
                        $scope.userdata.school = singleMsg.school;
                        $scope.userdata.level = singleMsg.level;
                        $scope.userdata.talent = singleMsg.talent * 1;
                        $scope.userdata.jointime = singleMsg.jointime;
                        $scope.userdata.wish = singleMsg.wish;
                    })
            }


        })();

        // console.log($scope.proId);


        $scope.jointime = "2017/01/03";
//


        // $scope.userdata.jointime= (Date.parse($scope.jointime))/1000;
        // 想法是直接用userdata直接把data表示出来，但是这个时间添加的时候总是报错。


        $scope.userdata = {};

        $scope.submitForm = function () {

            if ($scope.myForm.$invalid) {
                alert('请检查您的信息')
            }
            else {
                if ($scope.proId != "") {
                    $http({
                        method: 'PUT',
                        url: ('/skill-ajax/student/' + $scope.proId),
                        data: $.param({
                            "name": $scope.userdata.username,
                            "qq": $scope.userdata.qq,
                            "type": $scope.userdata.type,
                            "school": $scope.userdata.school,
                            "talent": $scope.userdata.talent,
                            "level": $scope.userdata.level,
                            "joinTime": (Date.parse($scope.jointime)) / 1000,
                            "wish": $scope.userdata.wish
                        }),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            console.log(data);
                            if (data.code == 200) {
                                alert($scope.userdata.username + "修改学员成功");
                            } else {
                                alert(data.message);
                            }
                        })
                        .error(function (data) {
                            console.log(data);
                            alert("修改失败，肯定有问题");
                        })

                } else {
                    // console.log($scope.userdata);
                    $http({
                        method: 'POST',
                        url: '/skill-ajax/student',

                        data: $.param({
                            "name": $scope.userdata.username,
                            "qq": $scope.userdata.qq,
                            "type": $scope.userdata.type,
                            "school": $scope.userdata.school,
                            "talent": $scope.userdata.talent,
                            "level": $scope.userdata.level,
                            "joinTime": (Date.parse($scope.jointime)) / 1000,
                            "wish": $scope.userdata.wish
                        }),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                        .success(function (data) {
                            console.log(data);
                            if (data.code == 200) {
                                alert($scope.userdata.username + "学员添加成功");
                            } else {
                                alert(data.message);
                            }
                        })
                        .error(function (data) {
                            console.log(data);
                            alert("添加失败");
                        })


                }

            }
        };


        $scope.addStudent = function () {
            console.log($scope.userdata);
            console.log((Date.parse($scope.jointime)) / 1000);
            $scope.submitForm();
        }


    }])


    .directive('compare', function () {
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        };
        o.require = 'ngModel';
        o.link = function (sco, ele, att, con) {
            con.$validators.compare = function (v) {
                return v == sco.orgText;
            };

            sco.$watch('orgText', function () {
                con.$validata();
            })
        };
        return o;
    });