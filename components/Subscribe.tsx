import Image from 'next/image'
import React from 'react'
import arrow from '@/assets/arrow-right.svg'

const Subscribe = () => {
    return (
        <div>
            <div className="bg-[#35367e] h-[70vh] flex justify-center">
                <div className="w-[95%] md:w-[90%] py-[80px]">
                    <div className="flex flex-col items-center text-white">
                        <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border ">
                            All you need to know, in your inbox 💌
                        </p>

                        <p className=" text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] transition-all duration-200 font-extrabold mt-4">
                            Your Faith & Tech Inbox
                        </p>
                        <div className='lg:w-[40rem] text-center'>
                            <p>Don&apos;t miss out! Stay informed about upcoming events, news, and resources to grow your passion for Christ and technology.</p>
                        </div>

                        <div className="flex max-w-[20rem] w-[40rem] mx-auto lg:flex-row md:flex-row mt-4  justify-center lg:w-full">
                            {/* Input Container */}
                            <div className="flex  items-center rounded-bl-[24px] h-[3rem] p-2 border-2 border-[#B1D5E8] w-full md:w-fit">
                                <input
                                    className="w-full bg-transparent outline-none border-none text-gray-800 placeholder-gray-500 px-2"
                                    placeholder="What’s your email address"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                className="whitespace-nowrap flex text-center rounded-br-[24px] bg-[#201E5A] outline-none rounded-tr-[24px] 
                            text-[#B1D5E8] p-2 border-2 border-[#B1D5E8] hover:bg-white 
                            hover:text-[#03045E] hover:font-bold  items-center justify-center 
                            gap-2 transition-colors duration-200 ease-out group w-full md:w-auto "
                                            >
                                Submit&nbsp;Email 
                                <Image
              src={arrow} // Path to your image in the public folder
              alt="BTE Logo"
              width={80} // Adjust the width as needed
              height={80} // Adjust the height as needed
              // apply image filter of grayscale to the image
              className="mr-2  grayscale"
            />

                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Subscribe

