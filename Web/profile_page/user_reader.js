let a;

function get(num) {
    fetch(`../users/user_${num}.json`)
    .then(file => file.json())
    .then(json => {
        console.log(json);
        a = json;
    })
}

get(1);

document.getElementById('username').innerHTML = 'Hello';

