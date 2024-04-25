import React from 'react'

const Button = ({content}) => {
  return (
    <>
        <button className='bg-[#3A643B] z-10 py-4 px-5 my-8 text-lg  text-white rounded-2xl md:text-xl md:py-8 md:px-10 lg:text-2xl'>{content}</button>
    </>
  )
}

export default Button