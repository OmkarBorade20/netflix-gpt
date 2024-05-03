import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const VideoTitle = () => {

  const actionTitle=useSelector(store=>store.movie?.actionTitle);
  const navigate=useNavigate();

  return (
    <div className=' w-screen aspect-video absolute bg-gradient-to-r from-black  px-10 md:px-32 py-64 md:pt-80'>
        <h1 className='font-bold text-lg md:text-4xl my-2 md:my-4  text-white'>{actionTitle?.title}</h1>
        <p className=' hidden md:inline my-2 py-2 text-xs md:text-lg w-[200px] md:w-[550px] text-white'>{actionTitle?.description}</p>
        <div className='flex '>
            <button onClick={()=>navigate("/movie/details/"+actionTitle?.id)} className=' text-black font-bold text-sm md:text-lg bg-gray-200 rounded-lg p-2 md:p-4 w-[60px] md:w-[80px] hover:opacity-50 '> Play</button>
            <button onClick={()=>navigate("/movie/details/"+actionTitle?.id)} className='hidden md:inline text-white font-bold text-sm md:text-lg bg-gray-600 rounded-lg  p-4 mx-2 w-[150px]'> more info</button>
        </div>
    </div>
  )
}

export default VideoTitle