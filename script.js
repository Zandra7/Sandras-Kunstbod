
// ------ VARIABLER ------ //

let bilder = 0
let bilderPerKlikk = 1
let penger = 0

let OppgraderUtstyrPris = 40
let AnsettePris = 100
let selgAutomatiskPris = 90


// ------ FUNKSJONER ------ //

// 'Selg bilder knapp' //
function selgBilder() {
    penger += bilder // Legger til antall bilder til penger
    document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppdaterer teksen som har id = 'AntallPenger'
    bilder -= bilder // Fjerner alle bildene
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdatrerer teksten som har id = 'BilderPåLager'
}

// 'Lag bilder' knapp
function lagBilder() {
    bilder += bilderPerKlikk; // Legger til antall bilderPerKlikk (variabelen) til bilder
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdater teksten som har id = 'BilderPåLager'
    document.getElementById('tilfeldigBilde').style.display = "block" // Viser bildet
    fetch("https://source.unsplash.com/random") // Henter tilfeldig bilde fra Unsplash
        .then(function(response) {
            return response.url;
        })
        .then(function(imageUrl) {
            document.getElementById("tilfeldigBilde").src = imageUrl; // Oppdaterer bildet som har id = 'tilfeldigBilde'
            tilfeldigRotasjon() // Kjører funksjon som roterer bildet med tilfeldig tall
        });
}

// Snur bildet med et tilfeldig tall
function tilfeldigRotasjon() { 
    const randomDegree = Math.floor(Math.random() * 180); // Velger et tilfeldig tall
    document.getElementById("tilfeldigBilde").style.transform = `rotate(${randomDegree}deg)`; // Oppdaterer rotasjonen til bildet
}

// 'Oppgrader utstyr' knapp
function OppgraderUtstyr() {
    if (penger >= OppgraderUtstyrPris) { // Hvis penger er høyere enn OppgraderUtstyrPris (variabelen)
        penger -= OppgraderUtstyrPris // Fjern tallet OppgraderUtstyrPris (variabelen) fra penger (variabelen)
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppgrader teksten som har id = 'AntallPenger'
        OppgraderUtstyrPris *= 2 // Øker prisen på knappen med *2
        document.getElementById('OppgraderUtstyrPris').innerHTML = 'Pris: ' + OppgraderUtstyrPris + ' $' // Oppdaterer teksten som har id = 'OppgraderUtstyrPris
        bilderPerKlikk += 1 // Legger til 1 hver gang du klikker
    }
}

// 'Ansette folk' knapp
function AnsetteFolk() {
    if (penger >= AnsettePris) { // Hvis penger er høyere enn AnsettePris (variabelen)
        penger -= AnsettePris // Fjern tallet AnsettePris (variabelen) fra penger
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppdater teksten som har id = 'AntallPenger'
        setInterval(function() { // Setter tid på 1,5 sekunder
            bilder += 1; // Legger til 1 til bilder hvert 1,5 sekunder
            document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdaterer teksten som har id = 'BilderPåLager'
        }, 1500); //1500 = 1,5 sek
        AnsettePris *= 2 // Øker prisen på knappen med *2
        document.getElementById('AnsettePris').innerHTML = 'Pris: ' + AnsettePris + ' $' // Opdaterer teksten som har id = 'AnsettePris'
    }
}

// 'Selg automatisk' knapp
function selgAutomatisk() {
    if (penger >= selgAutomatiskPris) { // Hvis penger er høyere enn selgAutomatiskPris (variabelen)
        penger -= selgAutomatiskPris // Fjern tallet selgAutomatiskPris (variabelen) fra penger
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppdater teksten som har id = 'AntallPenger'
        setInterval(function() { // Setter tid på 1 sekund
            if (bilder > 0) { // Hvis bilder er høyere enn 0
                penger += 1 // Øker penge med 1
                bilder -= 1 // Trekker ifra 1 fra bilder
                document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $' // Oppdater teksten som har id = 'AntallPenger'
                document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder // Oppdaterer teksten som har id = 'BilderPåLager'
            }
        }, 1000) // 1000 = 1 sek
    }
}