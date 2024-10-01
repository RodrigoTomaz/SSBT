"use client";
//Styles
import styles from "./styles.module.scss";
//Features
import Image from "next/image";
import ImageCurring1 from "/public/images/curring1.svg";
import ImageCurring2 from "/public/images/curring2.svg";
import ImageCurring3 from "/public/images/curring3.svg";
import ImageCurring4 from "/public/images/curring4.svg";
//Hook's
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const index = () => {
  // Container / Recipiente
  const container = useRef(null);

  // Statement scrollYProgress

  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
  });

  // Variables For Effects

  const SM = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Text Effect 

  const textEffect = "Beth Beauty";

  return (
      <section ref={ container } className={ styles.about } id="about">
          <div className={ styles.aboutContainer }>
              <div className={ styles.aboutComentary }>
                  <div className={ styles.aboutTitle }>
                      <motion.h2
                          style={{ y: SM }}
                      >Sobre a</motion.h2>
                      <p>
                          {
                              textEffect.split("").map((letter, index) => {
                                  // Variables Ramdom
                                  const RAMDOM = Math.floor(Math.random() * -40) - 25;
                                  
                                  // Variables Effect 

                                  const SM = useTransform(scrollYProgress, [0, 1], [0, RAMDOM]);

                                  return (
                                      <motion.span 
                                          key={ index }
                                          style={{ top: SM}}
                                      >{ letter }</motion.span>
                                  );
                              })
                          }
                      </p>
                  </div>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis, dicta praesentium quos sequi illo, alias asperiores, sint nobis in rerum saepe vero laboriosam libero distinctio mollitia deserunt voluptatem modi.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi vero excepturi, laudantium, voluptatibus officiis possimus suscipit harum dolorum commodi dolorem, animi tenetur qui laborum asperiores. Ea sapiente labore maiores odio.
                  </p>
              </div>
              <div className={ styles.aboutDescription }>
                  <div className={ styles.aboutDescItem }>
                      <Image src={ ImageCurring1 } alt={"Image Seção Sobre"} />
                      <div>
                          <h3>Amet minim mollit</h3>
                          <p>Amet minim mollit non deserunt ullam co est sit.</p>
                      </div>
                  </div>
                  <div className={ styles.aboutDescItem }>
                      <Image src={ ImageCurring2 } alt={"Image Seção Sobre"}/>
                      <div>
                          <h3>Amet minim mollit</h3>
                          <p>Amet minim mollit non deserunt ullam co est sit.</p>
                      </div>
                  </div>
                  <div className={ styles.aboutDescItem }>
                      <Image src={ ImageCurring3 } alt={"Image Seção Sobre"}/>
                      <div>
                          <h3>Amet minim mollit</h3>
                          <p>Amet minim mollit non deserunt ullam co est sit.</p>
                      </div>
                  </div>
                  <div className={ styles.aboutDescItem }>
                      <Image src={ ImageCurring4 } alt={"Image Seção Sobre"}/>
                      <div>
                          <h3>Amet minim mollit</h3>
                          <p>Amet minim mollit non deserunt ullam co est sit.</p>
                      </div>
                  </div>
                  
              </div>
          </div>
      </section>
  );
}

export default index