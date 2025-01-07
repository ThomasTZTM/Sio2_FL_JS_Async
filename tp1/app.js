// Appel à un endPoint ( jsonplaceholder )
// Utiliser fetch
console.log("test")
fetch("https://jsonplaceholder.typicode.com/users")
    .then( (reponse) => {
        return reponse.json()
    })
        .then( (users) => {

            console.log(users)

            // Afficher le nom de chaque user dans la page HTML
            const usersList = document.querySelector("#users-list")
            console.log(usersList)
            // Afficher chaque utilisateur dans <p>
            usersList.innerHTML = users
                .map( (user)=>`<p>${user.name}</p>` )
                .join(' ')

        })
    .catch( (erreur) => {
        console.log(erreur)
    })

// Faire la meme chose avec async et await

const fetchUsers = async  () => {
    try {
        const reponse = await fetch()
        const users = await reponse.json()
        // Afficher le nom de chaque user dans la page HTML
        const usersList = document.querySelector("#users-list")
        console.log(usersList)
        // Afficher chaque utilisateur dans <p>
        usersList.innerHTML = users
            .map( (user)=>`<p>${user.name}</p>` )
            .join(' ')
    } catch (erreur){

    }
}
fetchUsers()