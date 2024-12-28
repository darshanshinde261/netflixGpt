import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movie);
  
  return (
    <div className='mt-[39%]'>
      <div className='relative bg-transparent'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
      
      <div className='bg-black'>
        <MovieList title={"Trending"} movies={movies.popularMovies}></MovieList>
        <MovieList title={"Popular Movies"} movies={movies.trendingMovies}></MovieList>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}></MovieList>
      </div>
      </div>
      
    </div>
    
  )
}

export default SecondaryContainer