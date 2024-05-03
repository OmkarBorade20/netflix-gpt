import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addRecomended } from '../utils/movieSlice';

const useRecomendedMovies = ({movieId}) => {
    const dispatch=useDispatch();

    useEffect(()=>{
        fetchRecomendedMovies();
    },[])
    
    const fetchRecomendedMovies= async()=>{
        //fetch data from TMDB Apis
        const data=await fetch("https://api.themoviedb.org/3/movie/"+{movieId}+"/recommendations",API_OPTIONS);
        const json=await data.json();

        //console.log("Now Playing Movies Api ",json.results)
        //add to store.
        dispatch(addRecomended(json.results));
      }

    
}

export default useRecomendedMovies