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


// 创建卡牌
function create() {
    for (var i = 1; i <= num; i++) {
        var element = document.getElementById("vote");
        console.log(element);
        var content = document.createElement("div");
        var card = document.createElement("div");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var node1 = document.createTextNode(i + '号');
        var node2 = document.createTextNode("杀手");
        var node3 = document.createTextNode("水民");
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");

        content.className = "container";
        card.className = "card";
        para1.className = "p2";
        para2.className = "p3";
        li1.className = "icon4";
        li2.className = "icon5";
        li3.className = "icon6";
        li4.className = "icon7";

        if (arrX.indexOf(i) != -1) {
            card.appendChild(para1);
            para1.appendChild(node2);
        }
        else {
            card.appendChild(para1);
            para1.appendChild(node3);
        }
        element.appendChild(content);
        content.appendChild(card);
        content.appendChild(ul);
        card.appendChild(para2);
        para2.appendChild(node1);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);

    }
}
create();

// 声明选中对象，卡牌对象和颜色对象
var activeNum;
var card = document.getElementsByClassName("card");
var color = document.getElementsByClassName("p2");

// 读取死亡数据，给卡牌添加死亡效果
for (i = 0; i < num; i++) {
    if (arrDead.indexOf(i + 1) != -1) {
        color[i].className = "p2 bgcolor-dead";
    }
}

// 定义被选中的序号为activeNum,并通过index和this来获取;
for (var i = 0; i < card.length; i++) {
    color[i].index = i;
    card[i].index = i;
    card[i].onclick = function () {
        // 获取点击的卡片的编号
        activeNum = this.index + 1;
        // console.log(activeNum);
        // 判断是否死亡
        if (arrDead.indexOf(activeNum) != -1) {
            alert("该角色已死亡，请选择其他人")
        }
        else {
            // for循环清除所有非死亡卡片的选中状态
            for (var i = 0; i < card.length; i++) {
                // 判断卡片是否死亡
                if (arrDead.indexOf(i + 1) == -1) {
                    color[i].className = "p2";
                }
            }
            color[this.index].className = "p2 bgcolor-active";
            // console.log(color[this.index]);
        }
    }
}

// 点击按钮后保存死亡数据并跳转
var btn = document.getElementById("btn");

btn.onclick = function () {
    if (activeNum == undefined) {
        alert("请选择要杀死的对象")
    }
    else if (arrDead.indexOf(activeNum) != -1) {
        alert("请选择要杀死的对象")
    }
    else {
        // 保存死亡数据
        arrDead.push(activeNum);
        save.arrD = arrDead;
        // console.log(save.arrD);
        save.pageChange = 1;
        var str = JSON.stringify(save);
        localStorage.setItem(1, str);

        // 检查死亡数组的杀手
        function checkDeadX(x) {
            if (arrX.indexOf(x) != -1) {
                return x;
            }
        }

        // 检查死亡数组的平民
        function checkDeadY(y) {
            if (arrY.indexOf(y) != -1) {
                return y;
            }
        }

        var arrDeadX = arrDead.filter(checkDeadX);
        var arrDeadY = arrDead.filter(checkDeadY);

        if (arrDeadX.length == arrX.length) {
            save.win = "y";
            var str = JSON.stringify(save);
            localStorage.setItem(1, str);
            location.href = "js-task4-6.html";
        }
        else if (arrDeadY.length == arrY.length) {
            save.win = "x";
            var str = JSON.stringify(save);
            localStorage.setItem(1, str);
            location.href = "js-task4-6.html";
        }
        else {
            var str = JSON.stringify(save);
            localStorage.setItem(1, str);
            location.href = "js-task4-5.html";
        }
    }

}

