const form = document.getElementById("form")
const nbr1 = document.getElementById("nbr1")
const nbr2 = document.getElementById("nbr2")
const select = document.getElementById("select")
const result = document.getElementById("result")


form.onsubmit = (event) => {
    event.preventDefault();
    switch(select.value){
    case "add":
    result.innerText = Number(nbr1.value)+Number(nbr2.value)
    break;
    case "sub":
    result.innerText = Number(nbr1.value)-Number(nbr2.value)
    break;
    case "mul":
    result.innerText = Number(nbr1.value)*Number(nbr2.value)
    break;
    case "div":
    result.innerText = Number(nbr1.value)/Number(nbr2.value)
    break;
    }   }
