import React from 'react';

function MovieList({ movies, searchTerm }) {
    console.log(searchTerm);

    const handleImageError = (event) => {
        // If the image fails to load, set the source to the placeholder image
        event.target.src = 'https://via.placeholder.com/150x225.png?text=No+Poster+Available';
      };
  return (
    <>
      <h1>{searchTerm}</h1>
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
