// Zadatak 1:

var korisnikovBroj = prompt('Unesite broj od 1 do 10:');
var kompijuterBroj = Math.floor((Math.random() * 10) + 1);
console.log(korisnikovBroj);
console.log(kompijuterBroj);

if (korisnikovBroj < 1 || korisnikovBroj > 10 ) {
    console.log('Unesite broj od 1 do 10!');
}
else if ( korisnikovBroj != kompijuterBroj) {
    console.log('izgubili ste!');
} else {
    console.log('Pobedili ste!')
}

// Zadatak 2:

var proizvod = function (a, b, c, d) {
    if (a < 0 && b < 0) {
       suma = ((a + b) * (c + d));
        return suma;
    }
    else if (a < 0 && c < 0) {
       suma = ((a + c) * (b + d));
        return suma;
    }
    else if (a < 0 && d < 0) {
        suma = ((a + d) * (b + c));
        return suma;
    }
    else if (a < 0 && c < 0) {
        suma = ((a + c) * (b + d));
        return suma;
    }
}
console.log('Proizvod je: ' + proizvod(-1,-2,1,2));

// Zadatak 3:

var niz = [16, 23, 3, 78, 9, 14, 17];
var prviElement = niz[0];
var zadnjiElement = niz[niz.length-1];

// Prvi nacin:
var zbirNiza = prviElement + zadnjiElement;
console.log(zbirNiza);

console.log(prviElement);
console.log(zadnjiElement);

// Drugi nacin:
if (!Array.prototype.last) {
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
}
var zbirNizaFunc = niz[0] + niz.last();
console.log(zbirNizaFunc);


// Zadatak 4:

var niz = [16, 23, 3, 78, 9, 14, 17];

var total = 0;
for (i=niz.length-3; i<niz.length; i++) {
    total += niz[i];
}
console.log(total);

// Zadatak 5:

var niz = [16, 23, 3, 78, 9, 14, 17];

niz[0] = 6;
niz[6] = 7;
console.log(niz);

// Zadatak 6:

var nizRevezija = [15, 3, 9, 69, 100];
nizRevezija.reverse();
console.log(nizRevezija);

// Zadatak 7: !!!!

var nizBrojeva = [10, 33, 77, 50, 9, 17, 3, 120]
total = 0;
var funkcijaSaTriParametra = function (nizBrojeva, a, b) {
    for (i=a; i<=b; i++) {
        total += niz[i];
    }
    console.log(total);
}
console.log(funkcijaSaTriParametra(nizBrojeva, 2, 5));

// Domaci 1:

var niz = [3, 6, -2, -5, 7, 3];
var noviNiz = [];

var total = 0;
for (i=0; i<niz.length-1; i++) {
    total = niz[i] + niz[i+1];
    noviNiz.push(total);


}

console.log(noviNiz);
console.log(Math.max.apply(null, noviNiz));
