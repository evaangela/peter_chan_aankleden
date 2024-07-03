//kledingstukken arrays
let basedPeter = ['peter.png'];
let accessoireRij = ['haar3.png', 'haar1.png', 'haar2.png', 'haar4.png'];
let bovenkantRij = ['top3.png', 'top1.png', 'top2.png', 'top4.png'];
let onderkantRij = ['broek3.png', 'broek1.png', 'broek2.png', 'broek4.png'];

//variabelen
let hoeveel = 0;
let hoeveelClicks = 0;

//functie voor veranderen van kleding poppetje
function veranderKleding(soortId, kledingArray) {
    hoeveel = (hoeveel + 1) % kledingArray.length;
    kledingStuk = kledingArray[hoeveel];
    let imgKleding = document.querySelector(soortId + ' img');
    imgKleding.src = 'afbeeldingen/' + kledingStuk;
}

// knoppen
knopKleding('#accessoireknop', '#accessoire', accessoireRij, veranderKleding);
knopKleding('#bovenkantknop', '#bovenkant', bovenkantRij, veranderKleding);
knopKleding('#onderkantknop', '#onderkant', onderkantRij, veranderKleding);

// functies voor de geluiden bij kliks (bron: https://stackoverflow.com/questions/26305/how-can-i-play-sound-in-java)
function speelSound1() {
    let audio = document.getElementById('meg');
    audio.play();
}

function speelSound2() {
    let audio = document.getElementById('twinkle');
    audio.play();
}

// functie knoppen (met geluid) + DRY-methode
function knopKleding(knopId, soortId, kledingArray, functie) {
    const knop = document.querySelector(knopId);
    knop.addEventListener('click', function () {
        functie(soortId, kledingArray);
        hoeveelClicks++;

        if (hoeveelClicks == 3) {
            console.log(hoeveelClicks);
            speelSound1();
        }

        else {
            console.log(hoeveelClicks);
            speelSound2();
        }
    });
}