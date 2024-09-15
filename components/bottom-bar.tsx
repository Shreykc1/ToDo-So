"use client"
import { BottomBarLinks } from '@lib/links'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'


const BottomBar = () => {
    const router  =  useRouter();

  return (
    <section className='sm:hidden flex items-center fixed mx-4 bottom-2 h-16 w-[92%] rounded-2xl shadow-2xl px-7'>
        <div className='flex-between h-full gap-14'>
            {
                BottomBarLinks.map((item,index)=>(
                    <div key={index} className='rounded-lg border-2 hover:scale-110' >
                        <button className='h-10 w-10 p-1' onClick={()=>router.push(item.href)}>
                            {item.icon}
                        </button>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default BottomBar
