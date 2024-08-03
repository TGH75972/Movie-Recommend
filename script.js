document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const movieInput = document.getElementById('movieInput');
    const moviePoster = document.getElementById('moviePoster');
    const movieTitle = document.getElementById('movieTitle');
    const moviePlot = document.getElementById('moviePlot');
    const movieRating = document.getElementById('movieRating');
    const movieYear = document.getElementById('movieYear');
    const movieGenre = document.getElementById('movieGenre');
    const apiKey = '59105ede';

    async function fetchMovieData(title) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
            const data = await response.json();
            if (data.Response === 'True') {
                moviePoster.src = data.Poster;
                movieTitle.textContent = data.Title;
                moviePlot.textContent = data.Plot;
                movieRating.textContent = data.imdbRating;
                movieYear.textContent = data.Year;
                movieGenre.textContent = data.Genre;
            } else {
                clearMovieDetails();
                alert('Movie not found.');
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
            clearMovieDetails();
            alert('Error fetching movie data.');
        }
    }

    function clearMovieDetails() {
        moviePoster.src = '';
        movieTitle.textContent = '';
        moviePlot.textContent = '';
        movieRating.textContent = '';
        movieYear.textContent = '';
        movieGenre.textContent = '';
    }

    searchButton.addEventListener('click', () => {
        const movieTitleInput = movieInput.value.trim();
        if (movieTitleInput) {
            fetchMovieData(movieTitleInput);
        } else {
            alert('Please enter a movie title.');
        }
    });
});
