import Header from "@/components/Header";
import React from "react";
import "@/app/globals.css";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import image from '../../assets/image-2.png'
import Image from "next/image";
import arrowRight from '@/assets/arrowRight.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import teamOne from '../../assets/team-1.png'
import quote from '../../assets/quote.svg'
import bgImage from '../../assets/bg-image.svg'






const Index: React.FC = () => {

   
    return (
        <div className="">
            <section id="w-full  section-article">
                <Header />

                <div className=" text-black min-h-screen mt-8 flex justify-center">
                    <div className="w-[95%] md:w-[90%] py-[80px] flex flex-col  gap-6">
                        <div className="flex">
                            <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border ">
                                One Faith, One Love, One Hope
                                😚
                            </p>
                        </div>


                        <p className=" font-extrabold font-sans text-[3.1rem] md:text-[5.5rem] leading-[1.1em] ">
                            The community where you meet like minds
                        </p>
                        <div className="mt-4">

                            <div className={`article mb-10 w-full flex flex-col `}>

                                <div className="w-full  ">
                                    <Image
                                        alt="eventimage"
                                        src={image}
                                        // width={1}
                                        // height={800}
                                        className="w-full h-64 md:h-80 lg:h-[20rem] object-cover rounded-lg"
                                    />
                                </div>

                            </div>

                        </div>



                    </div>
                </div>

                <div className="w-full flex flex-col gap-6 relative z-[100] text-white md:w-[100%] p-4 lg:p-[80px] bg-[#020343] ">
                    <div className="flex">
                        <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border ">
                            One Faith, One Love, One Hope
                            😚
                        </p>
                    </div>
                    <p className=" font-extrabold font-sans text-[3.1rem] md:text-[3.5rem] leading-[1.1em] ">
                        Where are we heading to?
                    </p>
                    <div className="statement flex-col lg:flex gap-4 mt-8">
                        <div className="vision flex-1">
                            <h1 className="font-extrabold text-[2.5rem]">Our Vision</h1>

                            <p className="leading-[2rem] mt-4">
                                Our Vision is to create a transformative Christian Tech Hub where faith and technology unite to inspire innovation, foster a community of Christian technologists, and develop ethical solutions for global challenges. Rooted in Christian values, the hub will
                                provide mentorship, resources, and opportunities to advance excellence in both spiritual and technical endeavors, empowering believers to make a meaningful impact in the tech industry and beyond, all for the glory of God.</p>

                        </div>

                        <div className="mission flex-1">
                            <h1 className="font-extrabold text-[2.5rem]">Our Mission</h1>
                            <p className="leading-[2rem] mt-4">


                                Our mission is to empower Christian technologists and innovators by providing a supportive
                                environment that integrates faith and technology. Through mentorship, collaboration, and access to resources, we aim to foster ethical innovation, inspire excellence, and develop solutions that address global challenges while reflecting Christ-centered values.
                            </p>

                        </div>
                    </div>
                    <Image src={bgImage} alt="" className='absolute z-0 top-0 left-1/2 transform -translate-x-1/2  h-screen' />

                </div>
                <div className="  min-h-screen bg-[#010236] text-white  flex justify-center">
                    <div className="w-[95%] md:w-[90%] py-[80px] flex flex-col gap-6">
                        <div className="flex">
                            <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border ">
                                These words refresh our heart
                                🫂
                                💟
                            </p>
                        </div>


                        <p className=" font-extrabold font-sans text-[3.1rem] md:text-[5.5rem] leading-[1.1em] ">
                            Hear from our Community members
                        </p>
                        <div className="mt-4 flex flex-col lg:gap-16 md:flex-row justify-between w-full">
                            <div className="photo border-2 border-primary border-solid">
                                <Image src={teamOne} alt="Community Member" width={300} height={300} />
                            </div>

                            <div className="quote flex md:w-[100%] w-full justify-center flex-col gap-4">
                            <Image src={quote} alt="left" width={60} height={60} />
                                <p>
                                    This Christian Tech Hub uniquely blends faith, innovation, and community, offering mentorship, professional growth,
                                    and opportunities to create impactful, faith-driven solutions in the tech industry.
                                </p>
                                <p className="name text-lg font-semibold">James Tiana</p>
                                <p className="address text-gray-500">Lagos, Nigeria</p>

                                <div className="flex gap-4">
                                    <Image src={arrowLeft} alt="left" width={30} height={30} />
                                    <Image src={arrowRight} alt="right" width={30} height={30} />
                                </div>
                            </div>
                        </div>




                    </div>


                </div>

                <Subscribe />
                <Footer />
            </section>

        </div>
    );
};

export default Index;
