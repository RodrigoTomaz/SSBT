"use client";
//Features Next
import Image from "next/image";
//Styles
import styles from "./styles.module.scss";
//Hooks
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
//Image
import Image1 from "/public/images/image2.png"
import Image2 from "/public/images/image3.png";


const index = () => {
    // Reference for Container Effect

    const container = useRef(null);

    // Statement scrollYProgress - Library Framer-Motion

    const { scrollYProgress } = useScroll({
        target: container, 
        offset: ["start start", "end end"],
    });
    // Variables Effects 

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    // Images 

    const images = [
        {
            src: Image1,
            scale: scale4
        }, 
        {
            src: Image2,
            scale: scale5
        },
        {
            src: Image2,
            scale: scale8
        },
        {
            src: Image2,
            scale: scale9
        },
        {
            src: Image2,
            scale: scale5
        }
    ];

    return (
        <div ref={ container } className={ styles.prodStikyEffect }>
            <div className={ styles.stiky }>
                <div className={ styles.element }>

                    {
                        images.map(({ src, scale }, index) => {
                            return (
                                <motion.div style={{ scale: scale }} className={ styles.element }>
                                    <motion.h2
                                    >Todos os Produtos</motion.h2>
                                    <div className={ styles.imageContainer }>
                                        <Image 
                                            src={ src }
                                            fill={ true }
                                        />
                                    </div>
                                </motion.div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default index;