import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceholderImage from '../components/placeholder.png';


function MovieProfile({ movieId }) {
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=dba6a593`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [movieId]);
  
    return (
      <div className="movie-profile">
        {movie && (
          <>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : PlaceholderImage} alt={movie.Title} />
            <div className="info">
              <h2>{movie.Title}</h2>
              <p>{movie.Plot}</p>
              <p>Released: {movie.Released}</p>
              <p>Runtime: {movie.Runtime}</p>
              <p>Director: {movie.Director}</p>
              <p>Writer: {movie.Writer}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Genre: {movie.Genre}</p>
              <p>IMDb Rating: {movie.imdbRating}</p>
              <p>Awards: {movie.Awards}</p>
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default MovieProfile;
  