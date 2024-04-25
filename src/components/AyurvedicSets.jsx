import React from 'react'
import Heading from './Heading'
import { AyurvedicSetsData } from '../utils/Data'
const AyurvedicSets = () => {
    return (
        <div className='w-full min-h-[90vh] py-[3rem] bg-[--primary] flex justify-center items-center flex-col'>
            <Heading heading="What sets Ayurvedic consultations apart?" />

            <div className="cardsContainer w-[100%] px-[2rem] lg:px-[4rem] flex justify-center items-center flex-wrap  lg:w-[80%] ">
                {AyurvedicSetsData.map((item, index) => (
                !item.img ? (
                    
                    <div className={`card text-start rounded-2xl border-t-[4px] border-[--secondary]  flex justify-center items-center flex-col flex-wrap bg-[--white]  m-6 p-4 w-[full]  lg:text-center ${index === 0 ? "md:w-[500px] md:h-[300px]" : "md:max-w-[250px]"} `} key={index}>
                            <>
                                <h1 className='text-3xl my-3 font-medium text-[--secondary]'>{item.title}</h1>
                                <p className='text-lg lg:text-xl'> {item.subtitle}</p>
                            </>
                        </div>
                    ) : (

                        <div className={`card text-center rounded-2xl overflow-hidden flex justify-center items-center flex-col   bg-[--white] m-6 w-[full] md:w-[250px] bg-red-500 ${index === 0 ? "md:w-[500px] md:h-[300px]" : "md:w-[250px]"}`} key={index}>
                            <img src={item.img} alt="" className='w-[300px] h-[300px] object-cover'/>
                        </div>
                    )

                ))}
            </div>
        </div>
    )
}

export default AyurvedicSets
