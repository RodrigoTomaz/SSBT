"use client";
//Styles 
import styles from "@/components/SHome/styles.module.scss";
//Librarys
import gsap from "gsap";
//Features Next
import Link from "next/link";
import Image from "next/image";
//Images
import Image1 from "/public/images/image.png";
import ImageBg from "/public/images/imgbg.png"
//Animations Js
import { EffectHome } from "./animations";
import { useLayoutEffect, useRef } from "react";

const index = () => {
    const image1: any = useRef<null>(null);
    const textContainer: any = useRef<null>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.in",
                    duration: 1,
                }
            });

            tl
            .add(EffectHome(image1, textContainer))
        });
        return () => context.revert();
    }, []);

    return (
        <section className={ styles.Home } id="home">
            <Image
                ref={ image1 }
                src={ Image1 }
                className={styles.image1 }
                alt="Image Woman"
            />
            <Image
                src={ ImageBg }
                alt="Image Woman Bg"
            />

            <div className={ styles.homeContainer}>
                <div ref={ textContainer } className={ styles.homeDescription }>
                    <h1>Seu Cabelo Precisa dos <br /> Cuidados Certos</h1>
                    <p>Tudo pela sua beleza, Salão Beth Beauty</p>
                    <button>
                        <Link href={"/#about"}>
                            Saiba Mais +
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default index