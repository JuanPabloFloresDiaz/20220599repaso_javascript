async function loadComponent(path) {
    const response = await fetch(path);
    const text = await response.text();
    return text;
}


const lista_datos = [
    {
        id: 1,
        nombre_personaje: 'Lionel Messi',
        tipo: 'Futbolista',
    },
    {
        id: 2,
        nombre_personaje: 'Kylian Mbappe',
        tipo: 'Futbolista',
    },
    {
        id: 3,
        nombre_personaje: 'Ciro Immobile',
        tipo: 'Futbolista',
    },
    {
        id: 4,
        nombre_personaje: 'Morat',
        tipo: 'Cantante',
    },
    {
        id: 5,
        nombre_personaje: 'Sebastian Yatra',
        tipo: 'Cantante',
    },
    {
        id: 6,
        nombre_personaje: 'Henry Cavill',
        tipo: 'Actor',
    },
    {
        id: 7,
        nombre_personaje: 'Heung Min Son',
        tipo: 'Futbolista',
    },
    {
        id: 8,
        nombre_personaje: 'Reik',
        tipo: 'Cantante',
    },
    {
        id: 9,
        nombre_personaje: 'Luis Suarez',
        tipo: 'Futbolista',
    },
    {
        id: 10,
        nombre_personaje: 'Cristiano Ronaldo',
        tipo: 'Futbolista',
    }
];

async function cargar_cartas() {
    // Constante del contenedor donde se insertaran las cartas
    const contenedorCartas = document.getElementById('cartas');
    // Mostrar cartas recorriendo la lista quemada
    lista_datos.forEach(row => {
        const cartasHtml = `
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${row.nombre_personaje}</h5>
                    <p class="card-text">${row.tipo}</p>
                </div>
            </div>
        </div>
    `;
        contenedorCartas.innerHTML += cartasHtml;
    });
}

window.onload = async function () {
    cargar_cartas();
};
