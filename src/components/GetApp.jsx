import React from 'react'

const GetApp = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center bg-slate-200 py-[4rem] lg:px-[4rem]">
            {/* Left Section */}
            <div className="w-full md:w-[80%] p-4 flex flex-col justify-center items-center lg:items-start py-[2rem]">
                {/* Heading */}
                <h1 className="text-4xl font-bold mb-4 text-[--secondary] ">Amrutam home App</h1>

                <p className="text-lg text-gray-700 mb-4 w-[100%] lg:w-[80%]">
                The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
                </p>

                <p className='text-2xl  mb-4 w-[100%] lg:w-[80%]' >Get a diet & lifestyle consultation with ayurvedic experts across the globe </p>
                
                <h1 className='text-4xl font-bold my-8' >Get the App now</h1>
                <div className="flex space-x-4 px-4">
                    <img
                        src="./playStore.png"
                        alt="Play Store"
                        className="w-1/2 max-w-xs"
                    />
                    <img
                        src="./appStore.png"
                        alt="App Store"
                        className="w-1/2 max-w-xs"
                    />
                </div>
            </div>

            <div className="w-full md:w-[80%] p-4 flex justify-center items-center my-[2rem]">
                <img
                    src="./iPhone.png"
                    alt="iPhone"
                    className="w-[80%] sm:w-[40%]  md:w-[50%] lg:w-[40%]"
                />
            </div>
        </div>
    );
}

export default GetApp