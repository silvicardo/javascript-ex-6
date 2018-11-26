/*Un alert espone 5 numeri casuali. Da li parte un
timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt
alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software
dice quanti e quali dei numeri da indovinare sono
stati individuati*/

//GIOCO
var numeriCasuali = generaCinqueNumeriCasualiDa(1, 30);

alert("Ricorda questi numeri, dovrai digitarli dopo l'ok!\nEccoli! " + numeriCasuali);

setTimeout(function () {
  var numeriIndovinatiDallUtente = [];

  for (var i = 0; i < 5; i++) {
    var numeroUtente = parseInt(prompt('Inserisci un numero che ricordi tra 1 e 30'));
    if (numeriCasuali.length > 0 && numeriCasuali.includes(numeroUtente)) {
      numeriIndovinatiDallUtente.push(numeroUtente);
    }
  }

  if (numeriIndovinatiDallUtente.length > 0) {
    alert('Hai indovinato ' + numeriIndovinatiDallUtente.length + ' numeri: ' + numeriIndovinatiDallUtente);
  } else {
    alert('Riprova! Non ne hai indovinato neanche uno uno!');
  }

}, 30000);

//FUNZIONI
function generaNumeroCasualeTra(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generaCinqueNumeriCasualiDa(min, max) {
  var numeriCasuali = [];
  for (var i = 0; i < 5; i++) {
    numeriCasuali.push(generaNumeroCasualeTra(min, max));
  }

  return numeriCasuali;
}
