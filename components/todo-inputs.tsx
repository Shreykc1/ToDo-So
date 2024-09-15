"use client"
import { useEffect, useRef, useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { revalidatePath } from 'next/cache';
import { Flag } from 'lucide-react';
import { FaFlag } from 'react-icons/fa6';



const TodoInput = ({
                id,
                title,
                setTitle,
                isChecked,
                setIsChecked,
                status,
                setStatus,
                flag
}:TodoDrawerProps) => {
    const statusRef = useRef(null);
    const todoRef = useRef(null);

    const updateStatus = () => {
        if (isChecked) {
            //@ts-ignore
            setStatus('done');
        } else {
            //@ts-ignore
            setStatus('read');
        }
    };


    useEffect(() => {
        updateStatus();
    }, [isChecked]);

    useGSAP(()=>{
        gsap.from(statusRef.current,{
            y:50,
            duration:0.2
        });
    },[isChecked]);

    useGSAP(()=>{
        gsap.to(todoRef.current,{
            opacity:1,
            duration:0.5,
            delay:0.8
        })
    },[]);


    useEffect(()=>{
        const changeStatus = async ( id: string, isChecked: boolean, status:string ) => {
            const response = await fetch("/api/todo/todo-input", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    isChecked,
                    status
                }),
            });

            const data = await response.json();
        };
        changeStatus(id!,isChecked,status);

    },[isChecked, status]);
    return (
        <section suppressHydrationWarning className='w-full border border-gray-400 rounded-md sm:h-14 h-12 flex-between px-5 opacity-0 '
        ref={todoRef}>
            <div className='sm:gap-7 gap-3 flex items-center overflow-hidden'>
                <Checkbox
                className='rounded-full'
                priority={flag}
                checked={isChecked}
                onCheckedChange={(checked:any) => {
                    //@ts-ignore
                    setIsChecked(checked);
                }}
                onClick={(e) => e.stopPropagation()}
                 />
                <h2 className='font-semibold font-sf sm:text-lg text-sm overflow-hidden cursor-default'>{title}</h2>
            </div>
            <div className='h-6 block overflow-hidden cursor-default'>
                <p className='text-gray-500 max-sm:text-sm max-sm:mt-[2px]' ref={statusRef}>{status}</p>
            </div>

        </section>
    )
}

export default TodoInput
