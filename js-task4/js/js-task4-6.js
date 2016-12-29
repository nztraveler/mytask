/**
 * Created by CT on 2016/12/26.
 */
// 获取localStroage的数据
var str = localStorage.getItem("1");
var save = JSON.parse(str);
var num = save.number;
var arrX = save.arr1;
var arrY = save.arr2;
var arrDead = save.arrD;
var winner =  save.win;
var identity = document.getElementById("identity");
var day = Number(save.date);
// 当第一天杀手就胜利时，页面不会跳到黑夜解密页，日期数据就不会保存下来，所以判断save.day为undefined时，给day赋值1.
if(save.date == undefined){
    day=1;
}
console.log(day);
console.log(save);

// 判断杀手还是平民胜利
if( winner=="x"){
    identity.innerHTML="杀手";
}
else {
    identity.innerHTML="平民";
}

var x= document.getElementById("x");
var y= document.getElementById("y");
x.innerHTML=arrX.length+1;
y.innerHTML=arrY.length+1;

// var latestDead = arrDead[arrDead.length-1];

// 成立一个新的死亡数组,角色身份与死亡数组一一对应
var deadPlayer=[];

for(i=0; i<arrDead.length;i++){
    if (arrX.indexOf(arrDead[i])!= -1){
        deadPlayer.push("杀手");
    }
    else {
        deadPlayer.push("平民");
    }
}

var deadNote= document.getElementById("dead-note");

if(arrDead.length%2==0){
    for(var i=1; i<=day; i++){
        var content = document.createElement("div");
        content.className="day1" ;
        content.innerHTML= '<p> <span class="p3">第'+i+'天</span> </p> <p class="p5"> <span>晚上：'
            + arrDead[2*i-2]
            +'号被杀手杀死，'
            +arrDead[2*i-2]+
            '号是'
            +deadPlayer[2*i-2]+
            '</span> <br> <span>白天：'
            +arrDead[2*i-1]+'' +
            '号被全民投票投死，'
            +arrDead[2*i-1]+'' +
            '号是'
            + deadPlayer[2*i-1]+
            '</span> </p>';

        deadNote.appendChild(content);
    }
}
else{
    for(var i=1; i<day; i++){
        var content = document.createElement("div");
        content.className="day1" ;
        content.innerHTML= '<p> <span class="p3">第'+i+'天</span> </p> <p class="p5"> <span>晚上：'
            + arrDead[2*i-2]  +
            '号被杀手杀死，'
            +arrDead[2*i-2]+
            '号是'
            +deadPlayer[2*i-2]+
            '</span> <br> <span>白天：'
            +arrDead[2*i-1]+
            '号被全民投票投死，'
            +arrDead[2*i-1]+
            '号是'
            +deadPlayer[2*i-1]+
            '</span> </p>';

        deadNote.appendChild(content);
    }

    var content = document.createElement("div");
    content.className="day1" ;
    content.innerHTML= '<p> <span class="p3">第'+day+'天</span> </p> <p class="p5"> <span>晚上：'
        + arrDead[2*day-2]  +
        '号被杀手杀死，'
        +arrDead[2*day-2]+
        '号是'
        +deadPlayer[2*day-2]+
        '</span> <br> ';

    deadNote.appendChild(content);

}


var btn = document.getElementById("btn");
btn.onclick=function () {
    localStorage.clear();
    location.href= "js-task4-start.html"
}
