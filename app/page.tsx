"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'


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
    <div className='text-5xl font-bold opacity-0' ref={titleRef}>
        ToDo - <span className='font-normal'>草加</span>
    </div>
  )
}

export default Home
