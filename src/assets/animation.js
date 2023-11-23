
export const fadeIn = (direction, delay) => {
    const yValue = direction === "up" ? -80 : direction === "down" ? 80 : 0;
    const xValue = direction === "right" ? -80 : direction === "left" ? 80 : 0;

    return {
        hidden: {
            y: yValue,
            opacity: 0,
            x: xValue,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};