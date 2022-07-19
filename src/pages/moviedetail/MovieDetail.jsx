import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import {DetailContainer,DetailPart,HeaderContainer,ImgContainer,IngContainer} from './MovieDetail.style'

const MovieDetail = () => {
  const { state } = useLocation();
  return (
    
    <div className="mainContainer">
      <Navbar />
      <DetailContainer>
      <HeaderContainer>{state.original_title}</HeaderContainer>
      <DetailPart>
        <ImgContainer>
      <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${state.poster_path}`} alt={state.original_title} />
      </ImgContainer>
      <IngContainer>
    <h3> Overview:</h3> <p>{state.overview}</p>
    <p> <h3>Release Date:</h3>  <span className="date">{state.release_date}</span> </p>
    <p><h3>IMDB Rating:</h3>  <span className="rate">{state.vote_average} </span> </p>
      </IngContainer>
      </DetailPart>
      </DetailContainer>
    </div>
  )
}

export default MovieDetail