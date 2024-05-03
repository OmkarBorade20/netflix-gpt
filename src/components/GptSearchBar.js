import React, { useRef } from 'react'
import { addGptMovies } from '../utils/gptSlice';
import openai from '../utils/openAI';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {

    const dispatch=useDispatch();
    const searchText=useRef(null);

    const tmdbMovieSearch=async(movieName)=>{
        const url="https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=true"
        const data=await fetch(url,API_OPTIONS);
        const json=await data.json();
        return json.results;
    }

    const handelGptSearch= async ()=>{
        //console.log("search",searchText.current.value) ;
 
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
     
        const gptResults = await openai.chat.completions.create({
         messages: [{ role: "user", content: gptQuery }],
         model: "gpt-3.5-turbo",
       });
 
       if (!gptResults.choices) {
         // TODO: Write Error Handling
       }
       //console.log("gptResults",gptResults.choices?.[0]?.message?.content);
 
       const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
 
       // make tmdb api calls.
       const pendingAPIS=gptMovies.map(e=>tmdbMovieSearch(e));
 
       const movies=await Promise.all(pendingAPIS);
       //console.log("pendingAPIS Movies",movies)
       dispatch(addGptMovies({title:gptMovies,movies:movies}))
     }

  return (
   
         <div className='mx-3 md:mx-[30%] my-[25%] md:my-[8%] absolute  text-black  w-[90%] md:w-[680px] h-[150px] md:h-[180px] border border-black bg-black opacity-80   rounded-lg' >
            <form onClick={(e)=>e.preventDefault()}className='my-[55px]  '>
                <input ref={searchText} className='p-3 mx-4 md:mx-8 text-white bg-gray-700 w-[70%] md:w-[70%] bg-gray-700" text-sm md:text-lg transition-all duration-150 hover:scale-110' type='text' placeholder='Enter Movies You Want From GPT ?' ></input>
                <button onClick={handelGptSearch} className='py-2 md:py-3 -mx-1 md:mx-2 w-[20%] md:w-[15%] rounded-lg bg-red-600 text-white transition-all duration-150 hover:scale-110'>Search</button>
            </form>
        </div>
   
  )
}

export default GptSearchBar