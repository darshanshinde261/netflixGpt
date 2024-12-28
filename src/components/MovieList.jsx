import React from 'react'
import MovieCard from "./MovieCard";
import { API_OPTIONS } from '../utils/constant';
import TrailerModal from './TrailerModal';
import { useState } from 'react';
const MovieList = ({title,movies}) => {
    if(!movies){
        return <div>loading</div>
    }
    const [trailers,setTrailers] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const getMovieVideo = async(movieId) =>{
            console.log("click")
            try{
                const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
                const result = await data.json();
                const filterData = result?.results.filter((video) => video.type === "Trailer");
                const trailer = filterData.length ? filterData[0] : result.results[0];
                setTrailers(trailer);
                setShowModal(true);
            }catch(error){
                console.log(error.message)
            }
        }
    const handleClick = (movie) => {
        console.log("click")
        getMovieVideo(movie.id); // Call the getMovieVideo function when a movie is clicked
    };
    const handleCloseModal = () => {
        setShowModal(false); // Close the modal when the cancel button is clicked
    };
  return (
    <div className='px-6 pl-12'>
        <h1 className='text-2xl text-white py-2 pt-4'>{title}</h1>
        <div className='overflow-x-scroll flex hide-scrollbar'>
            <div className=' flex shrink-0 gap-3 '>
                {
                    movies?.map((movie,index) =>(
                        <MovieCard key={index} 
                        onClick={() => handleClick(movie)} posterPath={movie?.poster_path} className="w-50 h-80"></MovieCard>
                    ))
                }
                
            </div>
        </div>
        {showModal && (
                <TrailerModal
                    modaldata={{ trailers, handle: handleCloseModal }} // Pass both trailer data and handle function
                />
            )}
    </div>
  )
}

export default MovieList