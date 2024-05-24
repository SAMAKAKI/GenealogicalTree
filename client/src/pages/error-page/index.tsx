import { Button } from '@nextui-org/react'
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='h-[90vh] flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-4xl font-bold'><span className='text-[#F31260]'>Error 404:</span> Page not Found</h1>
      <Link to={'/'}>
        <Button color='primary' size='lg' className='text-lg'><IoArrowBack />Back to Home</Button>
      </Link>
    </div>
  )
}
