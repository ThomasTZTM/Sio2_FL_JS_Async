let obtenirBTS = new Promise( (resolve,reject) => {
    // Passer le BTS et obtenir le result

    // Simuler le fait que le résultat est arrivé et favorable
    let btsObtenu = true

    if (btsObtenu) {
        // La promesse a été tenue
        resolve("BTS Obtenu")
    }else{
        // La promesse n'a pas été tenue
        reject("BTS Non obtenu")
    }

})

obtenirBTS.then((resultat) => {
    console.log(resultat)
})
