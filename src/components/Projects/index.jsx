"use client";

import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./components/project/index"
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton/index"

const projects = [
    {
        title: "E-DoctorSheba website",
        des:"Ract js,Node js,Tailwind",
        src: "imgp2.png",
        color: "#000000",
        github: "https://github.com/nazmul910/Frontend_E_DoctorSheba",
        live: "https://frontend-e-doctor-sheba.vercel.app/"
    },
    {
        title: "Justice website",
        des:"Next js,Node js,Tailwind,Typescript",
        src: "imgp1.png",
        color: "#8c8c8c",
        github: "https://github.com/nazmul910/Lawyer-Frontend",
        live: "https://lawyer-frontend-5g5p.vercel.app/"
    },
    {
        title: "Decor E-com website",
        des:"Vue js,Node js,Tailwind",
        src: "imgp6.png",
        color: "#EFE8D3",
        github: "https://github.com/nazmul910/Decor-Frontend-E-com",
        live: "https://decor-e-com-site.netlify.app/"
    },
    {
        title: "Dynamic E-com website",
        des:"Html,Tailwind css,Vue js",
        src: "imgp5.png",
        color: "#706D63",
        github: "https://github.com/nazmul910/E-com-with-vue-js",
        live: "https://e-shop-nazmul901.netlify.app/"
    },
        {
        title: "Static Jewellery website",
        des:"Html,Tailwind css,Vue js",
        src: "imgp3.png",
        color: "#706D63",
        github: "https://github.com/nazmul910/e-com-juwellery",
        live: "https://e-shop-by-nazmul.netlify.app/"
    },
        {
        title: "Country Find",
        des:"Html,Css,Ract",
        src: "imgp4.png",
        color: "#706D63",
        github: "https://github.com/nazmul910/React_country_project",
        live: "https://country-react-project1.netlify.app/"
    },
]

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter:   { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed:  { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

const popupAnimation = {
    initial: { opacity: 0, scale: 0.85 },
    enter:   { opacity: 1, scale: 1,    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    exit:    { opacity: 0, scale: 0.85, transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] } }
}

const overlayAnimation = {
    initial: { opacity: 0 },
    enter:   { opacity: 1, transition: { duration: 0.3 } },
    exit:    { opacity: 0, transition: { duration: 0.3 } }
}

export default function Home() {
    const [modal, setModal]                   = useState({ active: false, index: 0 });
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobile, setIsMobile]             = useState(false);
    const { active, index } = modal;

    const modalContainer   = useRef(null);
    const cursorlabel      = useRef(null);
    const cursor           = useRef(null);
    const xMoveContainer   = useRef(null);
    const yMoveContainer   = useRef(null);
    const xMoveCursor      = useRef(null);
    const yMoveCursor      = useRef(null);
    const xMoveCursorLabel = useRef(null);
    const yMoveCursorLabel = useRef(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selectedProject]);

    useEffect(() => {
        if (isMobile) return;
        xMoveContainer.current   = gsap.quickTo(modalContainer.current, "left", { duration: 0.8,  ease: "power3" });
        yMoveContainer.current   = gsap.quickTo(modalContainer.current, "top",  { duration: 0.8,  ease: "power3" });
        xMoveCursor.current      = gsap.quickTo(cursor.current,         "left", { duration: 0.5,  ease: "power3" });
        yMoveCursor.current      = gsap.quickTo(cursor.current,         "top",  { duration: 0.5,  ease: "power3" });
        xMoveCursorLabel.current = gsap.quickTo(cursorlabel.current,    "left", { duration: 0.45, ease: "power3" });
        yMoveCursorLabel.current = gsap.quickTo(cursorlabel.current,    "top",  { duration: 0.45, ease: "power3" });
    }, [isMobile]);

    const moveItems = (x, y) => {
        if (isMobile) return;
        xMoveContainer.current(x);
        yMoveContainer.current(y);
        xMoveCursor.current(x);
        yMoveCursor.current(y);
        xMoveCursorLabel.current(x);
        yMoveCursorLabel.current(y);
    }

    const manageModal = (active, index, x, y) => {
        if (!isMobile) moveItems(x, y);
        setModal({ active, index });
    }

    const popupAnimation = {
         initial: { opacity: 0, scale: 0.85, x: "-50%", y: "-50%" },
         enter:{ opacity: 1, scale: 1,    x: "-50%", y: "-50%", 
               transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
         exit:{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%", 
               transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] } }
}

    return (
        <>
            <main
                onMouseMove={(e) => { if (!isMobile) moveItems(e.clientX, e.clientY) }}
                className={styles.projects} id="project"
            >
                <div className={styles.projectTitle}>
                    <h1>My Projects</h1>
                </div>
                <div className={styles.body}>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            index={index}
                            title={project.title}
                            manageModal={manageModal}
                            onClick={() => setSelectedProject(projects[index])}
                        />
                    ))}
                </div>

                <Rounded>
                    <p>More work</p>
                </Rounded>

                {/* Desktop modal */}
                {!isMobile && (
                    <>
                        <motion.div
                            ref={modalContainer}
                            variants={scaleAnimation}
                            initial="initial"
                            animate={active ? "enter" : "closed"}
                            className={styles.modalContainer}
                        >
                            <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                                {projects.map((project, i) => (
                                    <div key={`modal_${i}`} className={styles.modal} style={{ backgroundColor: project.color }}>
                                        <Image src={`/images/${project.src}`} width={300} height={0} alt="image" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            ref={cursor}
                            className={styles.cursor}
                            variants={scaleAnimation}
                            initial="initial"
                            animate={active ? "enter" : "closed"}
                        />
                        <motion.div
                            ref={cursorlabel}
                            className={styles.cursorLabel}
                            variants={scaleAnimation}
                            initial="initial"
                            animate={active ? "enter" : "closed"}
                        >
                            View
                        </motion.div>
                    </>
                )}

                {/* Mobile modal */}
                {isMobile && (
                    <motion.div
                        variants={scaleAnimation}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                        className={styles.mobileModal}
                    >
                        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                            {projects.map((project, i) => (
                                <div key={`modal_${i}`} className={styles.modal} style={{ backgroundColor: project.color }}>
                                    <Image src={`/images/${project.src}`} width={300} height={0} alt="image" />
                                </div>
                            ))}
                        </div>
                        <div className={styles.mobileViewLabel}>View</div>
                    </motion.div>
                )}
            </main>

            {/* ✅ Full screen popup */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            className={styles.backdrop}
                            variants={overlayAnimation}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            className={styles.popup}
                            variants={popupAnimation}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                        >
                            {/* Close */}
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>

                            {/* Title */}
                            <h2 className={styles.popupTitle}>
                                {selectedProject.title}
                            </h2>
                            <p className={styles.popupDes}>
                                {selectedProject.des}
                            </p>

                            {/* Image */}
                            <div className={styles.popupImageContainer}>
                                <Image
                                    src={`/images/${selectedProject.src}`}
                                    fill={true}
                                    alt={selectedProject.title}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* Links */}
                            <div className={styles.popupLinks}>
                                <a  // ✅ opening tag fix
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.popupLink}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                                <a  // ✅ opening tag fix
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.popupLink}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    Live Site
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}