/**
 * Created by CT on 2016/12/26.
 */
// 获取localStroage的数据
var str = localStorage.getItem("1");
// console.log(1+str)
var save = JSON.parse(str);
// console.log(2+save)
var arrX = save.arr1;

var arrDead = save.arrD;
// console.log(3+arrDead);
var page = save.pageChange;
console.log(page);
// var day = 1;
var day= save.date
if (day ==undefined){
    day=2;
}
else{
    day = Number(day)+1;
}

console.log(day);

var latestDead = arrDead[arrDead.length-1];
var deadIdentity ;
var deathNote = document.getElementById("death-note")
var btn=document.getElementById("btn1");
// 判断死亡人员的身份


if (arrX.indexOf(latestDead)!=-1){
    deadIdentity="杀手";
}
else {
    deadIdentity="平民";
}

// 判断展现页面
var change=document.getElementById("change");
if( page==1) {
// 页面输入投票死亡结果
    var cry=document.getElementById("cry");
    cry.className="cry girl-cry";
    change.style.display="none";
    deathNote.innerHTML=latestDead+"号被投票投死了，真实身份是"+deadIdentity;

    console.log(day);
    btn.innerHTML="第"+day+"天";
// 储存天数
    save.date=day;
    console.log(4+save);

    var str = JSON.stringify(save);

    localStorage.setItem(1,str);
    // 点击跳转至投票页
    btn.onclick=function () {
        location.href="js-task4-2.html"
    }
}
else{

// 页面输刺杀入死亡结果
deathNote.innerHTML=latestDead+"号被杀手杀死了，真实身份是"+deadIdentity;
    // 点击跳转至投票页
    btn.onclick=function () {
        location.href="js-task4-4.html"
    }
}








