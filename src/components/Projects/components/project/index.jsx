// components/project/index.jsx
import styles from './style.module.scss';
import { motion } from 'framer-motion';

export default function Project({ index, title, manageModal, onClick }) {
    return (
        <motion.div
            className={styles.project}
            onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
            onMouseLeave={(e) => manageModal(false, index, e.clientX, e.clientY)}
            onTouchStart={() => manageModal(true, index, 0, 0)}
            onTouchEnd={() => manageModal(false, index, 0, 0)}
            onClick={onClick} // ✅ click এ popup
        >
            <h2>{title}</h2>
            <p>Design & Development</p>
        </motion.div>
    )
}