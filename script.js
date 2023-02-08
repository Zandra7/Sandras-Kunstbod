let bilder = 0
let bilderPerKlikk = 1
let penger = 0

let OppgraderUtstyrPris = 40
let AnsettePris = 100

function selgBilder() {
    penger += bilder
    document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $'
    bilder -= bilder
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder
}

function lagBilder() {
    bilder += bilderPerKlikk;
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder
    fetch("https://source.unsplash.com/random")
        .then(function(response) {
            return response.url;
        })
        .then(function(imageUrl) {
            document.getElementById("tilfeldigBilde").src = imageUrl;
            tilfeldigRotasjon()
        });
}

function OppgraderUtstyr() {
    if (penger >= OppgraderUtstyrPris) {
        penger -= OppgraderUtstyrPris
        document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $'
        OppgraderUtstyrPris *= 2
        document.getElementById('OppgraderUtstyrPris').innerHTML = 'Pris: ' + OppgraderUtstyrPris + ' $'
        bilderPerKlikk += 1
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