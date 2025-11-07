//https://www.omdbapi.com/?i=tt3896198&apikey=8738c5a0

/*async function main() {
  const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=8738c5a0&s=love")
  const moviesData = await movies.json();
  const moviesWrapper = document.querySelector('.movies');
  const moviesList = moviesData.Search;
  moviesWrapper.innerHTML = moviesList
    .map(
      (movie) => `<div class="movie">`*/

  const API_KEY = '8738c5a0';
  const DEFAULT_QUERY = 'love';

  let movies = [];

  const moviesWrapper = document.querySelector('.movies');
  const inputEL = document.querySelector('#searchInput');

  function buildSearchUrl(query) {
    return `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
  }

function setLoading(isLoading) {{
    if (!moviesWrapper) return;
    moviesWrapper.classList.toggle('movies__loading', isLoading);
    if (isLoading) {
      moviesWrapper.innerHTML = '<i class="fas fa-spinner movies__loading--spiner"></i>';
    }
}

function renderMovies(list) {
  if (!moviesWrapper) return;
  if (!Array.isArray(list) || list.length === 0) {
    moviesWrapper.innerHTML = '<p>No movies found. Try a different search.</p>';
    return;
  }
  const html = list.map((movie) => {
    const poster = movie.Poster &&  movie.Poster !== 'N/A' ? movie.Poster : './assets/transparent-movie-camera.png';
    return `div class="movie">
    <figure class="movie__img--wrapper">
          <img class="movie__img" src= "${poster}" alt="${movie.Title}"/>
      </figure>
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__year">${movie.Year}</div>
  </div>`;
}).join('');
  moviesWrapper.innerHTML = html;  
}

async function performSearch(query) {
  try {
    setLoading(true);
    const response = await fetch(buildSearchUrl(query));
    const data = await response.json();
    movies = (data && data.Response === 'True' && Array.isArray(data.Search)) ? data.Search : [];
    renderMovies(movies);
    if (data && data.Response !== 'True') {
      console.warn('OMDb response:' data?.Error);
    }
  } catch (error) {
   console.error('Error fetching movies:', error);
    moviesWrapper.innerHTML = '<p> An error Occured.Please try again later.</p>';
  } finally {
    setLoading(false);
  }
}  

function onSearchChange(event) {
  const q = (event.target.value || '').trim();
  performSearch(q || DEFAULT_QUERY);
}

function onSearchClick() {
  const q = (inputEL?.value || '').trim();
  performSearch(q || DEFAULT_QUERY);
}

function filterMovies(event) {
const value = event?.target?.value;
  if (!Array.isArray(movies) || movies.length === 0) return;
  let sorted = [...movies];
  if (value === 'A_TO_Z') {
    sorted.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (value === 'Z_TO_A') {
    sorted.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (value === 'YEAR_ASC') {
    sorted.sort((a, b) => a.Year.localeCompare(b.Year));
  } else if (value === 'YEAR_DESC') {
    sorted.sort((a, b) => b.Year.localeCompare(a.Year));
  }
  renderMovies(sorted);
}

performSearch(DEFAULT_QUERY);
