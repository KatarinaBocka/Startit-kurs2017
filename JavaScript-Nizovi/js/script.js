// Zadatak 1:

var niz = [23, 43, -8, 77, 0, 23, 15];
max = niz[0];
// i=1
for ( i = 0; i < niz.length; i++ ) {
  if (max < niz[i]) {
    max = niz[i]
  }
}
console.log('Najveci broj niza je: ' + max);

// Zadatak 2:

var prviNiz = [7, 15, 45, 78, 20, 9];
var drugiNiz = [14, 30, 90, 156, 40, 18];
// Concat Metoda
var treciNiz = prviNiz.concat(drugiNiz);
console.log(treciNiz);

// Push Metoda
prviNiz.push.apply(prviNiz, drugiNiz);
console.log(prviNiz);

// Zadatak 3:

var niz = [16, 23, 3, 78, 9, 14, 17];
var parniNiz = [];
var neparniNiz = [];

i = 0;
for ( i=0; i < niz.length; i++ ) {
    if ( niz[i] % 2 == 0 ) {
        parniNiz.push(niz[i]);
    }
    else {
        neparniNiz.push(niz[i]);
    }
    // i++;
}

console.log('Parni: ' + parniNiz);
console.log('Neparni: ' + neparniNiz);

/* ------------------------------------------
---------------- DOMACI ---------------------
------------------------------------------ */

// Domaci 1:

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30]
var manjeCene = [];
var veceCene = [];

for ( i=0; i<cene.length; i++ ){
    if (cene[i] <= 50) {
        cene[i] =cene[i] + (cene[i] * 0.18);
        manjeCene.push(cene[i].toFixed(2)); 
    }
    else {
        cene[i] = cene[i] + (cene[i] * 0.08);
        veceCene.push(cene[i].toFixed(2));
    }
} 
console.log('Cene manje od 50: ' + manjeCene);
console.log ('Cene vece od 50: ' + veceCene);

var sumaPrvogNiza = manjeCene.reduce(function(a, b) {
    return a + b;
}, 0);
console.log(sumaPrvogNiza);

var total = 0;
for (var i=0; i<manjeCene.length; i++) {
    total += manjeCene[i];
}

// Domaci 2:

function palindrome(str) {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}
// palindrome('eye');
console.log(palindrome('anavolimilovana'));