let nameid=document.getElementById("name-id")
let fn=document.getElementById("fn")
let st=document.getElementById("st")
let bo=document.getElementById("bo")
let bl=document.getElementById("bl")
let btn=document.getElementById("btn")

btn.onclick = function() {
    st.innerHTML=toString(document.getElementById("name-id").value)
    no.innerHTML=parseInt(document.getElementById("name-id").value)
    bl.innerHTML=Boolean(document.getElementById("name-id").value)  

}
