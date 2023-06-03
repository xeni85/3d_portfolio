import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250lx] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pin-gradient p-[1px] rounded-[20px] shadow-card"
        ></motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn(",", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-30px"
      >
        I am a skilled software developer with experience in Javascript, and expertize in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closesly with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=> (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    
  )
}

export default About