## Fait parti du JS 
#### Plus simple que du xml
#### Ressemble à des objets JS
## Des Clés et des Valeurs
```js
const objet ={
    nom:"Dupont",
    age: 30,
}
const chaineJSON = JSON.stringfly(objet)
console.log(chaineJSON) // {"nom":"Dupont","age":"30"}
```
Stringfly sert a montrer les clés et les valeurs en Chaine de caractères

```js
const chaineJSON = '{"nom":"Dupont","age":"30"}'
const obhet = JSON.parse(chaineJSON)

console.log(personObject.nom) //renvoie le nom donc Dupont 
console.log(personObject.age) // renvoie l'age donc 30
```
