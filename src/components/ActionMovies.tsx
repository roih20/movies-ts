import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getActionMovies } from '../redux/action-creators'
import MovieList from './MovieList'
import MovieTemplate from './MoviTemplate'
import Navbar from './Navbar'

interface IProps {
    currentId: string
    setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const ActionMovies = ({currentId, setCurrentId}: IProps) => {
     const navigate =  useNavigate()
     const dispatch =  useDispatch()

     const getSingleMovie = (id: string) => {
         setCurrentId(id)
         navigate('/home/view-movie')
     }

     useEffect(() => {
         dispatch(getActionMovies())
     }, [dispatch, currentId])

    return (
    <>
       <MovieTemplate viewMovie={getSingleMovie} movieGender='Action Movies'/>
    </>
    )
}

export default ActionMovies
