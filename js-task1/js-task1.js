/**
 * Created by CT on 2017/2/4.
 */
var change;
var wrap1=document.getElementById("wrap");
var square= wrap1.getElementsByTagName("div");
var ram1;
var ram2;
var ram3;
var x = [0,1,2];

function hu() {
    // 定义3个颜色的随机RGB
    var r1=Math.ceil(Math.random()*255);
    var g1=Math.ceil(Math.random()*255);
    var b1=Math.ceil(Math.random()*255);
    var r2=Math.ceil(Math.random()*255);
    var g2=Math.ceil(Math.random()*255);
    var b2=Math.ceil(Math.random()*255);
    var r3=Math.ceil(Math.random()*255);
    var g3=Math.ceil(Math.random()*255);
    var b3=Math.ceil(Math.random()*255);
    var color1="rgb("+r1+","+g1+","+b1+")";
    var color2="rgb("+r2+","+g2+","+b2+")";
    var color3="rgb("+r3+","+g3+","+b3+")";
    //console.log函数为打印函数，用来调试显示；
    console.log(color1);
    console.log(color2);
    console.log(color3);

    function ran() {
//    随机数3个，随机1~9的数字
        ram1=Math.floor(Math.random()*9);
        ram2=Math.floor(Math.random()*9);
        ram3=Math.floor(Math.random()*9);
//        随机数去重
        if (ram1 == ram2 || ram1 == ram3 || ram2 == ram3) {
            ran();
        }
    }
    ran()
    function ramSquare() {
//        随机3个块改变随机的颜色
        square[ram1].style.backgroundColor = color1;
        square[ram2].style.backgroundColor = color2;
        square[ram3].style.backgroundColor = color3;
    }
    ramSquare()
}

function timeram() {
//     还原被改变的3个颜色，初始还原第1,2,3个；
    square[x[0]].style.backgroundColor =  "#E8830D";
    square[x[1]].style.backgroundColor =   "#E8830D";
    square[x[2]].style.backgroundColor =   "#E8830D";
    hu();
    x=[ram1,ram2,ram3]
}

function clear(){
    clearInterval(change);
}

function start() {
    clear();
    change= setInterval(timeram, 1000);
}

function reset() {
    clear();
    for (var i=0;i<square.length;i++)
    {
        square[i].style.backgroundColor =  "#E8830D";
    }
}