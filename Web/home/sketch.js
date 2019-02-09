
var activeSignInPop,


var signIn_Pop = document.getElementById('pop_signin')

if (activeSignInPop === false){
    
    document.getElementById('sign_up').addEventListener('click', function(){
        let num = 0.1*innerHeight;
        signIn_Pop.style.display = 'block';
        signIn_Pop.style.top `${num}`
        activeSignInPop = true;
    });
    
    document.getElementById('log_in').addEventListener('click', function(){
        window.location.replace('');
    });
}

document.getElementById('').addEventListener('click', function(){
    //Do something here
});
