import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.Title &&
        <MovieCard
          key={props.movies.imdbID}
          title={props.movies.Title}
          posterUrl={props.movies.Poster}
          />
      }
			{props.movies.Error &&
				<h1>{props.movies.Error}</h1>
			}
    </div>
  )
}

export default MovieList;
