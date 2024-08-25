"use client";
//Styles
import styles from "./styles.module.scss";
//Librarys
import gsap from "gsap";
import { motion } from "framer-motion";
//Hook's
import { useLayoutEffect, useRef } from "react";
import { EffectContainer, EffectTitle, letterEffect } from "./anim";

const index = () => {
  // Text Words
  const text = [
    {
      word: "Bem",
    },
    {
      word: "Vindo",
    },
  ];
  // Referer Text
  const container = useRef<null>(null);
  const textEffect = useRef<Array<string>>([]);

  // Function get letters
  function getChar(word: string) {
    let chars: Array<object> = [];
    word.split("").forEach((char: string, index: number) => {
      chars.push(
        <motion.span
          key={index}
          variants={letterEffect}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={index * 0.04}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  }

  // UseLayoutEffect
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.in",
        },
      });

      tl.add(EffectTitle(textEffect)).add(EffectContainer(container));
    });

    return () => context.revert();
  }, []);

  return (
    <section ref={container} className={styles.preloader}>
      <div className={styles.preloaderContainer}>
        {text.map(({ word } : { word: string }, index: number) => {
          return (
            <h1 ref ={(ref: any) => (textEffect.current[index] = ref)} key={index}>
              {getChar(word)}
            </h1>
          );
        })}
      </div>
    </section>
  );
};

export default index;
