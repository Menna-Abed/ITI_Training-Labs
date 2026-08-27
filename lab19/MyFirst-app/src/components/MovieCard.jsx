import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="movie-card">
      <div className="poster-wrapper">

        <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}  className="movie-poster" onClick={() => navigate(`/movie/${movie.id}`)} />
        <div className="rating-badge">
          {Math.round( movie.vote_average  * 10)} %
        </div>
       <button className="fav-btn" onClick={toggleFav}> {isFav ? '💛' : '🤍'} </button>
      </div>

      <div className="movie-info-header">
        <div>
          <div className="movie-title"> {movie.title} </div>
          <div className="details-date">
            {movie.release_date ? new Date(movie.release_date).toDateString().slice(4) : ''}
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;