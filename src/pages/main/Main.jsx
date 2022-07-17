import CardList from '../../components/cardList/CardList'
import Navbar from '../../components/navbar/Navbar'
import MovieDetail from '../moviedetail/MovieDetail'

const Main = () => {
  return (
    <div className='mainContainer'>
      <Navbar />
      
      <CardList />
    </div>
  )
}

export default Main