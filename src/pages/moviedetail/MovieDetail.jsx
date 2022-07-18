import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const API_KEY = "b1bebfb7337b25d7a480e1641757b0ce";
  const { state } = useLocation();
  return (
    
    <div classname="mainContainer">
      <h1>{state.original_title}</h1>
      <div classname="container">
      <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${state.poster_path}`} alt={state.original_title} />
      <div classname="props">
    <h3> Overview:</h3> <p>{state.overview}</p>
    <p>Release Date: <span className="date">{state.release_date}</span> </p>
    <p>IMDB Rating: <span className="rate">{state.vote_average} </span> </p>
      </div>
      </div>
    </div>
  )
}

export default MovieDetail