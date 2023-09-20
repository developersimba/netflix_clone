import React from 'react'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from "../src/components/MovieDetails"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path="/movieDetails" element={<MovieDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
