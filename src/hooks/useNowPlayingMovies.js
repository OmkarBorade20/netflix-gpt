import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

 const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
      nowPlaying();
    },[])
    
    const nowPlaying= async()=>{
        //fetch data from TMDB Apis
        const data=await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
        const json=await data.json();

        //console.log("Now Playing Movies Api ",json.results)
        //add to store.
        dispatch(addNowPlaying(json.results));
      }

    
 }


 export default useNowPlayingMovies;