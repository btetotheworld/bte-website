import Header from '@/components/Header'
import React from 'react'
import "@/app/globals.css";
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Grid } from '@mui/material';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import bgImage from "../../assets/bg-image.svg"
import Image from 'next/image';

interface FormValues {
  fullName: string,
  email: string,
  phoneNumber: string,
  subject: string,
  message: string
}

const validationSchema = Yup.object({
  fullName: Yup.string().min(3, "name must be more than 3 characters")
    .required("full Name is reqiured"),
  email: Yup.string().email("Invalid email").required("Email is reqiured"),
  phoneNumber: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Phone number is required"),
  subject: Yup.string().min(3, "subject must be 8 character"),

  message:Yup.string().min(3, "message must be 8 character")

})

const index = () => {
  const initialValues: FormValues = {
    email: "",
    phoneNumber: "",
    subject: "",
    fullName: "",
    message: ""
  }

  const handleSubmit = () => {
    console.log("submitted")
  }


  return (
    <div>
      <section id="w-full  section-article">
        <Header />
        <div className="bg-[#020343] relative text-white min-h-screen mt-8 flex justify-center">
          <div className="w-[95%] md:w-[90%] py-[80px] flex flex-col gap-4">
            <div className="flex flex-col gap-4 w-fit">
              <p className="px-[16px] py-[10px] rounded-full border-[#201E5A] border ">
                Would you like to tell us anything? 😎
              </p>
            </div>



            <p className=" font-extrabold font-sans text-[1.5rem] md:text-[3.5rem] leading-[1.1em] ">
              Get in touch with us
            </p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form className='relative z-10'>
                <Grid container spacing={2} className="">
                  {/* Full Name */}
                  <Grid item xs={12} sm={6} lg={6} className="">
                    <div className="w-full p-2 border-secondary space-y-2 flex flex-col">
                      <label>Full Name</label>
                      <div className="rounded-b-[24px] rounded-tr-[24px] border-2 border-white">
                        <Field
                          type="text"
                          placeholder="John Doe"
                          className="bg-transparent border-none outline-none transition-all duration-300"
                          name="fullName"
                        />
                      </div>
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                    </div>
                  </Grid>

                  {/* Subject Category */}
                  <Grid item xs={12} sm={6} lg={6} className="">
                    <div className="w-full p-2 border-secondary space-y-2 flex flex-col">
                      <label>Subject Category</label>
                      <div className="rounded-b-[24px] rounded-tr-[24px] border-2 border-white">
                        <Field
                          type="text"
                          placeholder="Enter subject category"
                          className="bg-transparent border-none outline-none transition-all duration-300"
                          name="subject"
                        />
                      </div>
                      <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                    </div>
                  </Grid>

                  {/* Email Address */}
                  <Grid item xs={12} sm={6} lg={6} className="">
                    <div className="w-full p-2 border-secondary space-y-2 flex flex-col">
                      <label>Email Address</label>
                      <div className="rounded-b-[24px] rounded-tr-[24px] border-2 border-white">
                        <Field
                          type="email"
                          placeholder="johnDoe@gmail.com"
                          className="bg-transparent border-none outline-none transition-all duration-300"
                          name="email"
                        />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12} sm={6} lg={6} className="">
                    <div className="w-full p-2 border-secondary space-y-2 flex flex-col">
                      <label>Your Message</label>
                      <div className="rounded-b-[24px] rounded-tr-[24px] border-2 border-white">
                        <Field
                          as="textarea"
                          placeholder="What's your message?"
                          className="bg-transparent border-none outline-none transition-all duration-300"
                          name="message"
                        />
                      </div>
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                    </div>
                  </Grid>


                  <Grid item xs={12} sm={6} lg={6} className="">
                    <div className="w-full p-2 border-secondary space-y-2 flex flex-col">
                      <label>Phone Number</label>
                      <div className="rounded-b-[24px] rounded-tr-[24px] border-2 border-white">
                        <Field
                          type="text"
                          placeholder="+234 7051859001"
                          className="bg-transparent border-none outline-none transition-all duration-300"
                          name="PhoneNumber"
                        />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                  </Grid>
                </Grid>

                <div className="flex flex-col lg:flex-row mt-8 justify-between items-center gap-8 w-full">
                  <div className='flex space-x-8'>
                    <button className="flex text-xs lg:text-[1rem] justify-center items-center p-[0.5rem]  lg:px-[16px]  lg:py-[10px] rounded-full border-[#201E5A] border ">
                     <CiMail/>&nbsp;hello@btexpo.com
                    </button>

                    <button className=" flex text-xs lg:text-[1rem]  justify-center items-center p-[0.5rem] lg:px-[16px] lg:py-[10px] rounded-full border-[#201E5A] border ">
                      <LuPhone/>&nbsp;<p>+234 890812847</p>
                    </button>
                  </div>



                  <button className="text-center rounded-b-[24px] rounded-tr-[24px] bg-[#407ca6] text-white py-2 px-3 border-2 border-[#03045E] hover:bg-white hover:text-[#03045E] hover:font-bold mt-2 flex items-center justify-center gap-2 transition-colors duration-200 ease-out group w-full md:w-fit ">
                    <span className="whitespace-nowrap text-[#01023c]">Send Message</span>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-colors duration-200 ease-out"
                    >
                      <path
                        d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z"
                        className="fill-white transition-colors duration-200 ease-out group-hover:fill-[#03045E]"
                      />
                    </svg>
                  </button>
                </div>
              </Form> 
            </Formik>

          <Image src={bgImage} alt="" className='absolute top-0 left-1/2 transform -translate-x-1/2  h-screen' />
          </div>
        </div>
        <Subscribe />
        <Footer />


      </section>


    </div>
  )
}

export default index
