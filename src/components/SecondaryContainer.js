import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

   const movies=useSelector(store=>store.movie?.nowPlaying);
   const popularMovies=useSelector(store=>store.movie?.Popular);
   const upComingMovies=useSelector(store=>store.movie?.Upcoming);
   const topRatedMovies=useSelector(store=>store.movie?.TopRated);
   
  return (
    <div className='bg-black'>
      <div className=' mt-0 md:-mt-[380px] pl-4 md:pl-12 relative z-20' >
  
        {topRatedMovies && <MovieList title="TopRated Movies" movies={topRatedMovies}/>}
        {popularMovies && <MovieList title="Popular" movies={popularMovies}/>}
        {upComingMovies && <MovieList title="Upcoming Movies" movies={upComingMovies}/>}
        {movies && <MovieList title="Now Playing" movies={movies}/>}
        </div>
    </div>
  )
}

export default SecondaryContainer