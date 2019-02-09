function read() {
    fetch('../users/user_1.json')
        .then(file => file.json())
        .then(json => {return json})
}