let no1 = document.getElementById("no1")
let res = document.getElementById("res")
let calc = document.getElementById("calc")
calc.onclick = function(){
    let f = 0
    let n = no1.value
    for (let i = 1; i <= n; i++){
        if (n%i==0){
            f++
        }
    }
    if (f == 2){
        res.innerHTML = 
        res.value = "true"
    } else if (f > 2){
        res.innerHTML = 
        res.value = "false"
    }
    else{
        res.innerHTML = 
        res. value = "your number is one"
    }
}