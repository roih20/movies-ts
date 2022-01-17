import { combineReducers } from "redux";
import authReducer from "./authReducer";
import movieReducer from "./moviesReducer";


const reducers = combineReducers( {
    movies: movieReducer,
    auth: authReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>