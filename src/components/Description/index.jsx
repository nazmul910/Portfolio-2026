import styles from "./style.module.scss"
import { useInView,motion } from "framer-motion"
import { useRef } from "react"
import { slideUp, opacity } from "./animation"
import Rounded from "../../common/RoundedButton/index"

export default function index () {
    const phrase = "Helping brands to stand out in the digital era. Together we will leage bvad badfaf adadsoe a gda dad fadfhoadh  adadf adflfdh  adf adf adfa d;f"

    const description = useRef(null)
    const isInview = useInView(description);

    return(
        <div ref={description} className={styles.description}>
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
                        <Rounded className={styles.button}>
                            <p>About me</p>
                        </Rounded>
                    </div>
            </div>
        </div>
    )
}   