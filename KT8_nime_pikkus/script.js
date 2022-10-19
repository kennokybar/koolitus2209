let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');
let piltElement = document.getElementById('pilt1')
let pilt2Element = document.getElementById('pilt2')

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
    pilt.style.display = 'block'; 
    let nimePikkus = nimiElement.value.length;
    if (!nimePikkus) {
        hinnangElement.innerHTML = '';
        piltElement.style.display = 'none';
        pilt2Element.style.display = 'none';
        return;
    }
    if (nimePikkus <= 6) {
        hinnangElement.innerHTML = "Küll sul on ilus lühike nimi!";
        piltElement.style.display = 'block';
        pilt2Element.style.display = 'none';
        return;
    }

        hinnangElement.innerHTML = "Küll sul on suurepärane pikk nimi!";
        piltElement.style.display = 'none';
        pilt2Element.style.display = 'block';
        return;
}

var yourImg = document.getElementById('pilt1');
if(yourImg && yourImg.style) {
    yourImg.style.height = '400px';
    yourImg.style.width = '400px';
}

var yourImg = document.getElementById('pilt2');
if(yourImg && yourImg.style) {
    yourImg.style.height = '400px';
    yourImg.style.width = '400px';
}

    // kui nimePikkus väiksem 6
    // siis väljastame teksti "küll sul on ilus lühike nimi"
    // kui Nimepikkus suurem või võrdne 6
    // siis väljastame tekst "küll sul on suurepärane pikk nimi"