var a = 3;
var b = 4;

console.log(a, b);

var a = 4;
var b = 3;

console.log(a, b);

// ----------------------------------

// Zadatak 2:

// var brGodina = prompt('Upisite broj godina?');

// if (brGodina <= 7) {
//     alert('Pristup je zabranjen');
// } else  if (8 <= brGodina && brGodina <= 16 ) {
//     alert ('Pristup na sajt je limitiran!');
// } else {
//     alert ('Mozete uci na sajt, hvala!');
// }

// ------------------------------------

// Zadatak 3:

// var boja1 = prompt('Odaberite dve boje. Ponudjena mogucnost: crvena, zuta i plava. Prva boja:');
// var boja2 = prompt('Druga boja');

// if (boja1 == 'crvena' && boja2 == 'zuta') {
//     alert('Dobili ste narandjastu boju!');
// } else if (boja1 == 'crvena' && boja2 == 'plava') {
//     alert('Dobili ste ljubicatu boju!')
// } else if (boja1 == 'plava' && boja2 == 'zuta') {
//     alert('Dobili ste zelenu boju!')    
// } else {
//     alert('Uneli ste pogresno, pokusajte ponovo!')
// } 

// ------------------------------------

// Zadatak 4:

// function myFunction() {

//     console.log('test');
//     var omiljeniTag = document.getElementById('tag').value;
//     var unesenoIme = document.getElementById('ime').value;

//     console.log(ime.value);

//     if ( omiljeniTag == 'html' && unesenoIme == ime.value) {
//         alert ('<html>' + ime.value + '</html>');
//         console.log ('<html>' + ime.value + '</html>')
//     } else if ( omiljeniTag == 'span' && unesenoIme == ime.value) {
//         alert ('<span>' + ime.value + '</span>');
//     } else if ( omiljeniTag == 'body' && unesenoIme == ime.value) {
//         alert ('<body>' + ime.value + '</body>');
//     } else if ( omiljeniTag == 'h1' && unesenoIme == ime.value) {
//         alert ('<h1>' + ime.value + '</h1>');
//     } else {
//         alert('Odabrali ste nepostojeci tag! probajte opet...');
//     }
// }

// ------------------------------------

// Zadatak 5:

// var korisnikovBroj = prompt('Unesite broj:');

// if (korisnikovBroj % 2 == 0 && korisnikovBroj > 25) {
//     alert('Uneli ste odgovarajuci broj, hvala!');
// } else {
//     alert('Uneli ste pogresan broj, pokusajte ponovo!');
// }

// --------------------------------------

// Zadatak 6:

// var mesecRodjenja = prompt('Unesite svoj mesec rodjeja:');

// if (mesecRodjenja == 'januar' || mesecRodjenja == '1') {
//     alert ('Februar');
// } else if (mesecRodjenja == 'februar' || mesecRodjenja == '2') {
//     alert ('Mart');
// } else if (mesecRodjenja == 'mart' || mesecRodjenja == '3') {
//     alert ('April');
// } else if (mesecRodjenja == 'april' || mesecRodjenja == '4') {
//     alert ('Maj');
// } else if (mesecRodjenja == 'maj' || mesecRodjenja == '5') {
//     alert ('Jun');
// } else if (mesecRodjenja == 'jun' || mesecRodjenja == '6') {
//     alert ('Jul');
// } else if (mesecRodjenja == 'jul' || mesecRodjenja == '7') {
//     alert ('Avgust');
// } else if (mesecRodjenja == 'avgust' || mesecRodjenja == '8') {
//     alert ('Septembar');
// } else if (mesecRodjenja == 'septembar' || mesecRodjenja == '9') {
//     alert ('Oktobar');
// } else if (mesecRodjenja == 'oktobar' || mesecRodjenja == '10') {
//     alert ('Novembar');
// } else if (mesecRodjenja == 'novembar' || mesecRodjenja == '11') {
//     alert ('Decembar');
// } else if (mesecRodjenja == 'decembar' || mesecRodjenja == '12') {
//     alert ('Januar');
// } else {
//     alirt ('Niste upisali mesec, pokusajte ponovo...')
// }

// -----------------------------------------

// Zadatak 7:

var korisnikovBroj = prompt('Unesite broj:');

if ((korisnikovBroj % 3 == 0 && korisnikovBroj % 5 == 0) ) {
    alert ('fizzBuzz');
} else if (korisnikovBroj % 5 == 0) {
    alert('buzz');
} else if (korisnikovBroj % 3 == 0) {
    alert('fizz');
} else {
    alert('Niste uneli broj...Pokusajte ponovo...');
}