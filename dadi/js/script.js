alert('Ha inizio il gioco');

var numeroUtente = Math.floor(Math.random() * 6) + 1;

document.getElementById('userPlay').innerHTML = "Il tuo dado ha segnato " + numeroUtente;

var numeroComputer = Math.floor(Math.random() * 6) + 1;

document.getElementById('computerPlay').innerHTML = "Il dado dell'avversario ha segnato " + numeroComputer;

// console.log(numeroComputer);
// console.log(numeroUtente);

// gioco 
if (numeroUtente > numeroComputer){
    document.getElementById('result').innerHTML = "Hai vinto!";
} else if ( numeroComputer > numeroUtente ){
    document.getElementById('result').innerHTML = "Hai perso :(";
} else{
    document.getElementById('result').innerHTML = "Pareggio!";
}






