add=document.getElementById("add")
sub=document.getElementById("sub")
mul=document.getElementById("mul")
div=document.getElementById("div")
exp=document.getElementById("exp")
mod=document.getElementById("mod")
no1=document.getElementById("no1")
no2=document.getElementById("no2")
res=document.getElementById("res")
add.onclick=function(){
    // alert(parseInt(no1.value)+parseInt(70))
    res.value=parseInt(no1.value)+parseInt(no2.value)
}
sub.onclick=function(){
    // alert(parseInt(no1.value)+parseInt(70))
    res.value=parseInt(no1.value)-parseInt(no2.value)
}
mul.onclick=function(){
    // alert(parseInt(no1.value)+parseInt(70))
    res.value=parseInt(no1.value)*parseInt(no2.value)
}
div.onclick=function(){
    // alert(parseInt(no1.value)+parseInt(70))
    res.value=parseInt(no1.value)/parseInt(no2.value)
}
exp.onclick=function(){
    // alert(parseInt(no1.value)+parseInt(70))
    res.value=parseInt(no1.value)**parseInt(no2.value)
}
mod.onclick=function(){
    // alert(parseInt(no1.value)+parseInt(70))
    res.value=parseInt(no1.value)%parseInt(no2.value)
}