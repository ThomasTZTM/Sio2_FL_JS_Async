// Appel à un endPoint ( jsonplaceholder )
// Utiliser fetch

fetch("https://jsonplaceholder.typicode.com/users")
    .then( (reponse) => {
        console.log(reponse)
    })
    .catch( (erreur) => {
        console.log(erreur)
    })