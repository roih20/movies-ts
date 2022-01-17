import { Dispatch } from "redux";
import { Action } from "../action";
import * as api from '../../api/index'
import { ActionType } from "../action-types";
import { ILoginUser, IRegisterUser } from "../../interface";
import { NavigateFunction } from "react-router-dom";

export const getMovies = () =>async (dispatch: Dispatch<Action>) => {
    try {
        const { data } = await api.getAllmovies();
        dispatch({type: ActionType.FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getMoviesById = (id: string) =>async (dispatch: Dispatch<Action>) => {
    try {
        const { data } = await api.getMovieById(id)
        dispatch({type: ActionType.FETCH_BY_ID, payload: data } )

    } catch (error) {
        console.log(error)
    }
    
}

export const getActionMovies = () => async (dispatch: Dispatch<Action>) => {
    try {
        const {data} = await api.getActionMovies()
        dispatch({type: ActionType.FETCH_ACTION, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const signIn = (formData: ILoginUser, navigate: NavigateFunction) => async (dispatch: Dispatch<Action>) => {
    try {
        const {data} = await api.logInUser(formData)
        dispatch({type: ActionType.SIGN_IN, payload: data})
        navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData: IRegisterUser) => async (dispatch: Dispatch<Action>) => {
    try {
        const {data} = await api.registerUser(formData)
        dispatch({type: ActionType.SIGN_UP, payload: data})
    } catch (error) {
        console.log(error)
    }
}