import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import gptSlice from './gptSlice';
import movieDetailsSlice from './movieDetailsSlice';

const appStore=configureStore({
    reducer:{

        user:userSlice,
        movie:movieSlice,
        gpt:gptSlice,
        movieDetails:movieDetailsSlice,
    }
});

export default appStore;