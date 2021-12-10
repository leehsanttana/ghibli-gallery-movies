import React from 'react';
import { UserContext } from '../../UserContext';
import MovieContent from '../MovieContent';
import MovieModal from '../MovieModal';
import Loading from '../Loading';

const SectionGallery = () => {
  const { data } = React.useContext(UserContext);
  const [movieModal, setMovieModal] = React.useState(null);

  console.log(movieModal);

  if (data !== null) {
    return (
      <section>
        {movieModal && (
          <MovieModal movie={movieModal} setMovieModal={setMovieModal} />
        )}
        <section className="gallery fadeInTop">
          {data.map((movie) => {
            return (
              <MovieContent
                key={movie.id}
                movie={movie}
                setMovieModal={setMovieModal}
              />
            );
          })}
        </section>
      </section>
    );
  } else {
    return <Loading />;
  }
};

export default SectionGallery;
