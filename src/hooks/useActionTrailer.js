import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, VIDEO_API } from "../utils/constants";
import { addActionTrailer } from "../utils/movieSlice";

const useActionTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const url = VIDEO_API.replace("{movie_id}", id);
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    //console.log("Movie Video Lists", json.results);

    //filter Trailer from Video Api.
    const filter_video = json?.results?.filter((e) => e.type === "Trailer");
    const trailer = filter_video.length == 0 ? json[0] : filter_video[0];
    // setTrailerKey(key)
    dispatch(addActionTrailer(trailer));
  };
};

export default useActionTrailer;
