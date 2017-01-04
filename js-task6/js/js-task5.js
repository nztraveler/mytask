/**
 * Created by CT on 2016/12/29.
 */

// 点击button切换登录和注册界面
var btn1 = document.getElementById("login");
var btn2 = document.getElementById("signUp");
var login = document.getElementById("show-login");
var signup = document.getElementById("show-signUp");
function show1(){
    btn1.style.backgroundColor="#d0d3d8";
    login.style.display="block";
    btn2.style.backgroundColor="transparent";
    signup.style.display="none";
}

function show2(){
    btn2.style.backgroundColor="#d0d3d8";
    signup.style.display="block";
    btn1.style.backgroundColor="transparent";
    login.style.display="none";
}

btn1.onclick = show1;
btn2.onclick = show2;






// ajax部分

// 登录页验证开始
var xmlHttp = new XMLHttpRequest();

function callServer() {
    // Get the city and state from the web form
    var mobile = document.getElementById("mobile").value;
    var pwd = document.getElementById("pwd").value;
    // Only go on if there are values for both fields


    if (mobile.length != 11)
    {
        alert("请输入正确的手机号");
        return;
    }
    if (pwd.length < 6)
    {
        alert("请输入6-16位密码");
        return;
    }

    // Build the URL to connect to
    // var url = "121.41.226.206:10010/a/login?mobile=" + escape(mobile) + "&pwd=" + escape(pwd);

    // Open a connection to the server
    xmlHttp.open("POST","/a/login",true);
// post发送方法，需要定义头部
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    // 发送数据
    xmlHttp.send("mobile=" + mobile+ "&pwd=" + pwd);

    // Setup a function for the server to run when it's done
    xmlHttp.onreadystatechange = updatePage;
}

var submit1 = document.getElementById("submit1")
submit1.onclick = callServer;

function updatePage() {
    if (xmlHttp.readyState == 4) {
        var response = xmlHttp.responseText;
        var str = JSON.parse(response);
        alert(str.message);
        // submit.value = response;
        console.log(response);
        console.log(str);
    }
}
// 登录页验证结束


// 注册页验证开始

// 判断手机号是否合法，获取验证码
var xmlHttp2 = new XMLHttpRequest();


function callServer2() {
    var mobileSign = document.getElementById("mobile-signup").value;
    if (mobileSign.length != 11)
    {
        alert("请输入正确的手机号");
        return;
    }

    // post发送方法，需要定义头部

    xmlHttp.open("POST"," /a/code/send",true);

    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // Open a connection to the server
    // 发送数据
    xmlHttp.send("mobile=" + mobileSign);
    console.log(xmlHttp.send);
    xmlHttp.onreadystatechange = updatePage;
}

var btnVerify = document.getElementById("button-verify");
btnVerify.onclick = callServer2;



var xmlHttp3 = new XMLHttpRequest();

function callServer3() {
    var mobileSign = document.getElementById("mobile-signup").value;
    var captcha = document.getElementById("captcha").value;
    var pwdSignup = document.getElementById("pwd-signup").value;
    if (mobileSign.length != 11)
    {
        alert("请输入正确的手机号");
        return;
    }
    if (captcha.length != 6)
    {
        alert("请输入六位数验证码");
        return;
    }
    if (pwdSignup.length < 6)
    {
        alert("请输入6-16位密码");
        return;
    }


    // post发送方法，需要定义头部

    xmlHttp.open("POST","/a/user",true);

    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // Open a connection to the server
    // 发送数据
    xmlHttp.send("mobile=" + mobileSign+ "&password=" + pwdSignup+"&verify="+captcha);
    console.log(xmlHttp.send);
    xmlHttp.onreadystatechange = updatePage;
}

var submit2 = document.getElementById("submit2");
submit2.onclick = callServer3;