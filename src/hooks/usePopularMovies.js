import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";


const usePopularMovies = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        fetchPopularMovies();
    },[])

    const fetchPopularMovies=async()=>{
        const data=await fetch(" https://api.themoviedb.org/3/movie/popular?region=IN",API_OPTIONS)
        const json=await data.json();
        console.log("Popular Movies",json.results)
        dispatch(addPopular(json.results));
    }


}

export default usePopularMovies