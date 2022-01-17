import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMovies } from '../redux/action-creators'
import MovieTemplate from './MoviTemplate'


interface IProps {
    currentId: string,
    setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const AllMovies = ({currentId, setCurrentId}: IProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const getSingleMovie = (id: string) => {
        setCurrentId(id);
        navigate('view-movie')
    }

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch, currentId])

    return (
        <>
        <MovieTemplate viewMovie={getSingleMovie} movieGender='All movies'/>
        </>
    )
}



export default AllMovies
