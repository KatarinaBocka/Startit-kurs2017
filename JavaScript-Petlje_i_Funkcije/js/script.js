// Zadatak 1:
i = 0;

for (i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log('Broj ' + i + ' je paran');
    } else {
        console.log('Broj ' + i + ' je neparan');
    }
}

// -------------------------------------------------
// Zadatak 2:

var n = 5;
var sum = 0;

for (i = 0; i <= n; i++) {
   sum += i;
}
console.log('Suma prvih n brojeva je: ' + sum);

// -------------------------------------------------
// Zadatak 3:

var target = 5;
var factorial = 1;
for (var i = 1; i <= target; i++) {
    factorial *= i;
}

console.log('Suma prvih n brojeva je: ' + factorial);

// -------------------------------------------------
// Zadatak 4:

var stanjeNaRacunu = 325;
var cenaProizvoda = 14;

var brKupljenihKomada = stanjeNaRacunu / cenaProizvoda;

console.log(Math.round(brKupljenihKomada) + ' komada');

/******************************************************
******************* FUNKCIJE **************************
******************************************************/

 // Zadatak 1:

 var sumaBrojeva = function (n) {
    var suma = 0;
    for ( var i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
 }
 console.log('Suma prvih 5 prirodnih brojeva je: ' + sumaBrojeva(5));

// -------------------------------------------------
// Zadatak 2: 

var faktorial = function (zadatiBroj) {
    init = 1;
    for (var i = 1; i <= zadatiBroj; i++) {
        init *= i;
    }
    return init;
}
console.log('Faktorijal zadatog broja je: ' + faktorial(5));

// -------------------------------------------------
// Zadatak 3: 


var kalkulatorProizvoda = function (stanjeRacun, proizvodCena) {
    var brojKupljenihKomada = stanjeRacun / proizvodCena;
    return brojKupljenihKomada;
}
console.log('Broj kupljenih komada je: ' + Math.round(kalkulatorProizvoda(325, 14)));

// -------------------------------------------------
// Zadatak 4: 

var N;
var K;
var suma =0;

var zbirZadatihBrojeva = function(N, K) {
    if (N < K) {
        for (var i = N + 1; i < K; i++) {
            suma += i;
        }
    }
    return suma;
}
console.log(zbirZadatihBrojeva(2,6));

// U ovom zadatku nisam razumela da li treba i N i K da udju u taj zbir ili samo brojevi izmedju...

