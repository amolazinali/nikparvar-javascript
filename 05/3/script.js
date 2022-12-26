and=document.getElementById("and")
or=document.getElementById("or")
no1=document.getElementById("no1")
no2=document.getElementById("no2")
res=document.getElementById("res")
and.onclick=function(){
    res.value=(Boolean(no1.value)&& Boolean(no2.value))
}
or.onclick=function(){
    res.value=(Boolean(no1.value) ||Boolean(no2.value))
}