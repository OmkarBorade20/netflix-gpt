import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import useMovieDetails from '../hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import { TMDB_IMG } from '../utils/constants';
import VideoShimmer from './shimmerUI/VideoShimmer';

const MovieDetails = () => {
    const {movieId}=useParams("movieId");
    console.log("movieID",movieId)

    useMovieDetails(movieId);

    const {movieDetails,videoDetails}=useSelector(store=>store.movieDetails);
    console.log("movieDetails",videoDetails);

  return (movieDetails && videoDetails )&& (
    <div>
        <Header/>
        <div className='absolute w-full bg-black'>
            {/* movie catalouge */}
            <div className='flex flex-col md:justify-center  my-[80px] md:my-[130px] ml-[40px] md:ml-[150px] '>
                <div>
                    <img className=" m-2 p-2 mt-5 w-[230px] md:w-[300px] h-[300px] md:h-[420px] " alt="movie Poster" src={TMDB_IMG + movieDetails?.poster_path}></img>
                </div>
             
                <div className='m-2 p-2 text-white w-[80%] md:w-[500px] mt-[8px] md:mt-[-420px] ml-2 md:ml-[340px]'>
                    <h1 className='py-1 md:py-2 text-lg md:text-3xl w-[80%] '>{movieDetails.original_title}</h1>
                    <p className='py-1 md:py-2  text-sm md:text-lg  '> Rating : {movieDetails.vote_average} ⭐ </p>
                    <p className='py-1 md:py-2  text-sm md:text-lg  '>RunTime : {movieDetails.runtime} Mins</p>
                    <p className=' py-1 md:py-2  text-sm md:text-lg  '>Language : {movieDetails.original_language}</p>
                    <p className=' py-1 md:py-2  text-sm md:text-md  w-[90%]' >Description : {movieDetails.overview}</p>
                    <p className=' text-lg  '> Date of Release : {movieDetails.release_date}</p>
                </div>  
            </div>
            {/* movie Videos  & Trailers */}
           {videoDetails?.lenght!==0 && <h1 className=' ml-[55px] text-3xl w-[70%] md:w-[400px] text-white mt-[-80px] my-4'> Videos & Trailers </h1>}
            <div className=' flex flex-wrap ml-[6px] md:ml-[50px]'> 
                    { videoDetails?.lenght===0? <VideoShimmer/> : videoDetails.map(e=> 
                        <iframe
                            key={e.key}
                            className="w-[400px] h-[300px] mx-4 my-2 md:my-0"
                            src={`https://www.youtube.com/embed/${e?.key}?autoplay=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    )}
             
              </div>
        </div>
    </div>
  )
}

export default MovieDetails