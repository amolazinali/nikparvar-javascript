const nameId = document.getElementById("name-id");
const fn = document.getElementById("fn");
const btn = document.getElementById("btn");

btn.onclick = function() {
    fn.innerHTML = nameId.value;
}
