import Header from '@/components/Header'
import React from 'react'
import privacy from './content'
import '@/app/globals.css';
import Footer from '@/components/Footer';

const index = () => {
  return (
    <div className="w-full">
      <section id="section-article">

        <Header />

        <div className="w-[95%] md:w-[90%] flex flex-col gap-4 p-6 md:p-10 lg:p-14 py-[7rem] mx-auto">
          <div className="w-fit mt-8">
            <p className="px-4 py-2 rounded-full border border-[#201E5A] text-sm">
              Your information is safe with us🤙🏾
            </p>
          </div>
          <p className="font-extrabold text-black text-[2rem] md:text-[3rem] lg:text-[5rem] leading-[1.1em]">
            Privacy Policy
          </p>
        </div>

        <div className='section-privacy p-6 md:p-10 lg:p-14 bg-[#b1d5e8] flex flex-col md:flex-row gap-8 justify-between'>

          {/* Left column - Titles list */}
          <div className='w-full md:w-1/3'>
            <ul className='flex flex-col gap-4'>
              {privacy.map((terms, index) => (
                <li key={index} className="font-bold text-lg md:text-xl">{terms.title}</li>
              ))}
            </ul>
          </div>

          {/* Right column - Content */}
          <div className='flex flex-col gap-6 max-w-4xl w-full md:w-2/3'>
            <header className="text-sm md:text-lg">
              At Believers Tech Expo, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, participate in our events, or interact with us in other ways.
            </header>
            <ol className="space-y-6">
              {privacy.map((terms, index) => (
                <li key={index} className="flex flex-col gap-4">
                  <h1 className='font-extrabold text-black text-2xl md:text-4xl'>{terms.title}</h1>
                  <p className="text-sm md:text-base">{terms.desc}</p>
                  <ul className="list-disc ml-6 p-4 text-sm md:text-base">
                    {terms.list && terms.list.map((item, idx) => (
                      <li key={idx}>
                        {item.title ? `${item.title}: ` : ''}{item.description}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <footer>
              <p>
              By using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
            </footer>
          </div>
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default index
