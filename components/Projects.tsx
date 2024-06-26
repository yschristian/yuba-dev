import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { ecommerce, tpc, uhdss } from '@/public/assets'
import { RxOpenInNewWindow } from "react-icons/rx"



const Projects = () => {
  return (
    <section id="project" className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* projects one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href="https://uhdss.com/"
              target='_blank'
            >
              <div>
                <Image
                  className='w-full h-full object-contain'
                  src={uhdss}
                  alt="uhdss-education Agency" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
          items-end text-right xl:-ml-16 z-10">
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className="text-2xl font-bold">UHDSS Education agecy</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              the UHDSS Education Agency system aims to simplify and automate the process of studying abroad, 
              applying for visas, finding work opportunities, and connecting with authorized agents,
               enhancing the user experience and improving efficiency in the education agency domain.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Reactjs</li>
                <li>Nodejs</li>
                <li>PostgreSQL</li>
                <li>Cpanel Deployment</li>
              </ul>
              <div className='text-2xl flex gap-2'>
                <a
                  className='hover:text-textGreen duration-300'
                  href="https://uhdss.com/"
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* projects two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href="https://yubagroup.vercel.app/"
              target='_blank'
            >
              <div>
                <Image
                  className='w-full h-full object-contain'
                  src={ecommerce}
                  alt="yuba-group" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
          items-end text-right z-10">
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className="text-2xl font-bold">YubaGroup</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-md'>
              Yuba Group aims to provide a seamless and secure ecommerce experience, 
              connecting buyers and sellers in a user-friendly platform that 
              supports a wide variety of products and simplifies the online shopping process
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Reactjs</li>
                <li>Nodejs</li>
                <li>MongoDB</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className='text-2xl flex gap-2'>
                <a
                  className='hover:text-textGreen duration-300'
                  href="https://yubagroup.vercel.com/"
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*project three*/}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href="https://www.quickhousepro.com/"
              target='_blank'
            >
              <div>
                <Image
                  className='w-full h-full object-contain'
                  src={tpc}
                  alt="uhdss-education Agency" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
          items-end text-right xl:-ml-16 z-10">
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className="text-2xl font-bold">Quick House</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              QuickHouse simplifies the complexities of property management, catering to both buyers and sellers with its comprehensive suite of features. Through the intuitive mobile app and user-friendly web interface, users can effortlessly navigate through property listings, streamline buying and selling processes, and manage their property portfolios with ease.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Reactjs</li>
                <li>Nodejs</li>
                <li>MongoDB</li>
                <li>Vercel Deployment & NameCheap</li>

              </ul>
              <div className='text-2xl flex gap-2'>
                <a
                  className='hover:text-textGreen duration-300'
                  href="https://www.quickhousepro.com/"
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects