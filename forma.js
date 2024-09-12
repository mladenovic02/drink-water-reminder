// kreiranje forme
var forma = document.createElement("form");
forma.className = 'forma';
forma.addEventListener("submit", function (event) {
    event.preventDefault();
    izracunajCilj();
});



var unosTezine = document.createElement("input");
unosTezine.type = "number";
unosTezine.placeholder = "Težina (u kg)";

var unosVisine = document.createElement("input");
unosVisine.type = "number";
unosVisine.placeholder = "Visina";


var polSelect = document.createElement("select");
var opcije = ["Musko", "Zensko"];
for (var i = 0; i < opcije.length; i++) {
    var opcija = document.createElement("option");
    opcija.value = opcije[i];
    opcija.text = opcije[i];
    polSelect.appendChild(opcija);
}

var dugmeIzracunaj = document.createElement("button");
dugmeIzracunaj.className = "izracunaj";
dugmeIzracunaj.textContent = "Izračunaj";
dugmeIzracunaj.type = "submit";

var dugmePonisti = document.createElement("button");
dugmePonisti.textContent = "Poništi"
dugmePonisti.className = "ponisti";
dugmePonisti.type = "reset";

dugmePonisti.addEventListener("click", function () {
    resetujVodu();
});


forma.appendChild(unosTezine);
forma.appendChild(unosVisine);
forma.appendChild(polSelect);
forma.appendChild(dugmeIzracunaj);
forma.appendChild(dugmePonisti);

containerDiv.appendChild(forma);

