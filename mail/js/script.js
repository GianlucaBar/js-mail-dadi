// creo whitelist email
var whitelist = [ "gigino@gmail.com", "antonino@gmail.com", "antonella@libero.it", "pippo@aruba.it", "albertovic@yahoo.it", "a" ] ;

// chiedo all'utente la sua email
var emailUtente = prompt("inserisci il tuo indirizzo email");

// verifico che l'email utente sia whitelisted, selo e' do accesso al gioco
var verified = false;

for ( var i=0; i < whitelist.length; i++){
    if( emailUtente == whitelist[i] ){
        verified = true;
    }
}

if ( verified == true ){
    document.getElementById('verifica').innerHTML = "La tua email e' verificata";
} else{
    document.getElementById('verifica').innerHTML = "La tua email NON e' verificata";
}






