const getUser = async () => {
    let request = await fetch('https://jsonplaceholder.typicode.com/users ')
    let users = request.json()
    console.log('USERS', users)
}

window.onload = async () => {
    await getUser()
}