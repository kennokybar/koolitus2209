let uudised = [
    {
        pildiUrl: 'pildid/cat.png',
        pealKiri: 'POMMUUDIS!',
        tekst: 'Lorem Ipsum',
        viideUudisele: 'uudis1.html ',
    },

    {
        pildiUrl: 'pildid/funny.png',
        pealKiri: 'POMMUUDIS 1!',
        tekst: 'Lorem Ipsum',
        viideUudisele: 'uudis2.html ',
    },

    {
        pildiUrl: 'pildid/pilt.png',
        pealKiri: 'POMMUUDIS 2!',
        tekst: 'Lorem Ipsum',
        viideUudisele: 'uudis3.html ',
    },
];

let uudisedElement = document.querySelector('.uudised');
for (let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];
    let pildiElement = document.createElement('img');
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);
    let pealKiriElement = document.createElement('h1');
    pealKiriElement.src = uudised[i].pealKiri;
    uudisedElement.appendChild(pealKiriElement);
    uudisedElement.appendChild(uudisElement);
}