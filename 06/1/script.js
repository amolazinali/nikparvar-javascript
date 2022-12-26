//=====================================
let username = "ali";
let password = "P@ssw0rd";
//=====================================
let user=document.getElementById("name-id")
let pass=document.getElementById("pass-id")
//====================================
let btn=document.getElementById("btn")
//++++++++++++++++
let fn=document.getElementById("fn")
let pw=document.getElementById("pw")
//==============================================
btn.onclick=function(){
    if (pass.value ==password){
        pw.innerHTML="password correct"
    }
    else {
        pw.innerHTML="incorrect password"
    }
    if (user.value ==username){
        fn.innerHTML="username correct"
    }
    else {
        fn.innerHTML="incorrect username"
    }
}