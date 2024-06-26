import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
import { chris } from '@/public/assets'

const About = () => {
  return (
    <section
      id='about'
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p>
          I’m a software engineer with a diverse skill set spanning mobile and web development, software project management, and software testing. With several years of experience under my belt, I've honed expertise in crafting efficient and scalable solutions across various platforms. My proficiency in both front-end and back-end technologies equips me to tackle challenges at every stage of the development lifecycle.
          My project management skills ensure smooth coordination and delivery, while my dedication to software testing guarantees the reliability and quality of products.
          </p>
          <p>Here are a few technologies i have been working with recently! </p>
          <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>Javascript(ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>React
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className='text-textGreen'><AiFillThunderbolt /></span>React Native
            </li>
          </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
          <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <Image
                className="rounded-lg h-full object-cover"
                src={chris}
                alt="profile Img"
              />
              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 
                   rounded-md top-0 left-0 group-hover:bg-transparent duration-300' ></div>
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen 
            rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 
            transition-transform duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default About