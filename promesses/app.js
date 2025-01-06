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

// Autre manière d'appelé la fonction
// async et await
const traiterReussirBTS = async () => {
    try {
        const reponse = await reussirBTS()
        console.log(reponse)
    }catch (error){
        console.log(error) // Promesse non tenue
    }
}
traiterReussirBTS()

console.log(2)
