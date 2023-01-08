let die = document.getElementById("die")
let i = 0
while (true){
    flagg=Math.trunc(Math.random()*6);
    if (flagg < 1){
        setTimeout(function die1() {die.setAttribute("src", src = "die2.svg")}, 500);
    } else if (flagg >= 1, flagg < 2){
        setTimeout(function die2() {die.setAttribute("src", src = "die1.svg")}, 500);
    } else if (flagg >= 2, flagg < 3){
        setTimeout(function die3() {die.setAttribute("src", src = "die3.svg")}, 500);
    } else if (flagg >= 3, flagg < 4){
        setTimeout(function die4() {die.setAttribute("src", src = "die4.svg")}, 500);
    } else if (flagg >= 4, flagg < 5){
        setTimeout(function die5() {die.setAttribute("src", src = "die5.svg")}, 500);
    } else if (flagg >= 5, flagg <= 6){
        setTimeout(function die6() {die.setAttribute("src", src = "die6.svg")}, 500);
    }
    
}