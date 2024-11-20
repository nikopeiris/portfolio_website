"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from 'react';

const Photo = () => {

    const [isvisible, setisvisible] = useState(false);

    const trigger_timer = (delay) => {
        setisvisible(false);
        setTimeout(() => setisvisible(true), delay);
    };

    useEffect(() => {
        trigger_timer(600);
    }, []);

    return (
    <div className="w-full h-full relative">
        <div className={`w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten ${
          isvisible ? "" : "hidden_pic"
        }`}>
            <div className="relative top-0.5 left-0.5 w-[293px] h-[293px] xl:w-[490px] xl:h-[490px] xl:top-1 xl:left-1 hidden">
                <Image src="/image_test.png" fill priority quality={1} alt="" style={{objectFit:"cover", borderRadius: "50%",}}
                className="object-contain"/>
            </div>

            {/* effect */}
            <motion.svg className="absolute top-0 left-0"
            fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg">
                <motion.circle 
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#de5454"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [90, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}/>
            </motion.svg>
        </div>
    </div>
    );
};

export default Photo;