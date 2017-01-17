//
// angular.module('myApp',[])
//
//
//     // 表单提交
//     .controller('signUp',function ($scope) {
//
//         $scope.userdata ={
//
//         };
//
//         $scope.myForm =function () {
//             console.log($scope.userdata );
//             if ($scope.myForm.$invalid){
//                 alert('请检查您的信息')
//             }else{
//                 alert('提交成功')
//             }
//         }
//
//
//     })
//
//     .directive('compare',function () {
//         var o={};
//         o.strict ='AE';
//         o.scope ={
//             orgText: '=compare'
//         };
//         o.require ='ngModel';
//         o.link =function (sco, ele, att, con) {
//             con.$validators.compare =function (v) {
//                 return v == sco.orgText;
//             };
//
//             sco.$watch('orgText',function () {
//                 con.$validata();
//             })
//         };
//         return o;
//     });
// 表单提交


// .controller('signUp',['$state','$scope','$http' ,function ($state,$scope,$http){
//     $scope.talent = [ {name: "学渣", value: 1}, {name: "学霸", value: 2}];
//     $scope.level = [ {name: "0基础", value: 1}, {name: "修行3个月以内", value: 2},
//         {name: "修行6个月以内", value: 3}, {name: "修行1年以内", value: 4}, {name: "修行3年以内", value: 5},
//         {name: "修行3年以上", value: 6}];
//     $scope.type = [ {name: "CSS", value: 1}, {name: "JS", value: 2}, {name: "JAVA", value: 3},
//         {name: "运维", value: 4}, {name: "DBA", value: 5}, {name: "产品", value: 6}, {name: "IOS", value: 7},
//         {name: "ANDROID", value: 8}];
//
//
//
//     // $scope.userdata.jointime = new Date()
//     $scope.names="娃娃";
//       $scope.qqs="12121212";
//         $scope.types="2";
//        $scope.schooles="啊我哇奥无";
//         $scope.talentes="1";
//         $scope.leveles="2";
//         $scope.times="21211212";
//         $scope.wishes="啊实打实大所多";
//     $scope.Save =function() {
//         $http({
//             method:'post',
//             url:'/ajax/student',
//             headers:{'Content-Type':'application/x-www-form-urlencoded'},
//             data:{
//                 name:$scope.names,
//                 qq:$scope.qqs,
//                 type:$scope.types,
//                 school:$scope.schooles,
//                 talent:$scope.talentes,
//                 level:$scope.leveles,
//                 joinTime:$scope.times,
//                 wish:$scope.wishes
//             }
//         })
//             .success(function(data){
//                 console.log(data);
//                 if(data.code == 200){
//                     alert($scope.names + "学员添加成功" );
//                 }else{
//                     alert(data.message);
//                 }
//             })
//             .error(function(data){
//                 console.log(data);
//                 alert("添加失败");
//             })
//
//     }
//
// }]);