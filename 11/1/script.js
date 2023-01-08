let put_box = document.getElementById("put-box")
let put_btn = document.getElementById("put-btn")
let arr_box = document.getElementById("arr-box")
let get_btn = document.getElementById("get-btn")
let elm_box = document.getElementById("elm-box")
let arr = []
put_btn.onclick = function(){
    let putbox1 = put_box.value
    arr.push(putbox1) 
    arr_box.innerHTML = 
    arr
    get_btn.onclick = function(){
        let sort = arr.sort(function(a, b){return a-b});
        if (sort.length % 2 ==0){
            elm_box.innerHTML=
            ((sort[(sort.length/2)-1])*0.5+(sort[sort.length/2])*0.5)
        }
        else {
            elm_box.innerHTML=
            sort[((sort.length/2)+0.5)-1]
        }
}
}
