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











var xmlHttp = new XMLHttpRequest();

function callServer() {
    // Get the city and state from the web form
    var mobile = document.getElementById("mobile").value;
    var pwd = document.getElementById("pwd").value;
    // Only go on if there are values for both fields
    if ((mobile == null) || (pwd == "")) return;
    if ((pwd == null) || (mobile == "")) return;

    // Build the URL to connect to
    // var url = "121.41.226.206:10010/a/login?mobile=" + escape(mobile) + "&pwd=" + escape(pwd);

    // Open a connection to the server
    xmlHttp.open("POST","/a/login",true);

    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // Setup a function for the server to run when it's done
    xmlHttp.onreadystatechange = updatePage;

    // Send the request
    xmlHttp.send("mobile=" + mobile+ "&pwd=" + pwd);

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