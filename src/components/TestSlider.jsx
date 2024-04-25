import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { userFeedback } from "../utils/Data";
import "./style.css";
import { BiStar } from "react-icons/bi";

const TestSlider = () => {
    return (
        <div className="containerrr w-full h-full px-[2rem] lg:px-[4rem]">
            <Swiper
                className="mySwiper"
                spaceBetween={100}
                slidesPerView={1}
                breakpoints={{
                    800: {
                        slidesPerView: 2
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }}
            >
                {userFeedback.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card flex flex-col flex-shrink-0  pb-11   bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 w-full  overflow-hidden m-4">
                            <div className={`justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black ${item.consulted === "Consulted for hair" ? "bg-[#ECFEE7]" : "bg-[#ECE7FF]"}`}>
                                {item.consulted}
                            </div>
                            <div className="flex flex-col items-start px-6 mt-8 w-full">
                                <div className="flex gap-5 justify-between  w-full rounded-3xl flex-col md:flex-row">

                                    <div className="flex gap-3.5  text-start ">
                                        <div className="flex flex-col justify-center">
                                            <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
                                        </div>
                                        <div className="text-xl font-bold leading-7 ">
                                            <span className="font-medium">{item.name}</span>
                                            <br />
                                            <span className="text-lg ">{item.location} </span>
                                        </div>
                                    </div>

                                    <div className="self-start text-base leading-7 text-black">
                                        {item.date}
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    {[...Array(item.stars)].map((_, i) => (
                                        <BiStar key={i} className="text-yellow-500 text-3xl" />
                                    ))}
                                </div>
                                <div className="mt-3.5  text-xl font-semibold leading-6 lg:text-2xl ">
                                    {item.feedback}
                                </div>
                                <div className="mt-3 text-lg leading-8 text-neutral-600  text-start">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


export default TestSlider