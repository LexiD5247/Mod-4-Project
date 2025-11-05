let movies;

async function fetchMovies(filter) {
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


  const moviesHTML = movies.map((movie) => {
     return `<div class="movie">
      <figure class="movie__img--wrapper">
          <img class="movie__img" src= "${movie.Poster}" alt="">
      </figure>
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__year">${movie.Year}</div>
  </div>`
  }).join('');

  moviesWrapper.innerHTML = moviesHTML;
}

function filterMovies(event) {
    fetchMovies(event.target.value)
}

setTimeout(() => {
  fetchMovies();
});

// FAKE DATA
function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([  
      {
      id: 1,
      Title: "Crazy, Stupid, Love.",
      Year: "2011",
      imdbID: "tt1570728",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    },
    {
      id: 2,
      Title: "Love Actually",
      Year: "2003",
      imdbID: "tt0314331",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BYWRlZjcwYTgtYWJkOS00MGYwLTk3Y2ItNmU4NTg5Nzg2YTQ2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 3,
      Title: "Thor: Love and Thunder",
      Year: "2022",
      imdbID: "tt10648342",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 4,
      Title: "Love & Other Drugs",
      Year: "2010",
      imdbID: "tt0758752",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
    },
    {
      id: 5,
      Title: "Shakespeare in Love",
      Year: "1998",
      imdbID: "tt0138097",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BYmM3MTllNzYtN2MzNS00NWQwLTk0NTEtNjY1MmMwYjNkNTE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 6,
      Title: "P.S. I Love You",
      Year: "2007",
      imdbID: "tt0431308",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
    },
    {
      id: 7,
      Title: "Love, Death & Robots",
      Year: "2019",
      imdbID: "tt9561862",
      Type: "series",
      Poster: "https://m.media-amazon.com/images/M/MV5BZDY3OTZiYzktN2U5My00MzRhLWJiZjItZjNlZmM3OGViZmFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 8,
      Title: "I Love You, Man",
      Year: "2009",
      imdbID: "tt1155056",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
    }
  ]);
  }, 1000);
  });
}