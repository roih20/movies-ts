import { stat } from "fs"
import { IMoviesState } from "../../interface"
import { Action } from "../action"
import { ActionType } from "../action-types"


const initialState = {
    movies: []
}

const movieReducer = (state: IMoviesState = initialState, action: Action) => {
    switch(action.type){
        case ActionType.FETCH_ALL:
            return {movies: action.payload}
        case ActionType.FETCH_ACTION: 
             return {movies: action.payload}
        default:
          return state
    }
}

export default movieReducer