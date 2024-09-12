
function napraviCasu(className, velicina, textContent) {
    let casa = document.createElement('div');
    casa.className = className;
    casa.textContent = textContent;
    prikaziSavet();
    if (velicina > 0) {
        casa.addEventListener('click', function () {
            poslednjaUnetaKolicinaNiz.push(velicina);
            trenutnaKolicina += velicina;
            azurirajCasu();
            azurirajPoslednjiUnosNaEkranu()
            prikaziSavet();
        });
    }
    return casa;
}
document.addEventListener('DOMContentLoaded', function () {
    
    let  caseDiv= document.createElement("div");
    caseDiv.className = 'caseDiv';
   containerDiv.appendChild(caseDiv);

    let malaCasa = napraviCasu('malaCasa', 250, '250ml');
    let srednjaCasa = napraviCasu('srednjaCasa', 350, '350ml');
    let casa500ml = napraviCasu('casa500ml', 500, '500ml');

    caseDiv.appendChild(malaCasa);
    caseDiv.appendChild(srednjaCasa);
    caseDiv.appendChild(casa500ml);

    let velikaCasa = document.createElement('div');
    velikaCasa.className = 'velikaCasa';
   containerDiv.appendChild(velikaCasa);

    let popunaCase = document.createElement('div');
    popunaCase.id = 'popunaCase';
    popunaCase.className = 'popunaCase';
    velikaCasa.appendChild(popunaCase);
    
    let istorijaElement = document.createElement('p');
istorijaElement.textContent = "Istorija:";
containerDiv.appendChild(istorijaElement);
});

