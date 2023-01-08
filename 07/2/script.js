let in_out = document.getElementById("in-out")
let alc = document.getElementById("alc")
let exp = document.getElementById("exp")
let mod = document.getElementById("mod")
let n7 = document.getElementById("n7")
let n8 = document.getElementById("n8")
let n9 = document.getElementById("n9")
let div = document.getElementById("div")
let n4 = document.getElementById("n4")
let n5 = document.getElementById("n5")
let n6 = document.getElementById("n6")
let mul = document.getElementById("mul")
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let n3 = document.getElementById("n3")
let sub = document.getElementById("sub")
let n0 = document.getElementById("n0")
let dot = document.getElementById("dot")
let eql = document.getElementById("eql")
let add = document.getElementById("add")
let clr = document.getElementById("clr")
let a = 0
let b = 0
n0.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 0
}
n1.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 1
}
n2.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 2
}
n3.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 3
}
n4.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 4
}
n5.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 5
}
n6.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 6
}
n7.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 7
}
n8.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 8
}
n9.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + 9
}
dot.onclick = function(){
    in_out.innerHTML = 
    in_out.value = in_out.value + "."
}
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
alc.onclick=function(){
    in_out.innerHTML =
    in_out.value = ""
}
clr.onclick = function(){
    in_out.innerHTML = 
    in_out.value = ((in_out.value)-(in_out.value%10))/10
}