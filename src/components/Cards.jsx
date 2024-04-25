import React from "react";
import Heading from "./Heading";
import { cardsData } from "../utils/Data";
const Cards = () => {
    return (
        <div className="cardBigContainer w-full min-h-[60vh] py-[5rem] flex justify-center items-center flex-col bg-white">

            <Heading heading="Our ayurvedic approach" subcontent="At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient's body type, medical history, and current health conditions."/>

            <div className="flex flex-wrap justify-center  w-[90%] mt-[5rem] lg:w-[80%]">
                {cardsData.map((item, index) => (
                    <div className="w-full sm:w-1/2 md:w-[350px]  p-4" key={index}>
                        <div className="bg-[--primary] rounded-3xl shadow-lg p-6 flex justify-center items-center flex-col h-[350px] border-t-[4px] border-[--secondary] text-center lg:h-[300px]">

                            <div className="bg-[--secondary] text-white rounded-fullflex items-center justify-center mb-4 p-[1rem] rounded-full w-[60px] h-[60px] flex md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]" >
                                <h1 className="text-4xl font-semibold lg:text-5xl">{index+1}</h1>
                            </div>
                            <h2 className="text-lg font-semibold mb-2 text-[--secondary] lg:text-xl">{item.title}</h2>
                            <p className="text-gray-700">{item.subContent}</p>
                        </div>
                    </div>
                ))}


                
            </div>
        </div>
    );
};

export default Cards;
