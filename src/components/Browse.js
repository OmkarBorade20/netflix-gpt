import React  from 'react'
import Header from './Header'

import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import useTrendingMovies from '../hooks/useTrendingMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTrendingMovies();
  const toggleGptBtn=useSelector(store=>store.gpt?.searchToggle);

  return (
    <div>
   
      <Header/>
      {toggleGptBtn ?<GptSearch/>:<MainContainer/>}
 
    </div>
  )
}

export default Browse