import React from 'react';
import Button from '../Button';

const MovieContent = ({ movie, setMovieModal }) => {
  function handleClick() {
    setMovieModal(movie);
  }

  return (
    <div className="movie" onClick={handleClick}>
      <img src={movie.image} alt={movie.title} />
      <div className="content-movie">
        <h2>{movie.title}</h2>
        <button onClick={handleClick}>Leia +</button>
      </div>
    </div>
  );
};
export default MovieContent;
