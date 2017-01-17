/**
 * Created by wf on 2016/12/27.
 */


angular.module('myApp')

    .factory('myDirect', ['$http', 'register', function ($http, register) {

        return {
            getUserDetail: function (type, ids) {
                return "/a/user/detail/" + type + commonUtil.concactArrayParam("uids", ids);
            }
        }


    }]);