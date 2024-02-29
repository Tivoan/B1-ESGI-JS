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
## comment l'utiliser ?
```js
maPromesse.then(
    (valeur) => {
        console.log(valeur);
    },
    (raison) => {
        console.error(raison);
    }
)
```
## chainage de promesse 
```js
new Promise((resolve,reject) =>{
    setTimeout(() => resolve(1),1000);
})
    .then((result)=> {
        console.log(result);
        return result *2;
    })
    .then((result)=> {
        console.log(result);
        return result *2;
    })
    .then((result)=> {
        console.log(result);
    })
```
