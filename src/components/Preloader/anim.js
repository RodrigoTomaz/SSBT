import gsap from "gsap";
// import index from ".";

const transition = {duration: 1, ease: [0.75, 0, 0.24, 1]};

export const letterEffect = {
    initial: {
        y: "100%",
    },
    enter: (i) => ({
        y: 0,
        transition: {...transition, delay: i}
    }),
    exit: {
        y: "100%",
        transition: transition,
    }
}

export function EffectTitle(text){
    const tl = gsap.timeline();

    tl
    .to(text.current, {
        y: -50,
        delay: 2
    })
    return tl;
}
export function EffectContainer(container){
    const tl = gsap.timeline();

    tl
    .to(container.current, {
        yPercent: -100,
        delay: 1
    })
    return tl;
    
}