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
var save = new Object;

// 总人数数组
// var arr=[];
// 杀手数组
// var arrX=[];
// 水民数组
// var arrY=[];

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



// 玩家分配开始
function assign() {
    // 转义Number
    var TotalN=Number(number);
    var arr=[];
//杀手数组
    var arrX=[];
    var arrY=[];
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
    //y平民人数  x撒手人数
    y = number - x;
    document.getElementById("role1-num").innerHTML = x;
    document.getElementById("role2-num").innerHTML = y;
    console.log('杀手为'+x, y);

// 根据人数数量 循环出数字加入数组 将数组的所有身份变成水民
    for (var i = 1; i < TotalN+1; i++) {
        arr.push(i);
    }
    console.log('总人数'+arr);

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
    console.log('洗牌后总人数'+arr);

    // 输出arrX，arrY数组
    for (var i=0; i<x; i++) {
        arrX.push(arr[i]);
        console.log(arrX[i])
    }
    console.log('杀手的数组'+arrX);

    for (var i=x; i< TotalN; i++) {
        arrY.push(arr[i]);
    }
    console.log(arrY);

// 把数组X和Y，按数字降序排列,生成新数组
    arrX.sort(function(a,b){return a-b});
    arrY.sort(function(a,b){return a-b});
    console.log(arrX);
    console.log(arrY);

    // 每次点击按钮后重置div里面的内容，不然数据堆积
    document.getElementById('x1').innerHTML=""
    document.getElementById('y1').innerHTML=""
    for( var i=0; i<x; i++){
        var para=document.createElement("span");
        var node=document.createTextNode(arrX[i]+"号");
        para.appendChild(node);
        document.getElementById('x1').appendChild(para)
    }


    for( var i=0; i< y; i++ ){
        var para=document.createElement("span");
        var node=document.createTextNode(arrY[i]+"号");
        para.appendChild(node);
        document.getElementById('y1').appendChild(para)
    }

    // 保存数组1、数组2和总人数
    save.keyname = 1;
    save.number= number;
    save.arr1= arrX;
    save.arr2= arrY;

}

// localStorage数据储存函数

function inspect() {
    if ( number>18||number<6 ){
        alert("人数超过范围，请输入6~18范围内的数字")
    }
    else{
 // 保存词组1和词组2，并转换为字符串保存
        save.keyname = 1;
        save.word1 = document.getElementById("civilian-word").value;
        save.word2 = document.getElementById("kill-word").value;

        var str = JSON.stringify(save);//将对象转换成字符串
        localStorage.setItem(save.keyname,str);
        console.log(str);

       location.href="../js-task3/js-task3.html";
    }
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

