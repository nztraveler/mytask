/**
 * Created by CT on 2016/12/14.
 */
var number=document.getElementById("range").value;
// var number=this.value;
var aa = document.getElementById("add");
var ss = document.getElementById("sub");
var ran = document.getElementById("range");
var num= document.getElementById("num");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var x;
var y;
// 定义减法函数
function subtract() {
    if (number>6&&number<=18) {
    number--;
}
    else {
    number=6;
        alert("最少6人！");
    }
    // 将运算出的结果赋予#num和#range
    document.getElementById("num").value=number ;
    document.getElementById("range").value=number;
}
// 定义加法函数
function add(){
    // number=document.getElementById("range").value;

    if (number>=6&&number<18){
        number++;
    }
    else {
        number=18
        alert("最多18人!")
    }
    // 将运算出的结果赋予#num和#range
    document.getElementById("num").value=number ;
    document.getElementById("range").value=number;
}

// 定义两个input的输入事件，两个value值联动改变
function change1() {
    number=document.getElementById("num").value
    document.getElementById("range").value=number;

}


// 定义两个input的输入事件，两个value值联动改变
function change2() {
    number=document.getElementById("range").value;
    document.getElementById("num").value=number;

}
function inspect() {
    if ( number>18||number<6 ){
        alert("人数超过范围，请输入6~18范围内的数字")
    }
}

// 玩家分配开始
function assign() {

    // 分配杀手，switch写法
    switch (number) {
        case "6":
        case "7":
        case "8":
            x = 1;
            break;

        case "9":
        case "10":
        case "11":
            x = 2;
            break;

        case "12":
        case "13":
        case "14":
        case "15":
            x = 3;
            break;

        case "16":
        case "17":
        case "18":
            x = 4;
            break;

        default:
            alert("人数超过范围，请输入6~18范围内的数字");
    }

// 分配杀手，else if 写法，也可以实现
    // if (number>=6&&number<=7){
    //     x=2
    // }
    // else if (number>=8&&number<=10){
    //     x=3;
    // }
    // else if (number>=11&&number<=12){
    //     x=4;
    // }
    // else if (number>=13&&number<=15){
    //     x=5;
    // }
    // else if (number>=16&&number<=18){
    //     x=6;
    // }
    // else {
    //     alert("人数超过范围，请输入6~18范围内的数字")
    // }

    y = number - x;
    document.getElementById("role1-num").innerHTML = x;
    document.getElementById("role2-num").innerHTML = y;
    console.log(x, y);


    var TotalN=Number(number);
    var arr=[];
    var arrX=[];
    var arrY=[];
// 根据人数数量 循环出数字加入数组 将数组的所有身份变成水民
    for (var i = 1; i < TotalN+1; i++) {
        arr.push(i);
    }
    console.log(arr);

    // 洗牌算法
    Array.prototype.shuffle = function() {
        var input = this;

        for (var i = input.length-1; i >=0; i--) {

            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }

    arr.shuffle();
    console.log(arr);

    // 每次点击按钮后重置div里面的内容，不然数据堆积
    document.getElementById('x1').innerHTML=""
    document.getElementById('y1').innerHTML=""
    for( var i=0; i<x; i++){
        //  var parent=document.getElementsByClassName('assign');
        // var child=document.getElementById("x1");
        // parent.removeChild(child);

        var para=document.createElement("span");
        var node=document.createTextNode(arr[i]+"号");
        para.appendChild(node);
        document.getElementById('x1').appendChild(para)

    }
    console.log(arr);

    for( var i=x; i< TotalN; i++ ){
        var para=document.createElement("span");
        var node=document.createTextNode(arr[i]+"号");
        para.appendChild(node);
        document.getElementById('y1').appendChild(para)
    }
    // console.log(arrY);



    // var oV=document.getElementById('x1');
    // oV.onclick=function () {
    //     this.style.background='#e77';
    // }

}



function click() {
    // 定义加减的点击事件
   aa.onclick=add;
    ss. onclick=subtract;
    // 定义两个input的输入事件，两个value值联动改变
    ran.oninput=change2;
    num.oninput=change1;
    // 检测事件
    btn1.onclick=assign ;
    btn2.onclick=inspect;
}
click();

