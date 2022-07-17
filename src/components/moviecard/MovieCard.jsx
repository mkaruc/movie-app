import {useNavigate} from 'react-router-dom'

const MovieCard = ({movieList,url}) => {
  const navigate=useNavigate();
  return (
    <div onClick={() =>
      navigate('moviedetail')
    }>
      {movieList?.map((item, index)=>(
        <div key={index} className='container' >
          <img src="https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}/{item.backdrop_path}" alt="" />
          <h2>{item.original_title}</h2>
          <p>{item.overview}</p>
        </div>
      ))}
      
    </div>
  )
}

export default MovieCard