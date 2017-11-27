// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementById('closeBtn');

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to clese modal
function closeModal() {
    modal.style.display = 'none';
}

// Listen for outside click
window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
  
}
// Game:

function submit() {
    var izborKorisnika = document.getElementById('korisnikovIzbor');
    var izborKompijutera = Math.random();
    console.log(izborKompijutera);
    console.log(izborKorisnika.value);


    function poredjenje (izborKorisnika, izborKompijutera) {
        


        if (izborKompijutera <= 0.33) {
            izborKompijutera = 'makaze';
        } 
        else if (0.34 <= izborKompijutera <= 0.66) {
            izborKompijutera = 'kamen';
        }
        else {
            izborKompijutera = 'list';
        }
        console.log(izborKompijutera);

        /* ********************************** */

        if (izborKorisnika == izborKompijutera) {
            return ('Igra je neresena, pokusajte opet.')
        }
        else if (izborKorisnika == 'kamen' && izborKompijutera == 'makaze'){
            return ('Bravo pobedili ste! :)');
        }
        else if (izborKorisnika == 'kamen' &&  izborKompijutera == 'list'){
            return ('Žao nam je, izgubili ste...:(');
        }
        else if (izborKorisnika == 'makaze' && izborKompijutera == 'kamen'){
            return ('Žao nam je, izgubili ste...:(');
        }
        else if (izborKorisnika == 'makaze' && izborKompijutera == 'list'){
            return ('Bravo pobedili ste! :)');
        }
        else if (izborKorisnika == 'list' && izborKompijutera == 'makaze'){
            return ('Žao nam je, izgubili ste...:(');
        }
        else if (izborKorisnika == 'list' && izborKompijutera == 'kamen'){
            return ('Bravo pobedili ste! :)');
        }
        else {
            return ('Molim te unesi makaze, kamen ili list i nemoj da zezas... :p')
        }
    };
    console.log(poredjenje(izborKorisnika, izborKompijutera));
};

