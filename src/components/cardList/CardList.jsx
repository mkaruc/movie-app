import React, { useState } from 'react'
import { axios } from "axios";
import MovieCard from '../../components/moviecard/MovieCard';

const CardList = () => {
  const [movieList, setMovieList] = useState();

  const API_KEY = "b1bebfb7337b25d7a480e1641757b0ce";

  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
        console.log(data.results);
      });
  };
getData();



  return (
    <div>
      <MovieCard movieList={movieList} url={url} />
    </div>
  )
}

export default CardList