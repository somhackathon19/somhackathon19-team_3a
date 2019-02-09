let a;

window.onload = function() {
    var config = {
        apiKey: "AIzaSyBz3ggHudt1W9wZnzzMAQFP7sR4yU5skXI",
        authDomain: "users-88e93.firebaseapp.com",
        databaseURL: "https://users-88e93.firebaseio.com",
        projectId: "users-88e93",
        storageBucket: "users-88e93.appspot.com",
        messagingSenderId: "110252542734"
    };
    firebase.initializeApp(config);

    fetch("")
}

function getData() {
    firebase.database().ref('users').on("value", data => {
        let users = data.val()

        console.log(users.age)
    }, err => console.error(err))
}
