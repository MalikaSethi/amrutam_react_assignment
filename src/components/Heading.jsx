import React from 'react'

const Heading = ({heading, subcontent}) => {
  return (
    <>
        <div className="headingContainer flex justify-center items-center flex-col px-4 text-center mb-1">

            <h1 className='text-3xl font-bold text-[--secondary] md:text-4xl lg:text-6xl lg:border-b-[4px] lg:border-[#C3D0C4] py-4 lg:py-2 '>{heading}</h1>

            <p className='text-xl text-[--text] leading-8 w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%]  lg:py-6 lg:text-2xl'>{subcontent}</p>
        </div>
    </>
  )
}

export default Heading