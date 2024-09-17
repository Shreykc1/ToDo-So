"use client"
import { useUserContext } from '@context/AuthContext'
import React from 'react'

const Profile = () => {
    const { user } = useUserContext();
  return (
    <div className='w-full flex-center flex-col'>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Profile
