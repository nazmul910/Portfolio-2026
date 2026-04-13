"use client"
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function index() {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const date = new Date().toLocaleDateString('en-GB', {
    timeZone: 'Asia/Dhaka'
});

    

    const x = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [90, 90] : [120, 90])

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact} >
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt="image"
                                src="/images/call1.png"
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>

                    {isMobile ? (
                        <div className={styles.buttonContainer}>
                            <Rounded backgroundColor="#334BD3" className={styles.button}>
                                <p>Get in touch</p>
                            </Rounded>
                        </div>
                    ) : (
                        <motion.div style={{ x }} className={styles.buttonContainer}>
                            <Rounded backgroundColor="#334BD3" className={styles.button}>
                                <p>Get in touch</p>
                            </Rounded>
                        </motion.div>
                    )}

                    {!isMobile && (
                        <motion.svg
                            style={{ rotate, scale: 2 }}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                        </motion.svg>
                    )}
                </div>

                <div className={styles.nav} id='contact'>
                    <Rounded>
                        <p>islamnasir910@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+880 1316 197851</p>
                    </Rounded>
                </div>

                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2026 © Edition</p>
                        </span>
                        <span>
                            <h3>Time</h3>
                            <p>{date}</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            {isMobile ? <a href='https://github.com/nazmul910/' target='_black'>Github</a> : <Magnetic><a href='https://github.com/nazmul910/' target='_black'>Github</a></Magnetic>}
                        </span>
                        {isMobile ? <a href='https://www.linkedin.com/in/ni-nazmul4124/' target='_black'>Linkedin</a>  : <Magnetic><a href='https://www.linkedin.com/in/ni-nazmul4124/' target='_black'>Linkedin</a></Magnetic>}
                        {isMobile ? <a href='https://www.facebook.com/ni.nazmul.58' target='_blank'>Facebook</a>  : <Magnetic><a href='https://www.facebook.com/ni.nazmul.58' target='_blank'>Facebook</a></Magnetic>}
                        {/* {isMobile ? <p>Instagram</p> : <Magnetic><p>Instagram</p></Magnetic>} */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}