/**
 * Created by CT on 2016/12/21.
 */

// 获取localStroage的数据
var str = localStorage.getItem("1");
var save = JSON.parse(str);
var word1 = save.word1;
var word2 = save.word2;
var num = save.number;
var arrX = save.arr1;
var arrY = save.arr2;
var i = 1;
// 定义z来统计按钮的点击次数
var z = 1;
var num1 = document.getElementById("number1");
var cover = document.getElementById("cover");
var show = document.getElementById("show");
var character = document.getElementById("character");
var word = document.getElementById("word");
console.log(word1);
console.log(word2);
console.log(num);
console.log(arrX);
console.log(arrY);


var btn1= document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");

function onclick1() {

    if(arrX.indexOf(i)!= -1){
        character.innerHTML="杀手";
        word.innerHTML=word2;
    }
    else{
        character.innerHTML="水民";
        word.innerHTML=word1;
    }

    if (i<num){
        i++;
        btn1.innerHTML="隐藏并传递给"+  i +"号";
    }
    else {
        btn1.innerHTML="角色分配完毕";
        // alert("角色分配完毕，请将手机返还法官")
        btn1.onclick=function () {
            location.href="../js-task4/js-task4-1.html"
        }
    }
    cover.style.visibility="hidden";
    show.style.visibility="visible";

    // btn1.id = "btn2"
}

function onclick2(){

    num1.innerHTML= i;
    btn1.innerHTML="查看" + i + "号身份";
    cover.style.visibility="visible";
    show.style.visibility="hidden";

    // btn2.id = "btn1"
}

function click() {

    if(z % 2 == 0){
       onclick2();
    }
    else{
       onclick1();
    }
    z++;
console.log("z值"+z);
}

btn1.onclick = click;


