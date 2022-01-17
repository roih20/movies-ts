import React from 'react'
import { useSelector } from 'react-redux'
import { IMovies, IMoviesState } from '../interface'
import { RootState } from '../redux'
import MovieCard from './MovieCard'
interface IProps {
    viewMovie: (id: string) => void
}

const MovieList = ({viewMovie}: IProps) => {
    const { movies } : IMoviesState = useSelector((state: RootState) => state.movies)

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center lg:gap-x-3 lg:gap-y-4 w-full '>
                    {movies.map((movie: IMovies, i: number) => (
                              <MovieCard key={i} movie={movie} viewMovie={viewMovie} />
                    ))}  
                    </div>
    )
}

export default MovieList
