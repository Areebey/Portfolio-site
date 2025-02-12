import React from 'react'
import {HERO_CONTENT} from "../constants"
import DownloadCV from '../constants/resume'
import { motion } from 'framer-motion'

const Hero = () => {

  const container = (delay) =>({
    hidden:{x: -100, opacity:0},
    visible:{ 
      x: 0, 
      opacity:1,
      transition:{duration:0.5, delay:0.5}
     },
  });

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1  
                      variants={container(0.2)}
                      initial="hidden"
                      animate="visible"
                      className='pb-16 text-6xl font-thin tracking-tight 
                    lg:mt-16 lg:text-8xl'>
                        Areeb Rafiq
                    </motion.h1>
                    <motion.span 
                     variants={container(0.6)}
                     initial="hidden"
                     animate="visible"
                      className='bg-gradient-to-r from bg-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
                    >
                        Front-End Developer
                    </motion.span><br/>
                    <motion.p
                      variants={container(1)}
                      initial="hidden"
                      animate="visible"
                      >
                        {HERO_CONTENT}
                    </motion.p>
                    <DownloadCV/>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                 <div className='flex justify-center'>
                    <motion.img 
                     initial={{x: 100, opacity:0}}
                     animate={{x: 0, opacity:1,}}
                     transition={{duration: 0.7, delay:1}}
                    //  src={Profilepic} 
                     src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXJuZGdlenAxbDl4eG80NTc3Z3hnYTBhMTMwcnJucTNkZzFvNGsydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VTtANKl0beDFQRLDTh/giphy.gif'
                     alt='Profile picture'
                     className='rounded-3xl'
                     />
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Hero