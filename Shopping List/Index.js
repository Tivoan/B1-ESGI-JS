function Ajout(NewFruit){
    Basket.push(NewFruit)
    document.getElementById("result").innerHTML = Basket + "<br>" ;

    switch(NewFruit){
        case 'Banana':
            NbrBanane = NbrBanane + 1
            break
        case 'Strawberry':
            NbrFraise = NbrFraise + 1
            break
        case 'Pear' : 
            NbrPoire = NbrPoire + 1
            break

    }
    document.getElementById("resultCom").innerHTML = "Banane = " + NbrBanane + "<br>" + "Fraise = " + NbrFraise + "<br>" + "Poire = " + NbrPoire + "<br>" ;
   
}

let Basket = []
let NbrBanane = 0
let NbrFraise = 0
let NbrPoire = 0
