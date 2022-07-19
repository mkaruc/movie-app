import { useState } from 'react'
import {FormContainer,StyledInput,} from './SearchBar.style'
const SearchBar = ({ setQuery, movieList, searchData }) => {
    const API_KEY = "b1bebfb7337b25d7a480e1641757b0ce"
    

    // const [movieList, setMovieList] = useState();
    // const [query, setQuery] = useState("");

        
        const handleSubmit = (e) => {
          e.preventDefault();
          searchData();
        };
  return (
    <FormContainer onChange={handleSubmit}>
        <StyledInput type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search a Movie.."/>
        {/* <button type="submit">SEARCH</button> */}
    </FormContainer>
  )
}


export default SearchBar