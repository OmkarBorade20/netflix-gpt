import React from 'react'

import GptSearchBar from './GptSearchBar';
import GptSuggestedMovies from './GptSuggestedMovies';
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>   
        <img className=" fixed h-[100%] w-[100%] object-cover" alt="bgImage" src={BG_IMG}/>
        <GptSearchBar/>
        <GptSuggestedMovies/>
    </div>

  )
}

export default GptSearch