import React, { useState } from "react";
import styles from './style.module.scss'
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, slide, scale } from "../animations";
import Link from "next/link";
import Curve from './Curve/index'
import Footer from './Footer/index'

const navItems = [
    { title: "Home",    href: '/'        },
    { title: "Work",    href: '/work'    },
    { title: "About",   href: '/about'   },
    { title: "Contact", href: '/contact' },
    { title: "Skill",   href: '/skill'   },
]

function NavItem({ data, isActive, setSelectedIndicator }) {
    return (
        <motion.div
            className={styles.navItem}
            onMouseEnter={() => setSelectedIndicator(data.href)}
            custom={data.index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className={styles.indicator}
            />
            <Link href={data.href}>{data.title}</Link>
        </motion.div>
    )
}

export default function index() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div
                    onMouseLeave={() => setSelectedIndicator(pathname)} 
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => (
                        <NavItem
                            key={index}
                            data={{ ...data, index }}
                            isActive={selectedIndicator === data.href}
                            setSelectedIndicator={setSelectedIndicator}
                        />
                    ))}
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    )
}