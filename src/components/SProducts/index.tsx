"use client";
//Styles
import styles from "./styles.module.scss";
//Hooks
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
//Images
import Image from "next/image";
import Image1 from "/public/images/image2.png";
import Image2 from "/public/images/image3.png";
//Component Children
import ZoomParallax from "./ZoomParallax"

const index = () => {
  // Referring Container

  const container = useRef(null);

  // Statement scrollYProgress

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Variables Effect
  const SM = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Text Effect {

  const textEffect = "Produtos";

  return (
    <section className={styles.products} id="products">
      <div className={styles.productsContainer}>
        <div className={styles.titleProducts}>
          <motion.h2 style={{ y: SM }}>Nossos</motion.h2>
          <p>
            {textEffect.split("").map((letter, index) => {
              // Variable RAMDOM Function

              const RAMDOM = Math.floor(Math.random() * -40) - 25;

              // Variable Effect

              const SM = useTransform(scrollYProgress, [0, 1], [0, RAMDOM]);

              return (
                <motion.span key={index} style={{ top: SM }}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
        <ZoomParallax />
        <div className={styles.productsObj}></div>
      </div>
    </section>
  );
};

export default index;
