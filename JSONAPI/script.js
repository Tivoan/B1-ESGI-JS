document.addEventListener("DOMContentLoaded", function () {
    const filmButtons = document.querySelectorAll(".film-button"); // On récupère les bouttons
    filmButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filmId = button.dataset.filmId;

            fetch('https://swapi.dev/api/films/${filmId}/')
                .then((response) => response.json())
                .then((film) => {
                    document.getElementById("title").textContent = film.title;
                    document.getElementById("opening-crawl").textContent =
                        film.opening_crawl;
                    document.getElementById("release-date").textContent =
                        film.release_date;
                    document.getElementById("director").textContent = film.director;
                    document.getElementById("producers").textContent = film.producer;
                })
                .catch((error) =>
                    console.error(
                        "Erreur lors de la récupération des détails du film:",
                        error
                    )
                );
        });
    });
});