const albums = [
            "De Mysteriis Dom Sathanas",
            "Reign of Blood",
            "Ride the Lightning",
            "Painkiller",
            "Iron Fist"
        ];

        function pintarLista() {
            const lista = document.getElementById("listaAlbumes");
            lista.innerHTML = ""; // Limpia la lista antes de pintar
            for (let i = 0; i < albums.length; i++) {
                let li = document.createElement("li");
                li.textContent = albums[i];
                lista.appendChild(li);
            }
        }