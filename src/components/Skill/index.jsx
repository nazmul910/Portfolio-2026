"use client";

import { useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { slideUp, opacity } from "./animation"
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slider1 = [
  { src: "img1.png" },
  { src: "img2.png", },
  { src: "img3.png", },
  { src: "img5.png",  },
  { src: "img7.png",  },
  { src: "img12.png",  },
  { src: "img11.png",  },
  { src: "img6.png",  },
  { src: "img9.png", },
  { src: "img10.png",  },
  { src: "img8.png",  },
  { src: "img22.png",  },
  { src: "img15.png",  },
  { src: "img13.png", },
  { src: "img16.png",  },
  { src: "img20.png",  },
  { src: "img24.png",  },
  { src: "img17.png",  },
  { src: "img18.png",  },
  { src: "img23.png",  },

];

const slider2 = [
  { src: "img1.png" },
  { src: "img2.png", },
  { src: "img3.png", },
  { src: "img5.png",  },
  { src: "img7.png",  },
  { src: "img12.png",  },
  { src: "img11.png",  },
  { src: "img6.png",  },
  { src: "img9.png", },
  { src: "img10.png",  },
  { src: "img8.png",  },
  { src: "img22.png",  },
  { src: "img15.png",  },
  { src: "img13.png", },
  { src: "img16.png",  },
  { src: "img20.png",  },
  { src: "img24.png",  },
  { src: "img17.png",  },
  { src: "img18.png",  },
  { src: "img23.png",  },
];

const headingWords = ["Technologies", "I", "Work", "With"];

export default function SlidingImages() {
  const container = useRef(null);

  const firstText1 = useRef(null);
  const secondText1 = useRef(null);
  const sliderTrack1 = useRef(null);
  let xPercent1 = 0;
  let direction1 = -1;

  const firstText2 = useRef(null);
  const secondText2 = useRef(null);
  const sliderTrack2 = useRef(null);
  let xPercent2 = 0;
  let direction2 = 1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.25,
      onUpdate: (e) => {
        direction1 = e.direction * -1; // slider1: scroll down = left
        direction2 = e.direction;      // slider2: scroll down = right
      },
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    // Slider 1
    if (xPercent1 <= -100) xPercent1 = 0;
    else if (xPercent1 > 0) xPercent1 = -100;
    gsap.set(firstText1.current, { xPercent: xPercent1 });
    gsap.set(secondText1.current, { xPercent: xPercent1 });
    xPercent1 += 0.05 * direction1;

    // Slider 2
    if (xPercent2 <= -100) xPercent2 = 0;
    else if (xPercent2 > 0) xPercent2 = -100;
    gsap.set(firstText2.current, { xPercent: xPercent2 });
    gsap.set(secondText2.current, { xPercent: xPercent2 });
    xPercent2 += 0.05 * direction2;

    requestAnimationFrame(animate);
  }; 

      const description = useRef(null)
   const isInview = useInView(description);
   const phrase = "Technologies I work with"

  return (
    <div ref={container} className={styles.slidingImages} id="skill">
<div ref={description} className={styles.headingWrapper}>
    <p>
        {phrase.split(" ").map((word, index) => {
            return (
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
            );
        })}
    </p>
</div>
      <div className={styles.sliderWrapper}>
        <div ref={sliderTrack1} className={styles.sliderTrack}>
          <div ref={firstText1} className={styles.slider}>
            {slider1.map((project, index) => (
              <div
                key={index}
                className={styles.project}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image fill alt="image" src={`/images/${project.src}`} />
                </div>
              </div>
            ))}
          </div>
          <div ref={secondText1} className={styles.slider}>
            {slider1.map((project, index) => (
              <div
                key={index}
                className={styles.project}
                
              >
                <div className={styles.imageContainer}>
                  <Image fill alt="image" src={`/images/${project.src}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div ref={sliderTrack2} className={styles.sliderTrack}>
          <div ref={firstText2} className={styles.slider}>
            {slider2.map((project, index) => (
              <div
                key={index}
                className={styles.project}
               
              >
                <div className={styles.imageContainer}>
                  <Image fill alt="image" src={`/images/${project.src}`} />
                </div>
              </div>
            ))}
          </div>
          <div ref={secondText2} className={styles.slider}>
            {slider2.map((project, index) => (
              <div
                key={index}
                className={styles.project}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image fill alt="image" src={`/images/${project.src}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}