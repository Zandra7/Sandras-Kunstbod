
// ------ VARIABLER ------ //

let bilder = 0
let bilderPerKlikk = 1
let penger = 0

let OppgraderUtstyrPris = 40
let AnsettePris = 100


// ------ FUNKSJONER ------ //

// 'Selg bilder knapp' //
function selgBilder() {
    penger += bilder // Legger til antall bilder til penger
    document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppdaterer tekst med id 'AntallPenger'
    bilder -= bilder // Fjerner alle bildene
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdatrerer tekst med id 'BilderPåLager'
}

// 'Lag bilder' knapp
function lagBilder() {
    bilder += bilderPerKlikk; // Legger til antall bilderPerKlikk (variabelen) til bilder
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdater tekst med id 'BilderPåLager'
    fetch("https://source.unsplash.com/random") // Henter tilfeldig bilde fra Unsplash
        .then(function(response) {
            return response.url;
        })
        .then(function(imageUrl) {
            document.getElementById("tilfeldigBilde").src = imageUrl; // Oppdaterer bildet med id 'tilfeldigBilde'
            tilfeldigRotasjon() // Kjører funksjon som roterer bildet med tilfeldig tall
        });
}
// 'Oppgrader utstyr' knapp
function OppgraderUtstyr() {
    if (penger >= OppgraderUtstyrPris) { // Hvis penger er høyere enn OppgraderUtstyrPris (variabelen)
        penger -= OppgraderUtstyrPris // Fjern tallet OppgraderUtstyrPris (variabelen) fra penger (variabelen)
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppgrader teksten med id 'AntallPenger'
        OppgraderUtstyrPris *= 2 // Øker prisen med * 2
        document.getElementById('OppgraderUtstyrPris').innerHTML = 'Pris: ' + OppgraderUtstyrPris + ' $' // Oppdaterer teksten med id 'OppgraderUtstyrPris
        bilderPerKlikk += 1 // Legger til 1 hver gang du klikker
    }
}

function AnsetteFolk() {
    if (penger >= AnsettePris) {
        penger -= AnsettePris
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $'

        setInterval(function() {
            bilder += 1;
            document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder
        }, 1500);
        AnsettePris *= 2
        document.getElementById('AnsettePris').innerHTML = 'Pris: ' + AnsettePris + ' $'
    }
}

function tilfeldigRotasjon() {
    const randomDegree = Math.floor(Math.random() * 180);
    document.getElementById("tilfeldigBilde").style.transform = `rotate(${randomDegree}deg)`;
}