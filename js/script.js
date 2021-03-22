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

    alert('Ha inizio il gioco');
    // genero due numeri random
    var numeroUtente = Math.floor(Math.random() * 6) + 1;
    var numeroComputer = Math.floor(Math.random() * 6) + 1;

    console.log(numeroComputer);
    console.log(numeroUtente);
    // gioco 
    if (numeroUtente > numeroComputer){
        alert('Hai vinto');
    } else if ( numeroComputer > numeroUtente ){
        alert('Hai Perso');
    } else{
        alert('Hai pareggiato');
    }
} else {
    alert('Non sei iscritto');
}



