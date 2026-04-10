"use client";

import { useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slider1 = [
  { src: "react.png", color: "#e3e5e7" },
  { src: "react.png", color: "#d6d7dc" },
  { src: "react.png", color: "#e3e3e3" },
  { src: "react.png", color: "#21242b" },
];

const slider2 = [
  { src: "react.png", color: "#e3e5e7" },
  { src: "react.png", color: "#d6d7dc" },
  { src: "react.png", color: "#e3e3e3" },
  { src: "react.png", color: "#21242b" },
];

export default function SlidingImages() {
  const container = useRef(null);

  // Slider 1: left দিকে যাবে (direction = -1)
  const firstText1 = useRef(null);
  const secondText1 = useRef(null);
  const sliderTrack1 = useRef(null);
  let xPercent1 = 0;
  let direction1 = -1;

  // Slider 2: right দিকে যাবে (direction = +1)
  const firstText2 = useRef(null);
  const secondText2 = useRef(null);
  const sliderTrack2 = useRef(null);
  let xPercent2 = 0;
  let direction2 = 1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll করলে direction পাল্টে যাবে
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

  return (
    <div ref={container} className={styles.slidingImages}>
      {/* Slider 1 - left দিকে */}
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
          {/* Duplicate for seamless loop */}
          <div ref={secondText1} className={styles.slider}>
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
        </div>
      </div>

      {/* Slider 2 - right দিকে */}
      <div className={styles.sliderWrapper}>
        <div ref={sliderTrack2} className={styles.sliderTrack}>
          <div ref={firstText2} className={styles.slider}>
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