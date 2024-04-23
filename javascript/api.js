async function obtenerInfoPaises() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al obtener la información de países:', error);
        return [];
    }
}

async function cargarCartas() {
    const infoPaises = await obtenerInfoPaises();
    const contenedorCartas = document.getElementById('cartas');

    infoPaises.slice(0, 240).forEach(pais => {
        const nombre = pais.name.common;
        const capital = pais.capital ? pais.capital[0] : 'No disponible';
        const poblacion = pais.population ? pais.population.toLocaleString() : 'No disponible';
        const codigoPais = pais.cca2.toLowerCase(); // Obtenemos el código de país en formato de dos letras
        const bandera = `https://flagcdn.com/64x48/${codigoPais}.png`; // Construimos la URL de la bandera

        const cartaHtml = `
            <div class="card">
                <h2>${nombre}</h2>
                <p><strong>Capital:</strong> ${capital}</p>
                <p><strong>Población:</strong> ${poblacion}</p>
                <img src="${bandera}" alt="Bandera de ${nombre}" width="100">
            </div>
        `;
        contenedorCartas.innerHTML += cartaHtml;
    });
}

cargarCartas();
