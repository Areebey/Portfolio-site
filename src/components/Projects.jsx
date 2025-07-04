import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className='w-full lg:w-1/4'
            >
              <img
                src={project.image}
                className='mb-6 rounded'
                width={150}
                height={200}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <a
                href={project.source}
                target='_blank'
                rel='noopener noreferrer'
                className="bg-blue-500 text-black shadow-2xl px-4 py-2 rounded-lg font-semibold hover:text-white transition duration-300"
              >
                Live Demo
              </a><br/><br/>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm
                          font-medium text-purple-800'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <div className='flex justify-between mt-4'>
              <button className='text-blue-600 font-semibold border-b-amber-600'
              >
              {/* <a
                href={project.source}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
