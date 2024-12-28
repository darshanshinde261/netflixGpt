import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const data = useSelector((state) => state.movie);
    if(!data){
        return <div>Loading...</div>;
    }
    const movies = data?.nowPlayingMovies;
    if(!movies){
        return <div>No Movies Data</div>
    }
    
    const mainMovie = movies[0];
    const {original_title,overview,id} = mainMovie;
  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>
        <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer