import decode, {JwtPayload} from 'jwt-decode'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { IUser } from '../interface'
import { ActionType } from '../redux/action-types'
import {Menu, Transition} from '@headlessui/react'
import avatar from '../images/avatar.png'
const Navbar = () => {

    const [user, setUser] = useState<IUser | null>(JSON.parse(localStorage.getItem('user') as string))
    const navigate =   useNavigate()
    const dispatch = useDispatch()
    const location =  useLocation()
    
  

    const logOut = () => {
        dispatch({type: ActionType.LOG_OUT})

        navigate('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodeToken: JwtPayload = decode(token)
            if((decodeToken?.exp as JwtPayload) < new Date().getTime()) logOut()
        }       
    }, [location])

    return (
       <header>
           <nav className=' bg-black  bg-opacity-80 h-40 overflow-hidden'>
               <div className='flex flex-row items-center lg:justify-between md:justify-around mt-6 mb-6'>
                   <div className='lg:ml-10'>
                       <input type="text" name="" id="" className='rounded-full px-3 py-1 focus:outline-none w-72 lg:w-96' placeholder='search...'/>
                   </div>
                   <div className='flex flex-row  items-center lg:mr-5'>
                       <p className='text-xl text-white'>{user?.result.name}</p>
                       <Menu as="div" className="relative ml-3">
                           <Menu.Button>
                               <img src={avatar} alt="" className='w-12 h-12 '/>
                           </Menu.Button>
                           <Transition as={Fragment}   
                 enter='transition ease-out duration-100'
                 enterFrom='transform opacity-0 scale-95'
                 enterTo='transfrom opacity-100 scale-100'
                 leave='transition ease-in duration-75'
                 leaveFrom='transform opacity-100 scale-100'
                 leaveTo='transform opacity-0 scale-95' >
                     <Menu.Items className="mt-2 w-32 rounded-md z-20 bg-white origin-top-right absolute py-1 right-0 ring-1 ring-black focus:outline-none flex flex-col">
                         <Menu.Item>
                            <button className='py-2 font-medium' onClick={logOut}>Log out</button>
                         </Menu.Item>
                     </Menu.Items>
                           </Transition>
                       </Menu>
                   </div>
               </div>
           </nav>
       </header>
    )
}

export default Navbar
