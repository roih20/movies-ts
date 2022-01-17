import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { IUser } from '../interface'
import ActionMovies from './ActionMovies'
import AllMovies from './AllMovies'
import Sidebar from './Sidebar'
import SingleMovie from './SingleMovie'

const Home = () => {
    const [currentId, setCurrentId] = useState<string>('')
    const user: IUser= JSON.parse(localStorage.getItem('user') as string)
    const navigate =  useNavigate()
    const goBack = () => {
      navigate('/')
    }

    if(!user?.result.name) {
      return(
        <>
          <div className='container mx-auto overflow-auto'>
             <div className=' border border-black shadow-lg rounded-md p-4 mt-32'>
               <div className='flex flex-col items-center'>
                 <div className='flex flex-row items-center  space-x-10'>
                 <div className='text-center text-2xl font-medium text-black'>
                    Please sign in or create an account before, to get access 
                 </div>
                 <button type='button' className='px-3 py-2 bg-red-600 font-medium text-white text-lg rounded-md w-44' onClick={goBack}>Back</button>
                 </div>
               </div>
             </div>
          </div>
        </>
      )
    }

    return (
     <>
      <div className='flex flex-row'>
      <Sidebar />
      <Routes>
       <Route  path='/' element={  <AllMovies currentId={currentId} setCurrentId={setCurrentId} />}/>
       <Route  path='/view-movie' element={<SingleMovie currentId={currentId}/> }/>
       <Route  path='/action-movies' element={<ActionMovies currentId={currentId} setCurrentId={setCurrentId}/>}/>
      </Routes>
    </div>
     </>
    )
}

export default Home
