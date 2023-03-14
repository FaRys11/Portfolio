import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Úvod</p>
        <h2 className={styles.sectionHeadText}>Přehled</h2>
      </motion.div>

      <motion
        varriants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Jsem začínající programator, který se převážně věnuje 3D, 2D návrhům webových aplikací a webových stránek. Využívám programovací jazyk JavaScript. Mám zkušenosti s frameworky, jako jsou React, Node.js a Three.js. Učím se rychle a úzce spolupracuji s klientem.
      </motion>
    </>
  )
}

export default About