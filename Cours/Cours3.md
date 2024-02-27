# settimeout(() => (),1000)
### Décale dans le temps le script donnée 
```js
console.log("Début");

setTimeout(() => {
    console.log("Exécution asynchrone après 2 secondes");
}, 2000)

console.log(setTimeout)
```

# Promesse
```js
let promesse = new Promise((Resolve,Reject) => {
    let condition = true
    if (condition){
        setTimeout(() => resolve("Opération Réussie"),1000) }
        else {
            reject("Opération échouée")
        }
    })
const promise = fetch("link")
promise 
    .then((response)=> {
        console.log("reponse body: " response.body)
        return response.json()
    })
    .then((data)=>{
        console.log("data: ",data)
    })
    .catch((error)=>{
        console.log("error: ", error)
    })


```
## Then catch and Finally for Promesse
.then() : s'éxecute si la promesse est résolue avec succès.
.catch() : s'éxecute si la promesse est résolue avec rejetée
.finnaly() :s'éxecute si la promesse est résolue avec rejetée ou facée
