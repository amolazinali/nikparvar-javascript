no1=document.getElementById("no1")
no2=document.getElementById("no2")
btn=document.getElementById("add")
btn.onclick=function(){
    document.getElementById("res").value=(no1.value+no2.value)
}