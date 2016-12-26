/**
 * Created by CT on 2016/12/23.
 */

// 获取localStroage的数据
var str = localStorage.getItem("1");
var save = JSON.parse(str);
var num = save.number;
var arrX = save.arr1;
var arrY = save.arr2;
var btn= document.getElementById("btn");

function next(){
    location.href='js-task4-2.html';
}

function diary(){
    for(var i=1; i <= num; i++){
        var element=document.getElementById("player");
        var content = document.createElement('span');
        var li=document.createElement("li");
        content.className="hover";
        var node=document.createTextNode(i+'号');

        if(arrX.indexOf(i)!= -1){
            content.innerHTML="杀手";
        }
        else{
            content.innerHTML="平民";
        }

        element.appendChild(li);
        li.appendChild(content);
        li.appendChild(node);
    }
}

diary();

