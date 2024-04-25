
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiStar } from "react-icons/bi";

// Import Swiper styles
import { RiGraduationCapFill } from "react-icons/ri";
import { RiCapsuleLine } from "react-icons/ri";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';
import { expertData } from '../utils/Data';
import Heading from './Heading';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const AyurvedaExpert = () => {

    return (

        <div className="w-full min-h-[100vh] px-[2rem] lg:px-[4rem] py-[2rem]  lg:py-[4rem] ">

            <Heading heading="Meet our Ayurveda experts " />

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                breakpoints={{
                    800: {
                        slidesPerView: 2
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }}
                className="mySwiper h-[70vh] lg:h-[70vh]  "
            >

            {expertData.map((item, index) => (
                <SwiperSlide key={index} className='swiperSlide mx-4 '>
                    <div className="card flex flex-col justify-center items-center  flex-shrink-0   bg-[--primary] rounded-3xl border border-solid shadow-lg border-zinc-300 w-full overflow-hidden  ">
                        
                        <div className="flex flex-col items-center justify-center  px-6 mt-8 mb-8  bg-[--primary] w-[100%]">
                            <div className="imgContainer w-[50%] md:w-[30%] xl:w-[50%] flex justify-center items-center my-8" >
                                <img src={item.image} alt="" className='object-cover  ' />
                            </div>
                            <h1 className='text-2xl font-semibold '>{item.name}</h1>
                            <h1 className='text-lg font-normal text-[--text] my-2 lg:text-xl'>{item.degree}</h1>
                            <span className='flex justify-center items-center gap-3 my-2'><RiGraduationCapFill /> {item.experience}</span>
                            <span className='flex justify-center items-center gap-3 my-2 bg-[#3a643b17] py-2 px-4 rounded-2xl text-[--secondary]'><RiCapsuleLine /> {item.specialist}</span>
                        </div>
                            <button className='w-full bg-[--secondary] p-4 text-[white] text-xl'>Book a session</button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div >
    )
}

export default AyurvedaExpert



// export default function App() {
//   return (
//     <>
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
