let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');
let pildiKonteinerElement = document.getElementById('pildi-konteiner');

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {

    let nimePikkus = nimiElement.value.length;
    pildiKonteinerElement.innerHTML = '';
    return;

    if (nimePikkus <= 6) {
        hinnangElement.innerHTML = "Küll sul on ilus lühike nimi!";
        let pilt = document.createElement('img');
        pilt.src = 'pildid/pilt2.png'
        pilt.style.width = '200px';
        pildiKonteinerElement.appendChild(pilt);
        return;
    }

        hinnangElement.innerHTML = "Küll sul on suurepärane pikk nimi!";
        let pilt = document.createElement('img');
        pilt.src = 'pildid/pilt.png'
        pilt.style.width = '200px';
        pildiKonteinerElement.appendChild(pilt);
        return;
    
}

    // kui nimePikkus väiksem 6
    // siis väljastame teksti "küll sul on ilus lühike nimi"
    // kui Nimepikkus suurem või võrdne 6
    // siis väljastame tekst "küll sul on suurepärane pikk nimi"