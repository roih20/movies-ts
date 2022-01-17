import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMoviesState } from '../interface'
import { RootState } from '../redux'
import { getMoviesById } from '../redux/action-creators'

interface IProps {
    currentId: string
}

const SingleMovie = ({ currentId }: IProps) => {

    const { movies }: IMoviesState = useSelector((state: RootState) => state.movies)
    const movie = currentId ? movies.find((movie) => movie._id === currentId) : null

    useEffect(() => {
        console.log(movie)
    }, [])


    return (
        <>
            <div className='bg-black bg-opacity-80 min-h-screen w-full'>
                <div className='container mx-auto  mt-10'>
                    <div className='flex lg:flex-row  sm:flex-col'>
                       <img src={movie?.image} alt="" className='block w-2/6 md:mx-auto lg:m-0 md:w-2/4' />
                        <div className='flex flex-col ml-5 text-white mt-8 lg:m-0'>
                            <div className='ml-5 mr-5 space-y-4'>
                                <h1 className='text-2xl font-medium uppercase text-center lg:text-left'>{movie?.name}</h1>
                                <p className='break-normal text-lg text-justify'>{movie?.description}</p>
                                <p className='text-lg'>{movie?.gender}</p>
                                <p className='text-lg'>Director: {movie?.director}</p>
                                <p className='text-lg'>Elenco: {movie?.elenco.map((person => `${person}, `))}</p>
                                <p className='text-lg'>Release: {movie?.release}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleMovie
