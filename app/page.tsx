"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Notebook from '@components/notebook';
import TodoInput from '@components/todo-inputs';


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
    <div className='' >
        <h1 ref={titleRef} className='text-5xl font-bold opacity-0'> ToDo - <span className='font-normal'>草加</span></h1>

        <div className='mt-44'>
            <TodoInput />
        </div>
    </div>
  )
}

export default Home
