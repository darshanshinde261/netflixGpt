import React from 'react'
import { useRef } from 'react';
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constant';
import {addGptMovieResult} from "../utils/GptSearchSlice"
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {
  const dispatch = useDispatch();
    const searchText = useRef(null);
    const searchMovieTMDB = async(movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?'+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const json = await data.json();
    }
    const handleGptSearchClick = async() =>{
        
      const gptQuery = "Act as a Movie Recommendation system and suggest some movie for the query"+searchText.current.value+". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mill Gaya";
      //make an APi call to open ai api
      const getResults = await openai.chat.completions.create({
        messages:[{role:'user', content:gptQuery}],
        model:"gpt-3.5-turbo",
      });
      const gptMovies = getResults.choices?.[0]?.message?.content?.split(",")
      const movielist = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(movielist);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9'
            placeholder='What would you like to watch today' />
            <button className='py-2 m-4 col-span-3 px-4 bg-red-700 text-white rounded-lg '
            onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar