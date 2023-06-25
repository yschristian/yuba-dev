import React from 'react'
import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const SolvitAfrica = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                Backend Engineer <span className='text-textGreen tracking-wide'>@SolvitAfrica</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Feb 2022 - May 2022
            </p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex items-center gap-2 text-textDark'><span className='text-textGreen tracking-wide mt-1'> <TiArrowForward /></span>
                I worked as a backend software developer using node JS
                </li>
            </ul>
        </motion.div>
    )
}

export default SolvitAfrica