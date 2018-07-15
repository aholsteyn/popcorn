export const SHOW_MOVIE = 'SHOW_MOVIE';
export const SHOW_ERROR = 'SHOW_ERROR';
export const GET_MOVIE = 'GET_MOVIE';

export function showMovie(movie) {
  return {
    type: SHOW_MOVIE,
    movie,
  };
}

export function showError(error) {
  return {
    type: SHOW_ERROR,
    error,
  };
}

export function getMovie(movie) {
	return {
    type: GET_MOVIE,
    movie,
  };
}