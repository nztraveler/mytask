/**
 * Created by CT on 2016/12/14.
 */
var number
// var number=this.value;
var aa = document.getElementById("add");
var ss = document.getElementById("sub");
var ran = document.getElementById("range");
var num= document.getElementById("num");
var btn1=document.getElementById("btn1");

// 定义减法函数
function subtract() {
    number=document.getElementById("range").value;

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
    number=document.getElementById("range").value;

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
// 定义#add和#sub


function click() {
    // 定义加减的点击事件
   aa.onclick=add;
    ss. onclick=subtract;
    // 定义两个input的输入事件，两个value值联动改变
    ran.oninput=change2;
    num.oninput=change1;
    btn1.onclick=inspect;
}
click();

