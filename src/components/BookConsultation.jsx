import React from 'react'
import Button from './Button'
const BookConsultation = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[50vh] lg:h-[70vh]"
            style={{ backgroundImage: "url('./medicineCover.png') "  }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 lg:w-[60%] lg:leading-[5rem]">Ready to restore harmony in your mind, body and spirit?</h1>

                <Button content="Book a consultation"/>
            </div>
        </div>
    )
}

export default BookConsultation