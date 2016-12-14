


var Num;
var rangeNum;
//创建-1按钮事件
function playSub(){
    Num = document.getElementById("num").value;
    if ( Num > 6 && Num <= 18 ){
        Num--;
    } else {
        Num = 6;
        alert("最少6人");
    }
    document.getElementById("num").value = Num;             //将按钮输出的数值赋予输入框
    document.getElementById("range").value = Num;            //将按钮输出的数值赋予滑块
}
//创建+1按钮事件
function playAdd(){
    Num = document.getElementById("num").value;
    if ( Num >= 6 && Num < 18 ){
        Num++;
    } else {
        Num = 18;
        alert("最多18人");
    }
    document.getElementById("num").value = Num;             //将按钮输出的数值赋予输入框
    document.getElementById("range").value = Num;            //将按钮输出的数值赋予进度条
}
//将进度条的数值赋予输入框
function changeNum(){
    rangeNum = document.getElementById('range').value;
    document.getElementById('num').value = rangeNum;
}
//将输入框的数值赋予进度条
function gameNum(){
    Num = parseInt(document.getElementById("num").value);
    document.getElementById("range").value = Num;
}

//创建一个按钮事件
function btnGame(){
    var
        sub = document.getElementById('sub'),
        add = document.getElementById('add'),
        // goDraw = document.getElementById('goDraw');
    rangeNum = document.getElementById('range');
    Num = document.getElementById("num").value;
    sub.onclick = playSub;
    // goDraw.onclick = jumpDraw;
    add.onclick = playAdd;
    // btn.onclick = btnData;
    rangeNum.oninput = changeNum;
    Num.oninput = gameNum;
}

btnGame();