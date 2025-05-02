import { readMovies } from './movies.js';

readMovies()
  .then((movies) => console.log(movies))
  .catch((err) => console.log(err));
