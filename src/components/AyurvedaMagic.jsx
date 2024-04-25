import React from 'react'
import Heading from './Heading'
import { AyurvedicCardData } from '../utils/Data'
const AyurvedaMagix = () => {

  
  const color = 'red'
  return (
    <>
      <div className=" w-full min-h-[60vh] py-16">

        <Heading heading="Discover Ayurveda's magic with us" subcontent="Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
        a totally effective approach for a better life." />

        <div className="imageContainer mt-[4rem]  ">

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-between items-center  ">

            <div className=" rounded overflow-hidden  m-4 hidden grid-cols-2 lg:block lg:order-1 w-[100%]  p-4">

              {AyurvedicCardData.slice(0, 3).map((item, index) => (
                <div className={`my-4  py-4 flex justify-center items-center flex-col-reverse lg:flex-col-reverse xl:flex-row xl:justify-end ${index === 1 ? "xl:mr-[3rem]" : null}`} key={index}>

                  <div className="mb-4 lg:text-center xl:text-end ">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-center p-4 rounded-full ml-4 w-[6rem] h-[6rem]   overflow-hidden" style={{ backgroundColor: item.iconColor }}>
                    <img className="w-[50px] h-[50px] object-contain" src={item.icon} alt="Icon" />
                  </div>
                </div>
              ))}

            </div>


            <div className="imgContainer flex justify-center items-center  order-1 lg:order-2 ">

              <div className="img bg-[url('./meditateCover.png')] w-[60%] h-auto flex justify-center items-center  bg-no-repeat bg-cover bg-center md:w-[50%] lg:w-[80%] xl:w-[70%]">

                <img src="./meditate.png" alt="" className='' />
              </div>

            </div>

            <div className=" rounded overflow-hidden  m-4 hidden  grid-cols-2 lg:block lg:order-3 w-[100%] p-4">

              {AyurvedicCardData.slice(3, 6).map((item, index) => (
                <div className={`my-4  py-4 flex justify-center items-center flex-col-reverse lg:flex-col-reverse xl:flex-row-reverse xl:justify-end ${index === 1 ? "xl:ml-[3rem]" : null}`} key={index}>

                  <div className="mb-4 lg:text-center xl:text-start ">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-center p-4 rounded-full mr-4 w-[6rem] h-[6rem]   overflow-hidden" style={{ backgroundColor: item.iconColor }}>
                    <img className="w-[50px] h-[50px] object-contain" src={item.icon} alt="Icon" />
                  </div>
                </div>
              ))}

            </div>


            {/* visible on small device  */}

            <div className={` rounded overflow-hidden m-3  grid grid-cols-2 lg:hidden order-1 `}>

              {AyurvedicCardData.map((item, index) => (

                <div className="p-3 m-2 flex justify-center items-center text-center h-[300px] md:h-[250px]  flex-col-reverse border-2 border-[--border] rounded-xl lg:flex-row" key={index}>

                  <div className="mb-4">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-gray-700 text-sm">{item.subtitle}</p>
                  </div>

                  <div className={`flex items-center justify-center p-4 rounded-full w-[5rem] h-[5rem] mb-4 `} style={{ backgroundColor: item.iconColor }}  >
                    <img className="w-full h-auto" src={item.icon} alt="Icon" />
                  </div>


                </div>

              ))}



            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AyurvedaMagix