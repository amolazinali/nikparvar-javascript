let no1 = document.getElementById("no1")
let res = document.getElementById("res")
let calc = document.getElementById("calc")
function perimeter (){
    return no1.value * 6.283185306
}
calc.onclick = function(){
    res.innerHTML = 
    res.value = perimeter();
}