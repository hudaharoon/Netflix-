import React, { useState } from 'react'
import instance from '../instance';
import { useEffect } from 'react';
import'./Row1.css'
function Row1({ title, fetchurl }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [allMovies, setAllMovies] = useState([])

  console.log(title, fetchurl);
  const fetchData = async () => {
    const response = await instance.get(fetchurl)
    const { data } = response
    console.log(data);
    setAllMovies(data.results)
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(allMovies);

  return (
    <div className='row'>
      <h2 style={{ color: "white",marginBottom:"25px" ,marginBottom:"10px"}}>{title}</h2>
      <div className='movie_row'>
        {
          allMovies?.map(item => (
            <img src={`${base_url}${item.poster_path}`} alt="" className='movie' />
          ))
        }
      </div>
    </div>
  )
}

export default Row1