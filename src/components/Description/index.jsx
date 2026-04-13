import styles from "./style.module.scss"
import { useInView, motion } from "framer-motion"
import { useRef } from "react"
import { slideUp, opacity } from "./animation"
import Rounded2 from "../../common/RoundedButton2/index"
export default function index() {
    const phrase = "Frontend Developer with strong knowledge of React.js, Vue.js, and Next.js. Skilled in building responsive, user-friendly web interfaces and converting designs into clean, reusable components. Experienced in real-world projects with a strong focus on performance, accessibility, and modern frontend best practices."

    const description = useRef(null)
    const isInview = useInView(description, { once: true, margin: "0px 0px -100px 0px" })

    const expRef = useRef(null)
    const isExpInview = useInView(expRef, { once: true, margin: "0px 0px -80px 0px" })

    return (
        <div className={styles.description} id="about">

            {/* About Title */}
            <motion.h2
                className={styles.aboutTitle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
                About
            </motion.h2>

            {/* Main 2 column layout */}
            <div className={styles.body}>

                {/* LEFT — Experience */}
                <div ref={expRef} className={styles.left}>
                    <motion.h3
                        className={styles.expTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isExpInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Experience
                    </motion.h3>

                    <motion.div
                        className={styles.expCard}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isExpInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <div className={styles.expTop}>
                            <div className={styles.expLeft}>
                                <motion.span
                                    className={styles.expCompany}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isExpInview ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.35 }}
                                >
                                    Return Hex
                                </motion.span>
                                <motion.span
                                    className={styles.expRole}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isExpInview ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.45 }}
                                >
                                    Frontend Developer (Intern)
                                </motion.span>
                            </div>
                            <motion.div
                                className={styles.expMeta}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isExpInview ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <span className={styles.expLocation}>Dhaka, Bangladesh</span>
                                <span className={styles.expDate}>August – Present</span>
                            </motion.div>
                        </div>

                        <motion.div
                            className={styles.expDivider}
                            initial={{ scaleX: 0 }}
                            animate={isExpInview ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        />

                        <motion.p
                            className={styles.expDesc}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isExpInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Developed projects using Next.js and actively learning NestJS, Prisma ORM, PostgreSQL, and Redux — focusing on building scalable full-stack applications.
                        </motion.p>

                        <motion.div
                            className={styles.expTags}
                            initial={{ opacity: 0 }}
                            animate={isExpInview ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                        >
                            {["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redux"].map((tag, i) => (
                                <span key={i} className={styles.tag}>{tag}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* RIGHT — Text + Button */}

<div ref={description} className={styles.right}>
    <p>
        {phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
                <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInview ? "open" : "closed"}
                    initial="initial"
                >
                    {word}
                </motion.span>
            </span>
        ))}
    </p>

    <div data-scroll data-scroll-speed={0.5} className={styles.over1}>
        <a href="https://drive.google.com/file/d/1VFVa4mplU0xyqg-78fgyUhbfPl11HAcX/view?usp=sharing" target="_blank" >
            <Rounded2 className={styles.button1}>
                <p>Get Resume</p>
            </Rounded2>
        </a>
    </div>
</div>

            </div>
        </div>
    )
}