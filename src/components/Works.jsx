import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { github } from '../assets'
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { textVariant } from '../utils/motion';


const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Welcome to my web project portfolio! Explore a collection of meticulously crafted websites that blend creativity and functionality seamlessly. From stunning visual designs to intuitive user experiences, each project reflects a deep commitment to delivering online solutions that captivate, engage, and leave a lasting impression.
          </motion.p>
      </div>
    </>
  )
}

export default Works