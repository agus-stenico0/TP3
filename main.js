const contenedorCards = document.getElementById("contenedor_cards");
let cardsHTML = "";

for (let serie in series){

    cardsHTML += crearCards(serie);
}

contenedorCards.innerHTML = cardsHTML;

function crearCards(serie){
    let card = document.createElement('div');
    card.classList.add('card');

    let id = document.createElement('div');
    let nombre = document.createElement('p');
    let imagen = document.createElement('img');

    id.innerText = series[serie].id;
    nombre.innerText = series[serie].nombre;
    imagen.src = series[serie].imagen;

    card.append(id, nombre, imagen);

    return card.outerHTML;
}