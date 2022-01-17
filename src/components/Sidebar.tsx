import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ActionType } from '../redux/action-types'

const Sidebar = () => {
    return (
        <div className='min-h-screen w-72 bg-black relative'>
            <div className='fixed'>
                <div className='ml-4 text-gray-200 mt-4 flex-col flex '>
                    <h1 className='font-3xl font-medium text-2xl'>Movies Online</h1>
                    <Link className='text-lg font-medium flex flex-row items-center mt-3 ' to=''><AiFillHome className='mr-2' /> Home</Link>
                    <h3 className='mt-5'>Discover categories</h3>
                    <ul className='text-sm list-none space-y-3 ml-3 mt-3'>
                    <Link to='action-movies'>Action</Link>
                        <li>Comedy</li>
                        <li>Science fiction </li>
                        <li>Horror</li>
                        <li>Family</li>
                        <li>Kids</li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Sidebar
