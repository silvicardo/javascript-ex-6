/*Il software deve chiedere all’utente il suo nome e il
sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il
colore del nome deve essere azzurro o rosa a
seconda del sesso inserito*/

var nomeCompletoUtente = prompt('Digita il tuo nome completo.');
var sessoUtente = (prompt('Digita il tuo sesso(maschile o femminile).')).toLowerCase();
var nomeCompletoHtml = document.getElementById('nomeCompleto');
nomeCompletoHtml.innerHTML = "Ciao " + nomeCompletoUtente;

nomeCompletoHtml.style.color = (sessoUtente == 'maschile') ? 'cyan' : 'pink';
