let id = document.getElementById("id")
let msg = document.getElementById("msg")
let btn = document.getElementById("btn")
btn.onclick = function(){
    let l = id.value.length
    if (l != 10){
        msg.innerHTML =
        msg.value = "lnvalid ID"
    } else {
        let r = 0
        let a = (id.value.substr(0,1))*10
        let b = (id.value.substr(1,1))*9
        let c = (id.value.substr(2,1))*8
        let d = (id.value.substr(3,1))*7
        let e = (id.value.substr(4,1))*6
        let f = (id.value.substr(5,1))*5
        let g = (id.value.substr(6,1))*4
        let h = (id.value.substr(7,1))*3
        let i = (id.value.substr(8,1))*2
        let all = ((a*1)+(b*1)+(c*1)+(d*1)+(e*1)+(f*1)+(g*1)+(h*1)+(i*1))*1
        let all11 = all%11
        if (all11 >= 2){
            r=11-all11
        } else {
            r = all11
        }
        if (r != id.value.substr(9,1)){
            msg.innerHTML =
            msg.value = "lnvalid ID"            
        } else {
            msg.innerHTML =
            msg.value = "Valid ID" 
        }
    }
}