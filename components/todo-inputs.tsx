import React from 'react'
import { Checkbox } from './ui/checkbox'

const TodoInput = () => {
  return (
    <section className='w-full border border-gray-300 rounded-md sm:h-10 h-8 flex-between px-5'>
        <Checkbox className='rounded-full' priority={"high"}/>
    </section>
  )
}

export default TodoInput
