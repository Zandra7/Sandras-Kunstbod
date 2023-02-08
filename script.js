let bilder = 0
let penger = 0

function lagBilder() {
    bilder ++;
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder + ' $'
    fetch("https://source.unsplash.com/random")
        .then(function(response) {
            return response.url;
        })
        .then(function(imageUrl) {
            document.getElementById("tilfeldigBilde").src = imageUrl;
            tilfeldigRotasjon()
        });

}

function selgBilder() {
    penger += bilder
    document.getElementById('AntallPenger').innerHTML = 'Penger: ' + penger + ' $'
    bilder -= bilder
    document.getElementById('BilderPåLager').innerHTML = 'Bilder på lager: ' + bilder + ' $'
}

function tilfeldigRotasjon() {
    const randomDegree = Math.floor(Math.random() * 180);
    document.getElementById("tilfeldigBilde").style.transform = `rotate(${randomDegree}deg)`;
}