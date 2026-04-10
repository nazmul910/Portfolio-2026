"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/index"
import Landing from "../components/Landing/index"
import Description from "../components/Description/index"
import Projects from "../components/Projects/index"
import SlideingImages from "../components/SlideingImages/index"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect (() =>{
    (
      async () =>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
        
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default"
          window.scrollTo(0,0);
        },2000)
      }
    )()
  },[])

  return (
    <>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader/>}
        </AnimatePresence>
        <Landing/>
        <Description/>
        <Projects/>
        <SlideingImages/>


      </main>
    </>
  );
}
