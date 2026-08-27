import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const apiKey = "e043b6cc3af49be5052b7d38fab1ba97";

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}` )
      .then((res) => {setMovie(res.data);})
      .catch((err) => { console.log('ERROR', err);
      });

  }, [id]);

  if (!movie) { return <h2>Loading...</h2>; }

  const rating = Math.round( movie.vote_average  / 2 );

  return (
    <div className="details-container">
      <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
        alt={movie.title} className="details-poster" />

      <div className="details-content">
        <h1 className="details-title"> {movie.title} </h1>
        <button className="fav-btn">💛</button>
        <div className="details-date">
        </div>
 {movie.release_date ? new Date(movie.release_date) .toDateString() .slice(4)  : ''}
        <div className="rating-container">
          <span className="stars">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </span>
          <span className="vote-count">   {movie.vote_count} votes </span>
        </div>
        <p className="details-overview"> {movie.overview} </p>
        <div className="genres-list">
          {movie.genres?.map((g) => (
            <span key={g.id} className="genre-tag" >
              {g.name}
            </span>
          ))}

        </div>
        <div className="meta-info">
          <div> <span>Duration:</span> {movie.runtime} Min. </div>
          <div>
            <span>Languages:</span> 
            {movie.spoken_languages?.map((lang) => lang.english_name).join(', ')}
          </div>
        </div>
        <div className="production-companies">
          {movie.production_companies?.map((company) => (
            company.logo_path && <img key={company.id} src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
              alt={company.name} className="company-logo" />  ))}
        </div>
        {movie.homepage && <Link to={movie.homepage} className="website-btn" >  Website 🔗 </Link> }
      </div>
    </div>
  );
}
export default MovieDetails;