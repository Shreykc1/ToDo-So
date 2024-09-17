import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='flex-center w-full animate-spin'><Loader/></div>
  )
}

export default loading
