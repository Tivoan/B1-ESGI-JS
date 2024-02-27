let promesse = new Promise((Resolve,Reject) => {
    let condition = true
    if (condition){
        setTimeout(() => resolve("Opération Réussie"),1000) }
        else {
            reject("Opération échouée")
        }
    })
