import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../firebase/setup'
import { useLocation } from 'react-router-dom'
import Review from './Review'
import { Grid } from '@mui/material'
import ShowReview from './ShowReview'

function MovieDetails() {

  const location = useLocation()
  
  const [movieData,setMovieData] = useState([])


  const getData = async()=>{
    const movieRef = doc(database,"Movies",`${location.state.movie.id}`)
  const data = await getDoc(movieRef)
  console.log(data?._document?.data?.value?.mapValue?.fields?.movie?.mapValue?.fields)
  const filteredData = data?._document?.data?.value?.mapValue?.fields?.movie?.mapValue?.fields
  setMovieData(filteredData)
  }

  useEffect(()=>{
     getData()
  },[])

console.log(movieData)

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
    <div style={{display:"flex",flexDirection:"row"}}>
      <div  style={{padding:"20px",border:"1px solid",marginTop:"20px",marginLeft:"20px"}}>
      <h1>Name : {movieData?.title?.stringValue}</h1>
      <h3>Overview : {movieData?.overview?.stringValue}</h3>
      <h4>Release Date : {movieData?.release_date?.stringValue}</h4>
      </div>
      </div>
      </Grid>
      <Grid item xs={4}>
        <div style={{marginTop:"20px"}}>
        <Review/>
        <ShowReview/>
        </div>
      </Grid>
    </Grid>
  )
}

export default MovieDetails
