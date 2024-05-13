// Asíncrona
async function cargarDatos() {

    await new Promise(resolve => setTimeout(resolve, 2000));
  
    const datos = [
      { Anime: "Kono Subarashii Sekai ni Shukufuku wo! 3", sinopsis: "Tercera temporada de Kono Subarashii Sekai ni Shukufuku wo!" },
      { Anime: "Mushoku Tensei II: Isekai Ittara Honki Dasu", sinopsis: "Segunda temporada de Mushoku Tensei: Isekai Ittara Honki Dasu" },
      { Anime: "Date A Live V", sinopsis: "Quinta temporada de Date A Live" }
    ];
  
    return datos;
}

function buscarSinopsis() {
    const nombreAnime = document.getElementById("nombreAnime").value;
    cargarDatos().then(datos => {
        const sinopsisEncontrado = datos.find(anime => anime.Anime === nombreAnime);
        if (sinopsisEncontrado) {
            alert(`${sinopsisEncontrado.Anime}: ${sinopsisEncontrado.sinopsis}`);
        } else {
            alert("Anime no encontrado");
        }
    }).catch(error => {
        console.error("Error al cargar los datos:", error);
    });
}

cargarDatos().then(datos => {
    document.getElementById("anime1").innerText = `${datos[0].Anime}: ${datos[0].sinopsis}`;
    document.getElementById("anime2").innerText = `${datos[1].Anime}: ${datos[1].sinopsis}`;
    document.getElementById("anime3").innerText = `${datos[2].Anime}: ${datos[2].sinopsis}`;
}).catch(error => {
    console.error("Error al cargar los datos:", error);
});
