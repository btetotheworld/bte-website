import React from "react";
import { eventsData } from "@/components/Events/eventList";
import Image from "next/image";

const Events = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="w-[95%] md:w-[90%] py-[80px]">
        <div className="flex">
          <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border text-[#797981]">
            What else will be going on? 😎
          </p>
        </div>

        <p className="text-[#121218] text-[2rem] font-extrabold mt-4">
          Upcoming Events
        </p>
        <div className="mt-4">
          {eventsData.map((event, index) => (
            <div key={index} className={`article mb-10 w-full flex flex-col-reverse md:flex-row 
                ${event.imageposition === 'right' ? 'lg:flex-row-reverse ' : 'lg:flex-row'}`}>
              <div className="  flex-1">
                <Image
                          alt="eventimage"
                          src={event.image}
                          // width={1}
                          // height={800}
                          className="w-full h-64 md:h-80 lg:h-[20rem] object-cover rounded-lg"
                        />
              </div>
              <div className="article-text flex-1 justify-between flex flex-col p-4 gap-4">
                <p className="text-[#121218] text-[1.5rem] font-extrabold mt-4">
                  {event.title}
                </p>
                <div>
                  <p>{event.description}</p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[#17171F] text-[0.6rem] font-bold">Date:</p>
                    <p className="text-[#4D4D56] text-[0.8rem]">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-[#17171F] text-[0.6rem] font-bold">Time:</p>
                    <p className="text-[#4D4D56] text-[0.8rem]">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-end">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
