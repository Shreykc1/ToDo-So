"use client"
import { useUserContext } from '@context/AuthContext'
import Image from 'next/image';
import React from 'react'

const Profile = () => {
    const { user } = useUserContext();
    return (
        <div className='w-full flex-center flex-col'>

            <div className='flex-col w-full flex-center'>
                <Image
                    src={user.imageURL}
                    alt='PFP'
                    width={200}
                    height={200}
                    className='rounded-full'
                />
                <h1 className='mt-8 h1-bold'>{user.name}</h1>
            </div>

        </div>
    )
}

export default Profile
