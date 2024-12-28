import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath,onClick}) => {
  if(!posterPath){
    return null
  }
  return (
    <div onClick={onClick} className="cursor-pointer">
        <img src={IMG_CDN+posterPath} alt="image"
        className='w-48 h-56 rounded-lg'/>
    </div>
  )
}

export default MovieCard