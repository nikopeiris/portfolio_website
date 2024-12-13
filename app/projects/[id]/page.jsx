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

const ProjectDetails = () => {
    const {id} = useParams();
    // const id = searchparams.get('id');
    console.log(id);
    const project = project_detailed.find((p) => p.live === id);

    if (!project) {
        return <div className='mt-[100px]'>Project Not Found</div>;
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
            <div className='mt-6 space-y-8'>
                {project.content.map((item, index) => (
                    <div key={index}>
                        <div>
                            <h1 className="text-xl font-extrabold text-accent mb-2 mt-[50px] capitalize">{item.title}</h1>
                            <div className="w-full">
                                {item.image && (
                                    <div className="relative xl:w-[50%] lg:h-[400px] h-[350px] xl:float-right xl:ml-4 mb-3">
                                        <Image src={item.image} fill alt="" className="rounded-lg" />
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
                        <div className='border border-accent mt-[10px]'></div>
                    </div>
                ))}
            </div>
            <div className='mt-3 w-[70px] h-[70px] rounded-full'>
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
            </div>
        </div>
    );
};

export default ProjectDetails;