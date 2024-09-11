"use client"
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import TodoDrawer from '@components/drawer';
import { useUserContext } from '@context/AuthContext';



const Home = () => {
    const titleRef = useRef(null);

    // TODO: DATA FETCHED FROM API JUST DISPLAY IT
    const [title, setTitle] = useState('Water plants in the morning🌱');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('read');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState();
    const [flag, setFlag] = useState(false);
    const [allTodos, setAllTodos] = useState([]);
    const { user, isLoading } = useUserContext();
    console.log(allTodos);

    useEffect(()=>{
        gsap.to(
            titleRef.current,
            {
                y : 20,
                duration: 0.5,
                opacity:1
            }
        )
    },[]);


    useEffect(() => {
        const fetchTodos = async (userId: string) => {
            const response = await fetch("/api/user/allTodos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId
                })
            });

            const data = await response.json();
            setAllTodos(data);
        };


        if (!isLoading && user?.id) {
            console.log(user.id);
            fetchTodos(user.id);
        }
    }, [user, isLoading]);

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
                flag={flag}
                setFlag={setFlag}
                />

                {/* {
                    allTodos.map((todo)=>(
                        <TodoDrawer
                title={todo.title}
                setTitle={setTitle}
                isChecked={todo.isChecked}
                setIsChecked={setIsChecked}
                status={todo.status}
                setStatus={setStatus}
                date={todo.date}
                //@ts-ignore
                setDate={setDate}
                description={description}
                setDescription={setDescription}
                flag={flag}
                setFlag={todo.setFlag}
                />
                    ))
                } */}
        </div>
    </div>
  )
}

export default Home
