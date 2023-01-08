let in_out = document.getElementById("in-out")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let exp = document.getElementById("exp")
let mod = document.getElementById("mod")
let clr = document.getElementById("clr")
let eql = document.getElementById("eql")
let a = 0
let b = 0
add.onclick=function(){
    if (isNaN(in_out.value)==true){
        in_out.innerHTML =
        in_out.value = "ERROR"
    }
    else{
        a = in_out.value
        in_out.innerHTML =
        in_out.value = ""
        eql.onclick=function(){
            b = in_out.value
            in_out.innerHTML=
            in_out.value = (a*1) + (b*1)
        }
    }
}
sub.onclick=function(){
    if (isNaN(in_out.value)==true){
        in_out.innerHTML =
        in_out.value = "ERROR"
    }
    else{
        a = in_out.value
        in_out.innerHTML =
        in_out.value = ""
        eql.onclick=function(){
            b = in_out.value
            in_out.innerHTML=
            in_out.value = (a*1) - (b*1)
        }
    }
}
mul.onclick=function(){
    if (isNaN(in_out.value)==true){
        in_out.innerHTML =
        in_out.value = "ERROR"
    }
    else{
        a = in_out.value
        in_out.innerHTML =
        in_out.value = ""
        eql.onclick=function(){
            b = in_out.value
            in_out.innerHTML=
            in_out.value = (a*1) * (b*1)
        }
    }    
}
div.onclick=function(){
    if (isNaN(in_out.value)==true){
        in_out.innerHTML =
        in_out.value = "ERROR"
    }
    else{
        a = in_out.value
        in_out.innerHTML =
        in_out.value = ""
        eql.onclick=function(){
            b = in_out.value
            in_out.innerHTML=
            in_out.value = (a*1) / (b*1)
        }
    }    
}
exp.onclick=function(){
    if (isNaN(in_out.value)==true){
        in_out.innerHTML =
        in_out.value = "ERROR"
    }
    else{
        a = in_out.value
        in_out.innerHTML =
        in_out.value = ""
        eql.onclick=function(){
            b = in_out.value
            in_out.innerHTML=
            in_out.value = (a*1) ** (b*1)
        }
    }    
}
mod.onclick=function(){
    if (isNaN(in_out.value)==true){
        in_out.innerHTML =
        in_out.value = "ERROR"
    }
    else{
        a = in_out.value
        in_out.innerHTML =
        in_out.value = ""
        eql.onclick=function(){
            b = in_out.value
            in_out.innerHTML=
            in_out.value = (a*1) % (b*1)
        }
    }    
}
clr.onclick=function(){
    in_out.innerHTML =
    in_out.value = ""
}