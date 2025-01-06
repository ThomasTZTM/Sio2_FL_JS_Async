console.log(1)

const reussirBTS = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( ()=> {
            let btsObtenu = true
            if (btsObtenu) {
                // La promesse a été tenue
                resolve("BTS Obtenu")
            }else{
                // La promesse n'a pas été tenue
                reject("BTS Non obtenu")
            }
        }, 5000)
    })
}

// Appelé la fonction async
reussirBTS()
    .then( (resultat) => {
        console.log(resultat)
    })
    .catch( (erreur) => {
        console.log(erreur)
    })

console.log(2)
