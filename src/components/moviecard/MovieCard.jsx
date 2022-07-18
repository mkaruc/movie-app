import {useNavigate} from 'react-router-dom'
import { MainContainer, Card, Header, Image, Overview } from './MovieCard.style';
const MovieCard = ({movieList, setId}) => {
  const navigate=useNavigate();
  
  return (
    <MainContainer >
      {movieList?.map((item, index)=>(
        
        <Card key={index} className='container' onClick={() =>
          navigate('moviedetail',{ state: item, replace: false })
        }>
          
          <Image src={`https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}`} alt={item.original_title} />
          <Header>{item.original_title}</Header>
          <Overview>{item.overview}</Overview>
        </Card>
      ))}
      
    </MainContainer>
  )
}

export default MovieCard