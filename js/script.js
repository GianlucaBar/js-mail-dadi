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
    // chiedo all'utente un numero da uno a sei e ne genero un altro random
    var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 6') );
    var numeroComputer = Math.floor(Math.random() * 6) + 1;

    // gioco 
    if (numeroUtente > numeroComputer){
        alert('Hai vinto');
    } else if ( numeroComputer > numeroUtente ){
        alert('Hai Perso');
    } else{
        alert('hai pareggiato');
    }
} else {
}



