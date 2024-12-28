import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from './GptMovieSuggestion'
import {bg} from "../utils/constant"

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img
                src={bg} alt="background" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestion></GptMovieSuggestion>
    </div>
  )
}

export default GptSearch