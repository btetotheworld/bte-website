import FeturedProgramme from '@/components/FeturedProgramme'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import '@/app/globals.css';
import { eventsData } from '@/components/Events/eventList'
import Image from 'next/image'

const Index = () => {
    return (
        <div className="w-full">
            <section id="section-article">

                <Header />

                <div className="w-[95%] md:w-[90%] flex flex-col gap-4 p-6 md:p-10 lg:p-14 py-[7rem] mx-auto">
                    <div className="w-fit mt-8">
                        <p className="px-4 py-2 rounded-full border border-[#201E5A] text-sm">
                            You’d always get value from us 🧠
                        </p>
                    </div>
                    <p className="font-extrabold text-black text-[2rem] md:text-[3rem] lg:text-[5rem] leading-[1.1em]">
                        All Events
                    </p>
                </div>

                <FeturedProgramme />

                <div className="bg-white min-h-screen flex justify-center">
                    <div className="w-[95%] md:w-[90%] py-16 mx-auto">
                        <div className="flex">
                            <p className="px-4 py-2 rounded-full border border-[#201E5A] text-[#797981] text-sm">
                                What else will be going on? 😎
                            </p>
                        </div>

                        <p className="text-[#121218] text-[1.8rem] md:text-[2rem] font-extrabold mt-4">
                            Other Events
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {eventsData.map((event, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <Image
                                        alt="event image"
                                        src={event.image}
                                        width={500}
                                        height={300}
                                        className="w-full h-40 md:h-48 lg:h-56 object-cover"
                                    />
                                    <div className="p-4 flex flex-col flex-1">
                                        <p className="text-[#4D4D56] text-sm">{event.date}</p>
                                        <p className="text-[#121218] text-[1.2rem] font-bold mt-2">
                                            {event.title}
                                        </p>
                                        <p className="text-sm mt-2">{event.description}</p>

                                        <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center rounded-b-[24px] rounded-tr-[24px] text-black py-2 px-3 border-2 border-[#B1D5E8] hover:bg-white hover:text-[#03045E] hover:font-bold mt-2 flex items-center justify-center gap-2 transition-colors duration-200 ease-out group w-full md:w-fit"
                              >
                                <span className="whitespace-nowrap">Attend the Event</span>
                              </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Subscribe />
                <Footer />
            </section>
        </div>
    )
}

export default Index;
