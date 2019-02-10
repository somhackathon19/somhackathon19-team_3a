

var User1 = {
    "name": "Victor",
    "surname": "Chuan Lleonart",
    "age": "17",
    "number": "686 414 216",
    "email": "chuancho22@gmail.com",
    "password": "alvaricoque",
    "coins": "25",
}

console.log(User1);
window.onload = function(){
    document.getElementById('firstName').textContent = User1.name;
    document.getElementById('lastName').textContent = User1.surname;
    document.getElementById('age').textContent = User1.age;
    document.getElementById('tlfNumber').textContent = User1.number;
}