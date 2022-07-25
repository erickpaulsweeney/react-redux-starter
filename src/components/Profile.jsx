import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export default function Profile() {
    const user = useSelector(state => state.userInfo.user)

    return (
        <div className='info'>
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
        </div>
    )
}