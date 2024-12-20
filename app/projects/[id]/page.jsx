"use client";

import { useParams } from 'next/navigation';
import { project_detailed } from '@/data/project_data';
import Image from 'next/image';
import Link from "next/link";
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {BsGithub} from "react-icons/bs";
import React from 'react';
import "@/app/globals.css";
import { useState } from 'react';

const ProjectDetails = () => {
    const {id} = useParams();
    console.log(id);
    const project = project_detailed.find((p) => p.live === id);

    if (!project) {
        return <div className='mt-[100px] pt-12 w-full container mx-auto text-center text-accent'>Project Not Found!!!</div>;
    };

    return (
        <div className="mt-[100px] container mx-auto py-12">
            {/* project title */ }
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <p className='text-lg text-accent mt-2 font-bold capitalize'>{project.category}</p>
            <ul className='flex flex-row'>
                {project.stack.map((item, index) => {
                    return (
                        <li key={index} className="text-md text-accent-clicked">
                            {item.name}
                            {/* removing last comma */}
                            {index !== project.stack.length - 1 && ","}
                        </li>
                    );
                })}
            </ul>
            <p className='text-white/90 flex justify-center items-center text-center w-full container mx-auto mt-6 text-lg font-bold'>{project.description}</p>

            {/* main body */ }
            <div className='mt-6'>
                {project.content.map((item, index) => {
                    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
                    return (
                        <div key={index} className='flex flex-col'>
                            <div>
                                <h1 className="text-xl font-extrabold text-accent mb-2 mt-[30px] capitalize">{item.title}</h1>
                                <div className="w-full">
                                    {item.image && (
                                        <div className={`relative mb-2 xl:ml-4 xl:float-right xl:w-[50%] flex justify-center`} style={{
                                            width: dimensions.width > 0 ? `${dimensions.width}px` : "auto",
                                            height: dimensions.height > 0 ? `${dimensions.height}px` : "auto",}}>
                                            <Image src={item.image} quality={100} alt="" width={dimensions.width > 0 ? dimensions.width : 500}
                                                height={dimensions.height > 0 ? dimensions.height : 400}
                                                className="rounded-lg xl:w-full object-contain border-[2px] border-accent"
                                                onLoad={(img) => {
                                                    setDimensions({
                                                        width: img.naturalWidth,
                                                        height: img.naturalHeight,
                                                    });
                                                }}/>
                                        </div>
                                        
                                    )}
                                    <p className="text-white/80 text-md text-justify">
                                        {item.body.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                                
                            </div>
                            <div className='border-b-2 border-accent'></div>
                        </div>
                    )
                })}
            </div>
            <div className='mt-3 w-[70px] h-[70px] rounded-full'>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                            bg-white/10 flex justify-center items-center group">
                                <BsGithub className="text-white text-3xl
                                group-hover:text-accent"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub Project/Repository</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;