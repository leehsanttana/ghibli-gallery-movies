import React from 'react';

const MovieModal = ({ movie, setMovieModal }) => {
  function handleClick() {
    setMovieModal(null);
  }

  if (movie !== null) {
    return (
      <section className="movie-modal-container">
        <div className="movie-modal-content fadeInLeft">
          <div className="image-content">
            <img className="image" src={movie.image} alt={movie.title} />
            <img
              className="banner"
              src={movie.movie_banner}
              alt={movie.title}
            />
          </div>
          <div className="info-content">
            <span className="back">{movie.release_date}</span>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <span className="duration">Duração: {movie.running_time} min.</span>
            <div>
              <h3>Produtor: {movie.producer}</h3>
              <h3>Diretor: {movie.director}</h3>
            </div>
            <button onClick={handleClick}>Fechar</button>
          </div>
        </div>
      </section>
    );
  }
};
export default MovieModal;
