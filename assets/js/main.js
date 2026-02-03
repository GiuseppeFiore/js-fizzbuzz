// Consegna: Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” 
// al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//  Prima di partire a scrivere codice poniamoci qualche 
//  domanda: Come faccio a sapere se un numero è divisibile per? 
//  Abbiamo visto qualcosa di particolare che possiamo usare? 
//  Consigli del giorno: scriviamo sempre prima dei commenti in italiano 
//  per capire cosa vogliamo fare proviamo ad immaginare le operazioni che 
//  vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// Scriviamo un programma che stampi i numeri da 1 a 100
// Uso il ciclo for spiegato oggi per effettuare questa operazione
// Creo un ciclo "for" inserendo una variabile "i" all'interno che parte da 1.
// Il ciclo continua finchè "i" è minore o uguale a 100. Uguale per permettere la visualizzazione anche del numero 100
// Con "i++" incremento il valore di "i" ad ogni giro di 1 
for (let i = 1; i <= 100; i++) {

// Creo una condizione "if" con un operatore modulo "%" utilizzato per calcolare il resto di una divisione e per capire
// Se il numero è multiplo sia di 3 che di 5 deve dare resto zero
// Uso un operatore logico "&" che restituisce il valore "true" se entrambi gli operatori sono veri
// Altrimenti restituisce "false"
// Se la condizione è vera cioè divisibile per entrambi sia 3 che 5 stamperà in console "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

// Se il numero è solo multiplo di 3 deve stampare in console "Fizz"
    } else if (i % 3 === 0) {
    console.log("Fizz");
    }

// Se il numero è solo multiplo di 5 deve stampare in console "buzz"
    else if (i % 5 === 0) {
    console.log("Buzz")
    }

// Altrimenti stampo il numero normale se non è ne divisibile per 3 che per 5
    else {
    console.log(i);
    }  
}
