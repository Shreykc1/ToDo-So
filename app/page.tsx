"use client"
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import TodoDrawer from '@components/drawer';


const Home = () => {
    const titleRef = useRef(null);

    // TODO: Fetch Data from user ID by api
    const [title, setTitle] = useState('Water plants in the morning🌱');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('read');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState();
    console.log(date)
    useEffect(()=>{
        gsap.to(
            titleRef.current,
            {
                y : 20,
                duration: 0.5,
                opacity:1
            }
        )
    },[])

  return (
    <div className='' suppressHydrationWarning >
        <h1 ref={titleRef} className='sm:text-7xl text-5xl font-bold opacity-0 font-neue'> Todo - <span className='font-normal'>草加</span>
        </h1>

        <div className='mt-44'>
                <TodoDrawer
                title={title}
                setTitle={setTitle}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                status={status}
                setStatus={setStatus}
                date={date}
                //@ts-ignore
                setDate={setDate}
                description={description}
                setDescription={setDescription}
                />
        </div>
    </div>
  )
}

export default Home
