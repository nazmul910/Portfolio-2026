import styles from "./style.module.scss"
import { useInView,motion } from "framer-motion"
import { useRef } from "react"
import { slideUp, opacity } from "./animation"
import Rounded from "../../common/RoundedButton/index"

export default function index () {
    const phrase = "Frontend Developer with strong knowledge of React.js , Vue.js , and Next.js. Skilled in building responsive , user-friendly web interfaces and converting designs into clean, reusable components. Experienced in real-world projects with a strong focus on performance, accessibility, and modern frontend best practices."

    const description = useRef(null)
    const isInview = useInView(description);

    return(
        <div ref={description} className={styles.description} id="about">
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word,index) =>{
                            return <span key={index} className={styles.mask}>
                                <motion.span variants={slideUp} custom={index} animate={isInview ? "open" : "closed"} key={index}>
                                    {word}
                                </motion.span>
                            </span>
                        })
                    } 
                </p>
                <motion.p variants={opacity} animate={isInview ? "open" : "closed"}>
                    The combination of my passing for desigin, code & intrractioon me in a unique place in the web design world.
                </motion.p>
                    <div data-scroll data-scroll-speed={0.1} >
                        <a href="https://drive.google.com/file/d/1VFVa4mplU0xyqg-78fgyUhbfPl11HAcX/view?usp=sharing" target="_blank">
                        <Rounded className={styles.button}>
                            <p>Get Resume</p>
                        </Rounded>
                        </a>

                    </div>
            </div>
        </div>
    )
}   