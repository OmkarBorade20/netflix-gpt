import React, { useState } from 'react'
import { API_OPTIONS, TMDB_IMG, VIDEO_API } from '../utils/constants'
import useActionTrailer from '../hooks/useActionTrailer';
import { addActionTitle, addActionTrailer } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const MovieCard = ({movie}) => {

 const dispatch=useDispatch();

  const fetchVideos = async (id,movie) => {
    const url = VIDEO_API.replace("{movie_id}", id);
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log("Movie Video Lists", json.results);

    //filter Trailer from Video Api.
    const filter_video = json?.results?.filter((e) => e.type === "Trailer");
    const trailer = filter_video.length == 0 ? json[0] : filter_video[0];

    dispatch(addActionTrailer(trailer));
    dispatch(addActionTitle({title:movie.original_title,description:movie.overview}));
  };



  return  <img onClick={()=>fetchVideos(movie.id,movie)}className="w-48 ml-10 transition-all duration-150 hover:scale-110  "  src={TMDB_IMG + movie.poster_path}/>
}

export default MovieCard