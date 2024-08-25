"use client";
//Styles
import styles from "./styles.module.scss";
//Hooks
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const index = () => {
    const container = useRef(null);

    /**
     * @FramerMotion
     * Effect Scroll Progress
     */
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });
  
    // Variables effect Transform
    const SM = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
    // Variable Text for Effect Text
    const text = "serviços";
  
    return (
      <section ref={container} className={ styles.services } id="services">
        <div className={styles.servicesCont}>
          <div className={styles.titleServices}>
            <motion.h3 style={{ y: SM }}>Nossos</motion.h3>
            <h2>
              {text.split("").map((letter, index) => {
                const RAMDOM = Math.floor(Math.random() * -30) - 25;
                const LETTER = useTransform(scrollYProgress, [0, 1], [0, RAMDOM]);
                return (
                  <motion.span key={index} style={{ top: LETTER }}>
                    {letter}
                  </motion.span>
                );
              })}
            </h2>
          </div>
          <div className={`${styles.cardContainer} mb-20`}>
            <div className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
            <div  className={styles.card}>
              <h2>Lavada Especial</h2>
              <p>Amet minim mollit non desenrunt yllam coet minim mllit.</p>
              <h3>R$ 150.00 </h3>
              <button>Agendar Agora</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index