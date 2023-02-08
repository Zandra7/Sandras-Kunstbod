let bilder = 0
let penger = 0

function lagBilder() {
    bilder ++;
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder + ' $'
}

function selgBilder() {
    penger += bilder
    document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $'
    bilder -= bilder
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder + ' $'
}