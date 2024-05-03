import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS, VIDEO_API } from '../utils/constants';
import { setMovieDetails, setMovieId, setVideoDetails } from '../utils/movieDetailsSlice';

const useMovieDetails = (movieId) => {

    const dispatch=useDispatch();

    const fetchMovieDetails=async()=>{
        //fetch Movie Details.
        const url="https://api.themoviedb.org/3/movie/"+movieId;
        const data=await fetch(url,API_OPTIONS);
        const json=await data.json();

        //also fetch movie videos and add into store.
        const videoUrl=VIDEO_API.replace("{movie_id}", movieId);;
        const videoData=await fetch(videoUrl,API_OPTIONS);
        const videoJson=await videoData.json();


        console.log("details",json)
        dispatch(setMovieId(movieId))
        dispatch(setMovieDetails(json))
        dispatch(setVideoDetails(videoJson.results))
    }

    //also fetch movie videos and add into store.

    useEffect(()=>{
        fetchMovieDetails();
    },[])
}

export default useMovieDetails