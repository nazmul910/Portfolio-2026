'use client'

import { useEffect,useLayoutEffect,useRef,useState } from "react";
import styles from './style.module.scss';
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Nav from './nav/index';
import { ScrollTrigger } from "gsap/all";
import Rounded from '../../common/RoundedButton/index'
import Magnetic from '../../common/Magnetic/index'

export default function index(){

    const header = useRef(null);
    const [isActive,setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() =>{
        if(isActive) setIsActive(false)
    },[pathname])

    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current,{
            scrollTrigger:{
                trigger: document.documentElement,
                start:0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current,{scale:1,duration:0.25,ease:"power1.out"})},
                onEnterBack: () => {gsap.to(button.current,{scale:0,duration:0.25,ease:"power1.out"},setIsActive(false))},
            }
        })
    },[])

    const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

    return(
        <>
          <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.dennis}>Nazmul</p>
                    <p className={styles.snellenberg}>Hasan</p>
                </div>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <a href="#project" onClick={(e) => handleScroll(e, "#project")}>Project</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
        </>
    )
}