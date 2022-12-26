let nameid=document.getElementById("name-id")
let fn=document.getElementById("fn")
let age=document.getElementById("age-id")
let ag=document.getElementById("ag")
let agr=document.getElementById("agr-id")
let gr=document.getElementById("gr")
let btn=document.getElementById("btn")

btn.onclick = function() {
    fn.innerHTML=typeof(document.getElementById("name-id").value)
    ag.innerHTML=typeof(parseInt(document.getElementById("age-id").value))
    gr.innerHTML=typeof(document.getElementById("agr-id").checked)

}