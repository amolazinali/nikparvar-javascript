let no1 = document.getElementById("no1")
let res = document.getElementById("res")
let calc = document.getElementById("calc")
let num = 0
calc.onclick = function(){
    for (let i = 1; i <= no1.value; i++){
        num += 4 *((-1)**(i + 1)) *1 /(2*i-1)
    }
    res.innerHTML =
    res.value = num
}