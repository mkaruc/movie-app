import React, { useState } from 'react'
import { axios } from "axios";
import MovieCard from '../../components/moviecard/MovieCard';
import SearchBar from '../../components/searchbar/SearchBar';

const CardList = () => {
  const [movieList, setMovieList] = useState();
  const [query, setQuery] = useState();
  const [id, setId]= useState();
  const API_KEY = "b1bebfb7337b25d7a480e1641757b0ce";

  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const searchUrl=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  const detailUrl=`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
        console.log(data.results);
      });
  };
  if (!query) {
    getData();
  }

const searchData = () => {
  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      setMovieList(data.results);
      console.log(data.results);
    });
};


  return (
    <div>
      <SearchBar searchData={searchData} setQuery={setQuery} movieList={movieList} />
      <MovieCard movieList={movieList} setId={setId}/>
      
    </div>
  )
}

export default CardList