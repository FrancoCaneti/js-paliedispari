//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('inserisci una parola').trim();
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

