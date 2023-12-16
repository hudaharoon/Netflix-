import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Banner.css'

function Banner({ fetchurl }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  console.log(fetchurl)
  const [movieDetails, setmovieDetails] = useState([])
  const fetchData = async () => {
    const response = await instance.get(fetchurl)
    const { data } = response
    setmovieDetails(data.results[Math.floor(Math.random() * data.results.length)])
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div style={{
        height: "600px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movieDetails.backdrop_path})`, backgroundSize: "cover"
      }}>
        <div className='banner_content'>
          <h2 style={{ color: "white" }}>{movieDetails?.name}</h2>
          <button className='btn btn-danger'>play <i class="fa-solid fa-play bg-transparent ms-1"></i></button>
          <button className='btn border-white ms-3 more'>more info <i class="fa-solid fa-caret-down bg-transparent"></i></button>
          <h5 style={{ color: "white" }}>{movieDetails?.overview?.slice(0,200)}...</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner;