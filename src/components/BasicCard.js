import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {  collection, doc, setDoc } from 'firebase/firestore';
import { database } from '../firebase/setup';
import { Link } from 'react-router-dom';

export default function BasicCard({movie}) {


    const addData = async(movie) =>{
        try{
            const movieRef = doc(database,"Movies",`${movie.id}`)
            await setDoc(movieRef,{
               movie:movie
            })
        }catch(err){
            console.error(err)
        }
      }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <CardContent>
      </CardContent>
      <CardActions>
        <Link to="/movieDetails" size="small" state={{movie:movie}} onClick={()=>addData(movie)}>Add</Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}