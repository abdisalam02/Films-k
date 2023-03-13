import React from 'react';
import PlaceholderImage from '../components/placeholder.png';

function MovieList({ movies, searchTerm }) {
    console.log(searchTerm);

    const handleImageError = (event) => {
        // If the image fails to load, set the source to the placeholder image
        event.target.src = PlaceholderImage;
      };
  return (
    <>
      <h1 className='results'>"{searchTerm}"</h1>
      <div className='container'>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img 
            src={movie.Poster}
             alt={movie.Title}
             onError={handleImageError}
             />
            <div className='info'>
              <h4>{movie.Title}</h4>
              <p>Year: {movie.Year}</p>
              <p>Type: {movie.Type}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
