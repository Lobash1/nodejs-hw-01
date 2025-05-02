import fs from 'node:fs/promises';
import path from 'node:path';

function readMovies() {
  return fs.readFile('movies.txt', { encoding: 'utf-8' });
}

export { readMovies };
