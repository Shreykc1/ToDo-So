"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Notebook from '@components/notebook';

import TodoDrawer from '@components/drawer';


const Home = () => {
    const titleRef = useRef(null);

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
        <h1 ref={titleRef} className='sm:text-7xl text-5xl font-bold opacity-0 font-neue'> ToDo - <span className='font-normal'>草加</span>
        </h1>

        <div className='mt-44'>
            {/* <TodoInput /> */}
                <TodoDrawer />
        </div>
    </div>
  )
}

export default Home
