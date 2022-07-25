import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { login, logout } from '../slices/userSlice'

const newUser = {
    name: 'Erick',
    email: 'erickpaulsweeney@gmail.com',
    location: 'Philippines'
}

export default function Login() {
    const dispatch = useDispatch()

    return (
        <div className='buttons'>
            <button onClick={() => dispatch(login(newUser))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
