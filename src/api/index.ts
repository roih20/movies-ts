import axios, { AxiosRequestConfig } from 'axios'
import { ILoginUser, IRegisterUser } from '../interface'

const API =  axios.create({baseURL: 'https://movie-mern-app.herokuapp.com/', headers: {

}})

const token = localStorage.getItem('user') as string

API.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if(token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token).token}`
    }
    return config
}, error => {
    return Promise.reject((error))
})

export const getAllmovies = () => API.get('/movies')
export const getMovieById = (id: string) => API.get(`/movies/${id}`)
export const getActionMovies = () => API.get('/movies/action')

export const logInUser = (formData: ILoginUser) => API.post('auth/login', formData)
export const registerUser = (formData: IRegisterUser) => API.post('/auth/register', formData)

