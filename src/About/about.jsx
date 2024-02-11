import styles from './about.module.css'
import Image from 'next/image'
import { aboutData } from './aboutData'
import { motion, useInView } from 'framer-motion'
import { slideUp,opacity } from './aboutAnimation'
import { useRef } from 'react'
export default function About() {

  const aboutArray=[
    `Hi I'm ${aboutData.name}`,
    aboutData.desc,
    `Based in ${aboutData.based}`
  ]

  const aboutDescription = useRef(null)
  const aboutContainer = useRef(null)
  const inView = useInView(aboutContainer)
  const descInView = useInView(aboutDescription)

  return (
    <div className={styles.aboutContainer} ref={aboutContainer}>
      <div className={styles.aboutDescriptions} ref={aboutDescription} data-scroll data-scroll-speed={0.3}>
        {
          aboutArray.map((para,index)=>{
            return(
              <p key={`para_${index}`}>
                {
                  para.split(" ").map((word,index)=>{
                    return(
                      <span key={`about_${index}`} className={styles.masku}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={descInView?"open":"closed"}
                          className={styles.spanner}
                        >
                        {word}
                        </motion.span>
                      </span>
                    )
                  })
                }
              </p>
            )
          })
        }
      </div>
      <motion.div 
        className={styles.aboutImage}
        variants={opacity}
        animate={inView?"open":"closed"}
        data-scroll
        data-scroll-speed={0.1}
      >
        <Image
          src={`/About/images/about.jpg`}
          fill={true}
          alt='My Pic'
        />
      </motion.div>
    </div>
  )
}
