
export interface IMovies {
    _id: string
    name: string,
    description: string,
    gender: string,
    release: string,
    director: string,
    elenco: Array<string>,
    image: string

}

export interface IMoviesState {
    movies: IMovies[]
}

export interface IRegisterUser {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface ILoginUser {
    email: string
    password: string
}


export interface AuthState {
    authData: any | undefined | null
}

export interface IUser {
    result: {
        name: string
        email: string
    }
    token: string
}