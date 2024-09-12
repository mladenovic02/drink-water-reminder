let trenutnaKolicina = 0;
let cilj = 0;
let poslednjaUnetaKolicinaNiz = [];
let vremePoslednjegUnosa = null; //praćenje vremena poslednjeg unosa
let ciljPostignut = false;
const saveti = [
    "Popijte čašu vode pre svakog obroka.",
    "Pijenje hladne vode može ubrzati metabolizam.",
    "Održavajte hidriranost tokom fizičkih aktivnosti.",
    "Popijte vodu na svakih sat vremena.",
    "Nemojte da pijete hladnu vodu odmah nakon toplog napitka",
    "Nemojte da pijete vodu odmah nakon obroka"
];

//brise unetu kolicinu vode

const dugmeObrisiPoslednje = document.createElement("button");
dugmeObrisiPoslednje.className = 'obrisiPoslednje';
dugmeObrisiPoslednje.textContent = "Obriši poslednju količinu vode";
dugmeObrisiPoslednje.onclick = obrisiPoslednjuKolicinuVode;
containerDiv.appendChild(dugmeObrisiPoslednje);



function obrisiPoslednjuKolicinuVode() {
    if (poslednjaUnetaKolicinaNiz.length > 0) {
        let poslednja = poslednjaUnetaKolicinaNiz.pop();
        trenutnaKolicina -= poslednja;
        azurirajCasu();

        // brisanje poslednjeg paragrafa o unosu vode
        let poslednjiParagraf = document.querySelector('.poslednjiUnosParagraf');
        if (poslednjiParagraf) {
            poslednjiParagraf.remove();
        }
    } else {
        alert("Nema više unesenih količina vode za brisanje.");
    }
}


//racuna kolicinu vode koju treba da popijemo na osnovu tezine i pola
let ciljElement = document.createElement('p');
ciljElement.className = 'cilj';
containerDiv.appendChild(ciljElement);

function izracunajCilj() {
    let tezina = parseFloat(unosTezine.value);
    let pol = polSelect.value;
    if (pol == opcije[0]) {
        cilj = (tezina * 0.04) * 1000;
    } else if (pol == opcije[1]) {
        cilj = (tezina * 0.03) * 1000;
    }
    ciljElement.textContent = "Cilj je " + cilj + "ml";
}



//azurira popunu velike case
let trenutniElement = document.createElement('p');
containerDiv.appendChild(trenutniElement);

function azurirajCasu() {
    let sada = new Date();
    vremePoslednjegUnosa = sada.getHours() + ":" + sada.getMinutes();
    let procenatNapunjeno = (trenutnaKolicina / cilj) * 100;
    popunaCase.style.height = procenatNapunjeno + '%';
    trenutniElement.textContent = 'Popijeno: ' + trenutnaKolicina + 'ml';

    if (trenutnaKolicina >= cilj) {
        if (!ciljPostignut) {
            ciljPostignut = true;
            alert("Cilj je postignut!");
        }
    } else {
        ciljPostignut = false;
    }
}


function azurirajPoslednjiUnosNaEkranu() {
    if (vremePoslednjegUnosa != null) {

        let paragraf = document.createElement('p');
        paragraf.textContent = "Poslednji unos vode: " + vremePoslednjegUnosa;
        paragraf.className = 'poslednjiUnosParagraf';//klasa da bi moglo da se brise

        containerDiv.appendChild(paragraf);
    }
}
function resetujVodu() {
    trenutnaKolicina = 0;
    poslednjaUnetaKolicinaNiz = [];
    trenutniElement.textContent = 'Popijeno: 0ml';
    popunaCase.style.height = '0%';
    ciljElement.textContent = "Cilj je 0 ml";
    const prethodniParagrafi = document.querySelectorAll('.poslednjiUnosParagraf');
    prethodniParagrafi.forEach(paragraf => paragraf.remove());

}

function prikaziSavet() {
    // uklanjanje prethodnih saveta pre dodavanja novog
    const prethodniSaveti = document.querySelectorAll('.savetpar');
    prethodniSaveti.forEach(savet => savet.remove());

    // biranje nasumicnog saveta
    const randomSavet = saveti[Math.floor(Math.random() * saveti.length)];

    const SavetParagraf = document.createElement("p");
    SavetParagraf.textContent = randomSavet;
    SavetParagraf.className = 'savetpar';
    // Postavljanje paragrafa u podsetnikDiv
    podsetnikDiv.appendChild(SavetParagraf);
}







