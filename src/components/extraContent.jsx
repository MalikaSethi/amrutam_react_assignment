// import React from 'react'
// import Heading from './Heading'
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

// const TestimonialSlider = () => {

//     const handleSlider = () =>{

//     }
//     return (
//         <div className='testimonialContainer w-full min-h-[80vh] bg-slate-100 flex justify-center items-center flex-col relative'>
//             <Heading heading="STORIES FROM OUR VALUED CUSTOMERS!" />

//             <div className="sliderCardsWrapper w-[70%] h-[500px] bg-red-200 flex justify-start items-center gap-[20px] overflow-hidden ">

//                 <div className="slideContainer flex justify-start items-center w-full translate-x-[-0%]">
//                     <div className="sliderCardContainer flex justify-center items-center gap-[20px] flex-shrink-0 bg-slate-300 w-full  p-4">

//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="sliderCardContainer flex justify-center items-center gap-[20px] flex-shrink-0 w-full bg-slate-800 p-4">

//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="sliderCardContainer flex justify-center items-center gap-[20px] flex-shrink-0 w-full bg-blue-300 p-4">

//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card flex flex-col pb-11 bg-white rounded-3xl border border-solid shadow-lg border-zinc-300 max-w-[388px] overflow-hidden">
//                             <div className="justify-center items-start px-7 py-4 w-full text-lg font-bold tracking-normal leading-5 text-black bg-violet-100">
//                                 Consulted for Skin
//                             </div>
//                             <div className="flex flex-col items-start px-6 mt-8 w-full">
//                                 <div className="flex gap-5 justify-between ml-3.5 w-full rounded-3xl">
//                                     <div className="flex gap-3.5">
//                                         <div className="flex flex-col justify-center">
//                                             <div className="shrink-0 rounded-full bg-neutral-600 h-[60px] w-[60px]" />
//                                         </div>
//                                         <div className="text-xl font-bold leading-7 text-neutral-700">
//                                             <span className="font-medium">Sophie Moore</span>
//                                             <br />
//                                             <span className="text-lg ">Chennai </span>
//                                         </div>
//                                     </div>
//                                     <div className="self-start text-base leading-7 text-black">
//                                         17/02/24
//                                     </div>
//                                 </div>
//                                 <img
//                                     loading="lazy"
//                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab772828c0db2f584dd907bb43940aa7bf9f43b51340618ad70f36cb403dffdd?"
//                                     className="mt-5 ml-4 max-w-full aspect-[5.88] w-[140px]"
//                                 />
//                                 <div className="mt-3.5 ml-2.5 text-2xl font-bold leading-6 text-zinc-800">
//                                     “One of a kind service”
//                                 </div>
//                                 <div className="mt-3 text-lg leading-8 text-neutral-600">
//                                     Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam
//                                     sit amet nisl suscipit adipis.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="left text-3xl absolute top-[50%] left-[10%] "> <FaArrowLeft /> </div>
//             <div className="right text-3xl absolute top-[50%] right-[10%] "> <FaArrowRight /> </div>
//         </div>
//     )
// }

// export default TestimonialSlider