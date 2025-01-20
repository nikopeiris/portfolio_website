"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { project_overview } from "@/data/project_data";

const Project = () => {
    const [project, setProject] = useState(project_overview[0]);
    const handleSlideChange = (swiper) => {
        // get current slide
        const currentindex = swiper.activeIndex;
        //update slide
        setProject(project_overview[currentindex]);
    };

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}}
        className="mt-[100px] min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outlined number */}
                            <div className="text-8xl font-extrabold leading-none text-outline">
                                {project.number}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            {/* project description */}
                            <p className="text-white/80 capitalize">{project.description}</p>
                            {/* stack/languages */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* removing last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/40"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl
                                                group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Project/Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={`/projects/${project.live}`}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl
                                                group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Project Page</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[60%] relative xl:-top-[45px]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[470px] mb-9" onSlideChange={handleSlideChange}>
                            {project_overview.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center"></div>
                                    {/*tint*/}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-[10]"></div>
                                    {/* prjects images */ }
                                    <div className="w-full h-full">
                                        <Image src={project.image} fill className="object-contain" alt=""/>
                                    </div>
                                </SwiperSlide>
                            })}
                            
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)]
                            z-20 w-full justify-between" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px]
                            w-[22px] h-[30px] flex justify-center items-center transition-all  hover:text-white/90"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Project;