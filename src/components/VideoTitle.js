import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {

  const actionTitle=useSelector(store=>store.movie?.actionTitle)

  return (
    <div className='w-screen aspect-video absolute bg-gradient-to-r from-black  px-32 pt-80'>
        <h1 className='font-bold text-4xl my-4  text-white'>{actionTitle?.title}</h1>
        <p className=' my-2 py-2 text-lg w-[550px] text-white'>{actionTitle?.description}</p>
        <div className='flex '>
            <button className='text-black font-bold text-lg bg-gray-200 rounded-lg p-4 w-[80px] hover:opacity-50 '> Play</button>
            <button className='text-white font-bold text-lg bg-gray-600 rounded-lg  p-4 mx-2 w-[150px]'> more info</button>
        </div>
    </div>
  )
}

export default VideoTitle