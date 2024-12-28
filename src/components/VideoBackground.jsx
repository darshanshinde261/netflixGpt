import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant'

const VideoBackground = ({movieId}) => {
    const [trailers,setTrailers] = useState(null);
    const getMovieVideo = async() =>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const result = await data.json();
            const filterData = result?.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : result.results[0];
            setTrailers(trailer);
        }catch(error){
            console.log(error.message)
        }
    }
    useEffect(() =>{
        getMovieVideo();
    },[]);
  return (
    <div className='w-screen absolute aspect-video -z-40'>
        <iframe
         src={`https://www.youtube.com/embed/${trailers?.key}?&autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0`}
         className='w-screen aspect-video'
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
         allowFullScreen frameBorder="0"
         ></iframe>
    </div>
  )
}

export default VideoBackground