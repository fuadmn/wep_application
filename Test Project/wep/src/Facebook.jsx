import React from 'react'

const Facebook = () => {
  return (
    <>
      
      <div className="bg-[#d09eff] h-screen w-screen flex justify-center items-center">
        <div className="h-110 w-180 bg-[#746a] rounded-2xl p-3 text-white">
          <div className="flex justify-between items-center">

            <div className="flex">
                <div className="h-13 w-13 rounded-full">
                    <img className='h-13 w-13 rounded-full' src="https://scontent.fmgq3-1.fna.fbcdn.net/v/t39.30808-1/451586581_3820329051545598_4359776410239785063_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=xSJp9ZPtckAQ7kNvwE3pI4b&_nc_oc=AdqEOcIJa6uW-TeW0s_G7H0G5juAGew63_u4N1xBOQdV8AVOUqiDNCFIogpRgPc0IxM&_nc_zt=24&_nc_ht=scontent.fmgq3-1.fna&_nc_gid=vmvwATAN7aVwi9RTJL3g9A&_nc_ss=7a32e&oh=00_AfzaZZe3qv-eoTytNzl0XOsvzcm4hS94DK6x63GjilF0Pw&oe=69CE5918" alt="" />
                </div>
                <div className="ml-3">
                <h1 className='font-bold text-[0.8rem]'>Ibrahim Hussan Mohamuuud</h1>
                <div className="">
                    <h1 className='text-gray-300'>8h</h1>
                   <img src="" alt="" />
                </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <div className="flex">
                <div className="h-1.5 w-1.5 bg-gray-50 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-gray-50 rounded-full mx-1"></div>
                <div className="h-1.5 w-1.5 bg-gray-50 rounded-full"></div>
            </div>
            <h1 className='text-[1.3rem] font-bold ml-3 cursor-pointer'>X</h1>
            </div>
          </div>

          <div className="h-[80%] w-full bg-red-50 grid grid-cols-2 grid-rows-3 gap-1">
            <div className=" row-span-2 bg-blue-300"></div>
            <div className="bg-blue-900"></div>
            <div className="bg-blue-100"></div>
            <div className="bg-blue-100"></div>
            <div className="bg-blue-100"></div>
          </div>
          <div className="h-[1.6rem] flex gap-5">
             <div className="flex justify-center items-center  h-6 w-55">Like</div>
             <div className="flex justify-center items-center  h-6 w-55">Comment</div>
             <div className="flex justify-center items-center  h-6 w-55">Share</div>
          </div>

        </div>
     
      </div>

    </>
  )
}

export default Facebook
