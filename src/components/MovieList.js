import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {


    console.log("title:",title,"movies",movies)
  return (
    <div className='mx-12'>
        <h1 className='text-white font-bold text-3xl my-3 mx-7'>{title}</h1>
        <div className=' flex overflow-x-scroll overflow-visible  no-scrollbar'>
        <div className='flex'>
            {movies.map(e=> <MovieCard key={e.id} movie={e} />)};
        </div> 
        </div>
    </div>
  )
}

export default MovieList