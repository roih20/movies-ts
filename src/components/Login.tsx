import React, { FormEvent, useState } from 'react'
import { ChangeEvent } from 'react'
import { ChangeEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ILoginUser, IRegisterUser } from '../interface'
import { signIn, signUp } from '../redux/action-creators'

type Change = ChangeEvent<HTMLInputElement>
type Submit = FormEvent<HTMLFormElement>

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false)
    const [loginForm, setLoginForm] = useState<ILoginUser>({
        email: '',
        password: ''
    })
    const [registerForm, setRegisterForm] = useState<IRegisterUser>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

   

    const switchState = () => {
        setIsSignUp((prev) => !prev)
        setLoginForm({
            email: '',
        password: ''
        })
        setRegisterForm({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    const handleSubmit = (e: Submit) => {
        e.preventDefault()



        if(isSignUp) {
            dispatch(signUp(registerForm))
            console.log(registerForm, 'User created')
        }else {
            dispatch(signIn(loginForm, navigate))
        }
    }



    const handleChangeRegister = (e: Change) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value})
    }

    const handleChangeLogin = (e: Change) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    return (
        <div className='pt-36'>
             <div className='container mx-auto my-auto'>
            <div className='flex flex-col items-center'>
              <h1 className='text-center mt-10 text-2xl mb-6 '>{isSignUp ? 'Register' : 'Sign In'}</h1>
               <div className='max-w-md w-full p-4  rounded-lg  shadow-2xl border border-gray-300 border-opacity-80'>
               <form  className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                    {
                        isSignUp && (
                            <>
                       <div>
                           <Input type='text' placeHolder='First Name' nameInput='firstName' value={registerForm.firstName} handleChange={handleChangeRegister} required={true}/>
                       </div>

                       <div>
                           <Input  type='text' placeHolder='Last Name' nameInput='lastName' value={registerForm.lastName} handleChange={handleChangeRegister} required={true}/>
                       </div>
                      </>
                        )
                    }
                    <div>
                        <Input  type='email' placeHolder='Email' nameInput='email' value={isSignUp ? registerForm.email : loginForm.email} handleChange={isSignUp ? handleChangeRegister : handleChangeLogin} required={true}/>
                    </div>
                    <div>
                        <Input type='password' placeHolder='Password' nameInput='password' value={isSignUp ? registerForm.password : loginForm.password} handleChange={isSignUp ? handleChangeRegister : handleChangeLogin} required={true}/>
                    </div>
                    <button type='submit' className='bg-blue-500 font-medium text-white px-3 py-4 text-lg rounded-md'>{isSignUp ? 'Create User' : 'Sign In'}</button>
                    <div className='text-center '>Or</div>
                    <hr className='border border-gray-200'/>
                    <button type='button' className='bg-lime-500 font-medium text-white px-3 py-3 text-lg rounded-md self-center w-52' onClick={switchState}>{isSignUp ? 'Sign in' : 'Register Here'}</button>
                </form>
               </div>
            </div>
        </div>
        </div>
    )
}

interface IProps {
    type: string;
    placeHolder: string;
    nameInput: string
    value: string
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    required: boolean
}

const Input = ({type, placeHolder, nameInput, value, handleChange, required}: IProps) => {
    return (
        <input type={type} placeholder={placeHolder} className='w-full rounded-md focus:outline-none border border-gray-300  px-3 py-4 text-lg ' name={nameInput} value={value} onChange={handleChange} required={required}/>
    )
}

export default Login
