import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
const MovieDetail = () => {
  const { state } = useLocation();
  return (
    
    <div classname="mainContainer">
      <Navbar />
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