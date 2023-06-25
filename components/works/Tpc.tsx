import React from 'react'
import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Tpc = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                Software Developer <span className='text-textGreen tracking-wide'>@Tower Property Consultancy Ltd</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                 Jan 2023 -Present
            </p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex items-center gap-2 text-textDark'><span className='text-textGreen tracking-wide mt-1'> <TiArrowForward /></span>
                Leading Technology in Teck Stack
                </li>
                <li className='text-base flex items-center gap-2 text-textDark'><span className='text-textGreen tracking-wide mt-1'> <TiArrowForward /></span>
                Built the logic for a streamlined ad-serving platform that scaled
                </li>
                <li className='text-base flex items-center gap-2 text-textDark'><span className='text-textGreen tracking-wide mt-1'> <TiArrowForward /></span>
                Built Software System
                </li>
                <li className='text-base flex items-center gap-2 text-textDark'><span className='text-textGreen tracking-wide mt-1'> <TiArrowForward /></span>
                Search Engine Optimazation
                </li>
            </ul>
        </motion.div>
    )
}

export default Tpc