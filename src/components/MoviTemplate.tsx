import React from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'

interface IProps {
    viewMovie: (id: string) => void
    movieGender: string
}


const MovieTemplate = ({viewMovie, movieGender}: IProps) => {
    return (
        <div className='flex flex-col w-full'>
        <Navbar />
         <div className=' min-h-screen bg-black bg-opacity-80'>
             <div className='mt-6 '>
                 <h2 className='text-white text-xl ml-5'>{movieGender}</h2>
                 <div className='mt-5 md:ml-5 md:mr-5 '>
                  <MovieList  viewMovie={viewMovie} />
                 </div>
             </div>
         </div>
        </div>
    )
}

export default MovieTemplate
