import gsap from "gsap";

export function EffectHome(image, textContainer){
    const tl = gsap.timeline();

    tl
    .set(image.current, {
        xPercent: 100,
        opacity: 0,
    },)
    .to(image.current, {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        delay: 3.6
    })
    .from(textContainer.current, {
        opacity: 0,
        x: -500,
    })
    .to(textContainer.current, {
        x: 0,
        opacity: 1,
        duration: 1,
    })

    return () => tl;
}