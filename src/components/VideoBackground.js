import React from "react";
import { useSelector } from "react-redux";
import useActionTrailer from "../hooks/useActionTrailer";

const VideoBackground = ({ id }) => {
  
  useActionTrailer(id);
  const trailer = useSelector((store) => store.movie?.actionTrailer);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

    
    </div>
  );
};

export default VideoBackground;
