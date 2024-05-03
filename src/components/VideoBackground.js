import React, { useState } from "react";
import { useSelector } from "react-redux";
import useActionTrailer from "../hooks/useActionTrailer";
import nosound from "../resources/icons/mute.png"
import sound from "../resources/icons/volume.png"
const VideoBackground = ({ id }) => {
  const [mute,setMute]=useState(1)
  
  useActionTrailer(id);
  const trailer = useSelector((store) => store.movie?.actionTrailer);

  return (
    <div className="w-screen">
        <img onClick={()=>setMute(!mute)} className="bg-gradient-to-l from-white opacity-80 mx-[70%] md:mx-[1800px] my-[80%] md:my-[650px] w-8 md:w-16 absolute z-30 boder transition-all duration-150 hover:scale-110 cursor-pointer " alt="sound logo" src={mute?nosound:sound}/>
      <iframe
        className="w-full aspect-square md:aspect-video "
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=${mute}&modestbranding=0&autohide=1&showinfo=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    
    
    </div>
  );
};

export default VideoBackground;
