import React from 'react'

const TrailerModal = ({modaldata}) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <iframe
         src={`https://www.youtube.com/embed/${modaldata.trailers?.key}?&autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0`}
         className='w-[900px] h-[600px] aspect-video'
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
         allowFullScreen frameBorder="0"
         ></iframe>
         <div className=' px-4 py-2 cursor-pointer text-3xl text-white bg-red-600 rounded-lg' onClick={modaldata.handle}>close</div>
    </div>
  )
}

export default TrailerModal