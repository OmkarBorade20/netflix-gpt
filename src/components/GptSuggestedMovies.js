import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSuggestedMovies = () => {

  const gptSearchMovies=useSelector(store=>store.gpt);
  const {gptResult,movies}=gptSearchMovies;

  return gptResult && (
    <div className='absolute my-[70%] md:my-[20%] mx-[2%] md:mx-[5%] bg-black w-[95%] md:w-[90%] opacity-95'>
      <h1 >Movie Suggestion.</h1>
      {gptResult?.map((e,i)=><MovieList  key={e} className="abolute z-50"title={e} movies={movies[i]}/>)}
    </div>
  )
}

export default GptSuggestedMovies