//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

/*var parola = prompt('inserisci una parola').trim();
console.log(parola);

var parolaInvertita = reverseChars(parola);
console.log(parolaInvertita);



function reverseChars(word) {
   var reverse = '';

    for (var i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i];
    }
    return reverse;  
   
}
if (parola = reverseChars(parola)) {
    console.log('La parola inserita è palindroma');
} else {
    console.log( 'La parola inserita non è palindroma');

}

*/


/*L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


var pariDispari = prompt('Scelta del giocatore: Pari o Dispari');
console.log('La scelta del giocatore è: ',pariDispari).toLowerCase().trim();

var numeroGiocatore = prompt('inserisci un numero da 1 a 5');
console.log('il numero scelto dal giocatore è: ',numeroGiocatore);

var numC = (Math.floor(Math.random()*5+1));
console.log('numero del computer:',numC);

var somma;

 function totale(numeroGiocatore,numC) {
    var somma = numeroGiocatore + numC;
    return somma;
 }
  console.log(somma)  