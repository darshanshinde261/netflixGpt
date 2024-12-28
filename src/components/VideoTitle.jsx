import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 bg-gradient-to-r from-black absolute text-white'>
        <h1 className='text-6xl font-bold overflow-hidden'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex gap-3'>
            <button className='bg-white hover:bg-opacity-50 rounded-lg transition-all duration-200 text-black p-3 px-12 text-xl font-bold '>Play</button>
            <button className='bg-gray-600 hover:bg-opacity-50 rounded-lg transition-all duration-200 text-white p-3 px-12 text-xl text-bold '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle