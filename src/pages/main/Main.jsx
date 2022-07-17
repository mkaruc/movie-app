import Navbar from '../../components/navbar/Navbar'
import MovieCard from '../../components/moviecard/MovieCard'

const Main = () => {
  return (
    <div className='mainContainer'>
      <Navbar />
      
      <MovieCard />
    </div>
  )
}

export default Main