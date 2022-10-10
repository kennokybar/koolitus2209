let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
    let nimePikkus = nimiElement.value.length;
    console.log(nimePikkus) 

    // kui nimePikkus väiksem 6
    // siis väljastame teksti "küll sul on ilus lühike nimi"
    // kui Nimepikkus suurem või võrdne 6
    // siis väljastame tekst "küll sul on suurepärane pikk nim"
}