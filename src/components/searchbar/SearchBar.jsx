import { useState } from 'react'

const SearchBar = ({ setQuery, movieList, searchData }) => {
    const API_KEY = "b1bebfb7337b25d7a480e1641757b0ce"
    

    // const [movieList, setMovieList] = useState();
    // const [query, setQuery] = useState("");

        
        const handleSubmit = (e) => {
          e.preventDefault();
          searchData();
        };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <button type="submit">SEARCH</button>
    </form>
  )
}


export default SearchBar