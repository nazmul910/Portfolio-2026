"use client"
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss"
import Image from "next/image";

const slider1 = [
    { src: "locomotive.png", color: "#e3e5e7" },
    { src: "c2.jpg",         color: "#d6d7dc" },
    { src: "locomotive.png",color: "#e3e3e3" },
    { src: "maven.jpg",      color: "#21242b" },
]

const slider2 = [
    { src: "locomotive.png", color: "#e3e5e7" },
    { src: "c2.jpg",         color: "#d6d7dc" },
    { src: "locomotive.png",color: "#e3e3e3" },
    { src: "maven.jpg",      color: "#21242b" },
]

export default function SlidingImages() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });


    const x1 = useTransform(scrollYProgress, [0, 1], ["0vw", "10vw"])
    const x2 = useTransform(scrollYProgress, [0, 1], ["0vw", "-10vw"])
    const height = useTransform(scrollYProgress, [0, 0.9], ["50px", "0px"])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => (
                    <div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt="image"
                                src={`/images/${project.src}`}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => (
                    <div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt="image"
                                src={`/images/${project.src}`}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}