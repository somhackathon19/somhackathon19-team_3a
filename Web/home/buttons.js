var myStorage = window.localStorage;

var lacasito = 'LACASITOOO';

var activeSignInPop = false;
//let sign_but = document.getElementById('sign_up')


// myStorage = JSON FILES


var signIn_Pop = document.getElementById('pop_signin');

if (activeSignInPop === false){
    
    document.getElementById('sign_up').addEventListener('click', function(){
        //let num = 0.1*innerHeight;
        signIn_Pop.style.display = 'block';
        signIn_Pop.style.top = `${(innerHeight-0.8*innerHeight)/4}px`;
        signIn_Pop.style.left = `${(innerWidth-0.45*innerWidth)/2}px`
        activeSignInPop = true;
        //console.log(num)

        myStorage.setItem('Luser', 'Miquel Trafí');
    });
    
    document.getElementById('log_in').addEventListener('click', function(){
        window.location.replace('');
        myStorage.clear();
    });
}

if (activeSignInPop) {
document.getElementById('x').addEventListener('click', function(){
    signIn_Pop.style.display = "none"
});
}

/*document.getElementById('').addEventListener('click', function(){
    //Do something here
});
*/