import { ILoginUser, IMovies, IRegisterUser } from '../../interface'
import {ActionType} from '../action-types'

interface GetAllMovies {
    type: ActionType.FETCH_ALL
    payload: IMovies
}


interface GetMoviesById {
    type: ActionType.FETCH_BY_ID
    payload: IMovies
}


interface GetActionMovies {
    type: ActionType.FETCH_ACTION
    payload: IMovies
}

interface SignIn {
    type: ActionType.SIGN_IN,
    payload: ILoginUser
}

interface SignUp {
    type: ActionType.SIGN_UP,
    payload: IRegisterUser
}

interface LogOut {
    type: ActionType.LOG_OUT
}


export type Action = GetAllMovies | GetMoviesById | GetActionMovies | SignIn | SignUp | LogOut