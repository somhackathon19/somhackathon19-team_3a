

var User1 = {
    "name": "Carlos",
    "surname": "Chuan Lleonart",
    "age": "17",
    "number": "686 414 216",
    "email": "chuancho22@gmail.com",
    "password": "alvaricoque"
}
console.log(User1);
window.onload = function(){
    console.log(User1);
    document.getElementById('firstName').textContent = User1.name;
    document.getElementById('lastName').textContent = User1.surname;
    document.getElementById('age').textContent = User1.age;
    document.getElementById('tlfNumber').textContent = User1.number;
}

function hola() {
    console.log(User1);
    document.getElementById('firstName').textContent = User1.name;
    document.getElementById('lastName').textContent = User1.surname;
    document.getElementById('age').textContent = User1.age;
    document.getElementById('tlfNumber').textContent = User1.number;
}