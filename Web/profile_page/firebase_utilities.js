let a = [];
var config = {
    apiKey: "AIzaSyBz3ggHudt1W9wZnzzMAQFP7sR4yU5skXI",
    authDomain: "users-88e93.firebaseapp.com",
    databaseURL: "https://users-88e93.firebaseio.com",
    projectId: "users-88e93",
    storageBucket: "users-88e93.appspot.com",
    messagingSenderId: "110252542734"
};
firebase.initializeApp(config);


function retrieveData() {
    firebase.database().ref('users-88e93').on("value", data => {
      let users = data.val()
  
      a.push(users.age)
      a.push(users.email)
      a.push(users.interessos)
      a.push(users.perfil)
    }, err => console.error(err))
  
    console.warn("Data successfully retrieved from Firebase App!")
  }
