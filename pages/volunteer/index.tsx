import React from 'react';
import '@/app/globals.css';
import './style.css';


import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="card text-[1rem] lg:text-[1.5rem]  h-[20rem] flex flex-col gap-4 justify-center">
    <p className="  font-bold">{title}</p>
    <p className=" leading-[30px] ">{description}</p>
  </div>
);

const VolunteerPage: React.FC = () => {
  const teams: CardProps[] = [
    { title: 'Marketing', description: 'Help us spread the word and grow our reach. From strategizing campaigns to engaging with the audience, your creativity and insights will make a real impact.' },
    { title: 'Tech Support', description: 'Keep the gears turning by assisting with technical needs. Whether it\'s solving challenges or setting up systems, you’ll play a vital role in ensuring everything runs smoothly.' },
    { title: 'Branding & Design', description: 'Use your creative skills in UI/UX, graphics, and flow design. Help shape our visual identity and craft designs that captivate and communicate our mission.' },
    { title: 'Community Management', description: 'Engage and support our vibrant community. Build connections, manage interactions, and ensure everyone feels welcome and valued.' },
    { title: 'Partnership/Publicity', description: 'Build meaningful connections and amplify our presence. Reach out to potential partners and help us share our story with the world.' },
    { title: 'Social Media', description: 'Craft content and manage our online interactions. Share updates, engage followers, and keep our platforms buzzing with excitement.' },
    { title: 'Content Writing/Creation', description: 'Write and create stories that inspire and inform. From blog posts to newsletters, your words will help share our vision and achievements.' },
    { title: 'Project Management', description: 'Organize and lead projects to success. Bring teams together, track progress, and ensure tasks are completed efficiently.' },
    { title: 'Project Management', description: 'Organize and lead projects to success. Bring teams together, track progress, and ensure tasks are completed efficiently.' }

  ];

  return (
    <div>
       <Header />
      <section id="w-full section-article">
       
        <div className="text-black min-h-screen mt-8 flex flex-col justify-center">
          <div className="w-[95%] flex flex-col gap-4  md:w-[90%]  p-7 lg:p-14 py-[7rem]">
            <div className='w-fit '>
              <p className="px-[16px] py-[10px] text-xs lg:text-sm rounded-full border-[#201E5A] border">
                Be a part of one of our Soldiers 👏🏾
              </p>
            </div>
            <p className="font-extrabold font-sans text-[2.1rem] lg:text-[5.5rem] leading-[1.1em]">
              Volunteering <br /> Opportunities
            </p>
          </div>

          <div className="second-section bg-[#b1d5e8] p-7 lg:p-14 flex flex-col gap-4">
            <div className='w-fit'>
              <p className="px-[16px]  text-xs lg:text-sm py-[10px] rounded-full border-[#201E5A] border">
                Where will you like to function on the team 👩‍💻
              </p>
            </div>
            <h1 className=" font-extrabold font-sans text-[1.1rem] md:text-[3.5rem] leading-[1.1em] ">
              These are the teams we have and here's how you can add value to us
            </h1>
            <div className="card-container grid lg:grid-cols-3 mt-10 grid-cols-1 ">
              {teams.map((team, index) => (
                <Card key={index} title={team.title} description={team.description} />
              ))}
            </div>

            <div className="flex-col lg:flex-row flex justify-between">
              <div className='text-text-default'>
                <p>We will look after you. 🤞🏾♥️</p>
                <p>Your efforts won't go unnoticed - we will mention your name to a room full of opportunities.</p>
              </div>
              <div>

                <button className="text-center rounded-b-[24px] rounded-tr-[24px] bg-[#03045e] text-white py-2 px-3 border-2 border-[#03045E] hover:bg-white hover:text-[#03045E] hover:font-bold mt-2 flex items-center justify-center gap-2 transition-colors duration-200 ease-out group w-full md:w-fit ">
                  <span className="whitespace-nowrap text-white">Become a volunteer today</span>

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
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default VolunteerPage;