const containerDiv = document.createElement("div"); //Svi elementi stranice se ubacuju u kontejner
containerDiv.className = "containerDiv";
containerDiv.id = "container";
document.body.appendChild(containerDiv);

let interval;
// Funkcija za pokretanje podsetnika
function pokreniPodsetnik() {
    alert("Pokretanje podsetnika");
    interval = setInterval(function () {
        alert("Popijte vodu");
    }, 3600000); // milisekunde 
}

// Funkcija za zaustavljanje podsetnika
function zaustaviPodsetnik() {
    clearInterval(interval);
    alert("Zaustavljanje podsetnika");
}

// Kreiranje div-a za podsetnik
const podsetnikDiv = document.createElement("div");
podsetnikDiv.className = "podsetnik";

// Kreiranje dugmeta za pokretanje podsetnika
const dugmePokreni = document.createElement("button");
dugmePokreni.className='pokreni';
dugmePokreni.textContent = "Pokreni podsetnik";
dugmePokreni.onclick = pokreniPodsetnik;


// Kreiranje dugmeta za zaustavljanje podsetnika
const dugmeZaustavi = document.createElement("button");
dugmeZaustavi.className='zaustavi';
dugmeZaustavi.textContent = "Zaustavi podsetnik";
dugmeZaustavi.onclick = zaustaviPodsetnik;

// Postavljanje  u podsetnikDiv
podsetnikDiv.appendChild(dugmePokreni);
podsetnikDiv.appendChild(dugmeZaustavi);

containerDiv.appendChild(podsetnikDiv);


const slika = document.createElement("img");

slika.src = "waterdrop.png"; 
slika.className="slika";
podsetnikDiv.appendChild(slika);

