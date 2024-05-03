import React from 'react'

import SecondaryContainer from './SecondaryContainer'
import { useDispatch, useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { addActionTitle } from '../utils/movieSlice';


const MainContainer = () => {

  const dispatch=useDispatch();
    // useNowPlayingMovies();

    const nowPlaying=useSelector(store=>store.movie.nowPlaying)
    //console.log("nowPlaying",nowPlaying)

   if(!nowPlaying) return;

   //logic for random movie selection. 
   function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
   const random=randomIntFromInterval(0,19);
   const {original_title,overview,id} = nowPlaying[random];
   dispatch(addActionTitle({id:id,title:original_title,description:overview}));

  return (
    <div className=''>
        <div className='absolute w-full   no-scrollbar'>
            <VideoTitle />
        </div>
        <VideoBackground id={id}/>
        <SecondaryContainer/>
    </div>
  )
}

export default MainContainer