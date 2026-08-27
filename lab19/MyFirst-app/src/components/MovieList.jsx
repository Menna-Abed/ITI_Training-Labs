import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState([]);

  const apiKey = "e043b6cc3af49be5052b7d38fab1ba97";

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => { setMovies(res.data.results || []); })
      .catch((err) => { console.log('ERROR', err); });
  }, []);

  return (
    <div>
      <div className="hero-banner">
        <h1>Welcome to our movie app</h1>
        <p>
          Millions of movies, TV shows and people to discover.
          Explore now.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Search and explore..." className="search-input" />
          <button className="search-btn">  Search </button>
           </div>
      </div>

      <div className="movies-container">
        <h2 className="section-title">Popular Movies</h2>

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;