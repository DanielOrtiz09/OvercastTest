document.getElementById("searchButton").addEventListener("click", () => {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    if (pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("pokemonNameDisplay").textContent = data.name;
                document.getElementById("pokemonIdDisplay").textContent = data.id;
                document.getElementById("pokemonImageFront").src = data.sprites.front_default;
                document.getElementById("pokemonImageShiny").src = data.sprites.front_shiny;
                document.getElementById("pokemonInfo").style.display = "block";
            })
            .catch(error => {
                console.error("Error al buscar el Pokémon:", error);
                alert("No se pudo encontrar el Pokémon.");
            });
    }
});