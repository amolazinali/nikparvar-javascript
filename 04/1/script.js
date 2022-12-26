let btn=document.getElementById("btn")
let fn=document.getElementById("fn")
let nameid=document.getElementById("name-id")

btn.onclick = function() {
    fn.innerHTML =
    document.getElementById("name-id").value;
}