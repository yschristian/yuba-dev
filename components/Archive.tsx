import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion"

const Archive = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>Other NoteWorth Project</h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10  '>
        {/* <ArchiveCard
          title='Doctor Appointment System'
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe quod itaque excepturi numquam, velit aliquam nam corporis laboriosam quo repellendus nemo sint impedit tenetur quidem odit, ab nostrum magni."
          listItem={["ReactJs", "NodeJs", "MongoDb"]}
          link='yeap.com'
        />
        <ArchiveCard
          title='Doctor Appointment System'
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe quod itaque excepturi numquam, velit aliquam nam corporis laboriosam quo repellendus nemo sint impedit tenetur quidem odit, ab nostrum magni."
          listItem={["ReactJs", "NodeJs", "MongoDb"]}
          link='yeap.com'
        /> */}
        <ArchiveCard
          title='Doctor Appointment System'
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe quod itaque excepturi numquam, velit aliquam nam corporis laboriosam quo repellendus nemo sint impedit tenetur quidem odit, ab nostrum magni."
          listItem={["ReactJs", "NodeJs", "MongoDb"]}
          link='https://doctor-app-client.vercel.app/'
        />
        {/* {
          show && (
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >

                <ArchiveCard
                  title='Doctor Appointment System'
                  des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe quod itaque excepturi numquam, velit aliquam nam corporis laboriosam quo repellendus nemo sint impedit tenetur quidem odit, ab nostrum magni."
                  listItem={["ReactJs", "NodeJs", "MongoDb"]}
                  link='yeap.com'
                />
              </motion.div>
            </div>
          )
        } */}
      </div>
      {/* <div className='mt-12 flex items-center justify-center'>
        {
          show ?
            <button onClick={() => setShow(false)}
              className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hover] duration-300'>
              Show Less
            </button>
            :

            <button onClick={() => setShow(true)}
              className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hover] duration-300'>
              Show More
            </button>
        }
      </div> */}
    </div>
  )
}

export default Archive