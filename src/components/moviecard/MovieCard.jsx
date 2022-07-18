import {useNavigate} from 'react-router-dom'

const MovieCard = ({movieList, setId}) => {
  const navigate=useNavigate();
  
  return (
    <div onClick={() =>
      navigate('moviedetail')
    }>
      {movieList?.map((item, index)=>(
        
        <div key={index} className='container' >
          
          <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}`} alt={item.original_title} />
          <h2>{item.original_title}</h2>
          <p>{item.overview}</p>
        </div>
      ))}
      
    </div>
  )
}

export default MovieCard