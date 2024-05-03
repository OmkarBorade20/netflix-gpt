export const BG_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg";

export const AVTAR_IMG="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
       Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_TOKEN

    }
  };

  export const VIDEO_API="https://api.themoviedb.org/3/movie/{movie_id}/videos" 

  export const TMDB_IMG="https://image.tmdb.org/t/p/w500"

  export const OPENAI_KEY=process.env.REACT_APP_OPEN_API_KEY;