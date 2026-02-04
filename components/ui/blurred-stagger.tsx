"use client"

import * as React from "react"
import { motion } from "framer-motion";

export const BlurredStagger = ({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) => {
    const headingText = text;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015,
            },
        },
    };

    const letterAnimation = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
        },
        show: {
            opacity: 1,
            filter: "blur(0px)",
        },
    };

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className={className}
        >
            {headingText.split("").map((char, index) => (
                char === '\n' ? <br key={index} /> :
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        transition={{ duration: 0.3 }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
            ))}
        </motion.h1>
    );
};
