import React, { useEffect, useState } from 'react'
import BasicCard from './BasicCard'
import { Grid } from '@mui/material'

function Movie() {



    const [movieList,setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
     getMovie()
    },[])

    // console.log(movieList)

  return (
  <div style={{backgroundColor:"#303030"}}>
    <Grid container spacing={2}>
    {movieList.map((movie)=>(
      <>
      <Grid item xs={3}>
      <BasicCard movie={movie}/>
        {/* <img  style={{width:"300px",height:"250px",
        marginLeft:"10px",marginTop:"30px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/> */}
        </Grid>
      </>
    ))}
    </Grid>
  </div>
  )
}

export default Movie
