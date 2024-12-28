import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {
  const gpt = useSelector((state) => state.gpt);
  if(!gpt) {
    return <div>loading</div>
  }
  const {movieNames,movieResults} = gpt
  
  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {movieNames?.map((movieName,index) =>
        <MovieList title={movieName} key={index} movies={movieResults[index]}></MovieList>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestion