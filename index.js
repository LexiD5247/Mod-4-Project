//https://www.omdbapi.com/?i=tt3896198&apikey=8738c5a0

async function main() {
  const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=8738c5a0&s=love")
  const moviesData = await movies.json();
  const moviesWrapper = document.querySelector('.movies');
  const moviesList = moviesData.Search;
  moviesWrapper.innerHTML = moviesList
    .map(
      (movie) => `<div class="movie">
      <figure class="movie__img--wrapper">
          <img class="movie__img" src= "${movie.Poster}" alt="">
      </figure>
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__year">${movie.Year}</div>
  </div>`
    ).join("");
}

main();

/*async function fetchMovies(filter) {
  const moviesWrapper = document.querySelector('.movies');

  moviesWrapper.classList += ' movies__loading'
  if (!movies) {
    movies =  await getMovies();
  }

  moviesWrapper.classList.remove('movies__loading')

  
  if (filter === 'A_TO_Z') {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  }
  else if (filter === 'Z_TO_A') {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));
  }
else if (filter === 'YEAR_ASC') {
    movies.sort((a, b) => a.Year.localeCompare(b.Year));
  }
  else if (filter === 'YEAR_DESC') {
    movies.sort((a, b) => b.Year.localeCompare(a.Year));
  }
}

function filterMovies(event) {
    fetchMovies(event.target.value)
}

setTimeout(() => {
  fetchMovies();
});*/
