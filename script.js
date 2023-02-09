
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
        OppgraderUtstyrPris *= 2 // Øker prisen på knappen med *2
        document.getElementById('OppgraderUtstyrPris').innerHTML = 'Pris: ' + OppgraderUtstyrPris + ' $' // Oppdaterer teksten med id 'OppgraderUtstyrPris
        bilderPerKlikk += 1 // Legger til 1 hver gang du klikker
    }
}

// 'Ansette folk' knapp
function AnsetteFolk() {
    if (penger >= AnsettePris) { // Hvis penger er høyere enn AnsettePris (variabelen)
        penger -= AnsettePris // Fjern tallet AnsettePris (variabelen) fra penger
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppdater teksten med id 'AntallPenger'
        setInterval(function() { // Setter tid på 1,5 sekunder
            bilder += 1; // Legger til 1 til bilder hvert 1,5 sekunder
            document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdaterer teksen med id 'BilderPåLager'
        }, 1500); //1500 = 1,5 sek
        AnsettePris *= 2 // Øker prisen på knappen med *2
        document.getElementById('AnsettePris').innerHTML = 'Pris: ' + AnsettePris + ' $' // Opdaterer teksten med id 'AnsettePris'
    }
}

// Snur bildet med et tilfeldig tall
function tilfeldigRotasjon() { 
    const randomDegree = Math.floor(Math.random() * 180); // Velger et tilfeldig tall
    document.getElementById("tilfeldigBilde").style.transform = `rotate(${randomDegree}deg)`; // Oppdaterer rotasjonen til bildet
}