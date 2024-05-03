import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

   const movies=useSelector(store=>store.movie?.nowPlaying);
   const popularMovies=useSelector(store=>store.movie?.Popular);
   const upComingMovies=useSelector(store=>store.movie?.Upcoming);
   const topRatedMovies=useSelector(store=>store.movie?.TopRated);
   const trendingMovies=useSelector(store=>store.movie?.Trending);
  return (
    <div className='bg-black'>
      <div className=' mt-[-12px] md:-mt-[380px] pl-0 md:pl-12 relative z-20' >
        {topRatedMovies && <MovieList title="Trending" movies={trendingMovies}/>}
        {topRatedMovies && <MovieList title="TopRated Movies" movies={topRatedMovies}/>}
        {popularMovies && <MovieList title="Popular" movies={popularMovies}/>}
        {upComingMovies && <MovieList title="Upcoming Movies" movies={upComingMovies}/>}
        {movies && <MovieList title="Now Playing" movies={movies}/>}
        </div>
    </div>
  )
}

export default SecondaryContainer