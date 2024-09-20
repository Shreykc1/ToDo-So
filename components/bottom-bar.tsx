"use client"
import { BottomBarLinks } from '@lib/links'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'


const BottomBar = () => {
    const router  =  useRouter();

  return (
    <section className='sm:hidden flex-center mt-44 h-16 rounded-2xl px-16 w-full'>
        <div className='flex-between h-full gap-14 px-6 mx-2'>
            {
                BottomBarLinks.map((item,index)=>(
                    <div key={index} className='rounded-lg border-2 hover:scale-110' >
                        <button className='h-8 w-8 p-1 max-sm:mx-0 mx-4' onClick={()=>router.push(item.href)}>
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
