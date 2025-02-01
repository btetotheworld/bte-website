import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <div className="bg-[#35367e] min-h-screen flex justify-center">
                <div className="w-[95%] md:w-[90%] py-[80px]">
                    <div className="flex flex-col items-center text-white">
                        <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border ">
                            All you need to know, in your inbox 😎
                        </p>

                        <p className=" text-[2rem] font-extrabold mt-4">
                            Your Faith & Tech Inbox
                        </p>
                        <div className='w-[40rem] text-center'>
                            <p>Don't miss out! Stay informed about upcoming events, news, and resources to grow your passion for Christ and technology.</p>
                        </div>

                        <div className="flex mx-auto flex-col md:flex-row mt-4  justify-center w-full">
                            {/* Input Container */}
                            <div className="flex items-center rounded-bl-[24px] h-[3rem] p-2 border-2 border-[#B1D5E8] w-full md:w-fit">
                                <input
                                    className="w-full bg-transparent outline-none border-none text-gray-800 placeholder-gray-500 px-2"
                                    placeholder="What’s your email address"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                className="text-center rounded-br-[24px] bg-[#201E5A] outline-none rounded-tr-[24px] 
                            text-[#B1D5E8] p-2 border-2 border-[#B1D5E8] hover:bg-white 
                            hover:text-[#03045E] hover:font-bold flex items-center justify-center 
                            gap-2 transition-colors duration-200 ease-out group w-full md:w-auto"
                                            >
                                Submit Email
                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Subscribe

