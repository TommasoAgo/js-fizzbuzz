// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi  “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numero = 0

// Stampare numeri da 1 a 100
for ( var i = 1; i < 101; i++) {
    var numero = i;
    // Al posto dei multipli sia di 3 che di 5, stampare "FizzBuzz"
    if (numero % 3 == 0 && numero % 5 ==0) {
        numero = "FizzBuzz";
        // Al posto dei multipli di 3, stampare "Fizz"
    } else if (numero % 3 == 0) {
        numero = "Fizz";
        // Al posto dei multipli di 5, stampare "Buzz"
    } else if (numero % 5 == 0) {
        numero = "Buzz";
    }
    console.log(numero);
}





