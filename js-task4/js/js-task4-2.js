/**
 * Created by CT on 2016/12/26.
 */
// 获取localStroage的数据
var str = localStorage.getItem("1");

var save = JSON.parse(str);
var day = save.date;
if (day!=undefined){
    document.getElementById("day").innerText=day;
}

