userCard = (users) => {
    return `
                <div class="col-6-md">
                    <span>${users[0].name}</span>
                    <span>${users[0].username}</span>
                    <span>${users[0].email}</span>
                </div>
            `
}

window.onload = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users", 
            {
                method: "GET"
            }
        )

        var users = await response.json()
        let div = document.querySelector("#usersBox")
        users.forEach(user => {
            div.innerHTML += `
            <div class="card m-4" style="width: 18rem;">
                <div class="card-header">
                    ${user.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${user.username}</li>
                    <li class="list-group-item">${user.email}</li>
                </ul>
            </div>
        `
        });
    } catch(err) {
        console.log(err)
    }
}

