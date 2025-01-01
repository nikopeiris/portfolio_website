"use client";
import "@/components/icons/styling.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import { useState } from "react";
import {
    Css3, 
    Html5,
    Godot,
    C,
    Inventor,
    Python,
    Matlab,
    Tailwind,
    Blender,
} from "@/components/icons/icons";

// about data
const about = {
    title: "About Me",
    description: "I’m a second-year Engineering student at the University of Auckland with a passion for software development, problem-solving, and innovation. Whether it’s exploring creative solutions or mastering new technologies, I thrive on learning and adapting to challenges.",
    info: [
        {
            fieldname: "Name",
            fieldvalue: "Shenol Niko Peiris",
        },
        {
            fieldname: "Phone",
            fieldvalue: "(+64) 220 873 591",
        },
        {
            fieldname: "Years Of Experience Programming",
            fieldvalue: "3",
        },
        {
            fieldname: "Ethnicity/Nationality",
            fieldvalue: "Sri Lankan",
        },
        {
            fieldname: "Email",
            fieldvalue: "Nikopeiris123@gmail.com",
        },
        {
            fieldname: "Languages",
            fieldvalue: "English, Sinhalese",
        },
        {
            fieldname: "Current Institution",
            fieldvalue: "University Of Auckland(UOA)",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "I have graduated High School with a NCEA level 3 Certificate and am currently pursuing a full-time engineering degree at the University of Auckland (UOA)",
    info: [
        {
            institution: "Mount Albert Grammar School(MAGS)",
            degree: "National Certificate of Educational Achievement(NCEA)",
            sub_description: "Achieved level 1 with Achieved, Level 2 & 3 with Merit. In my last year of study i took Calculus, Physics, Chemistry, and Digital Technologies as my main subjects.",
            duration: "2019-2023",
        },
        {
            institution: "University Of Auckland(UOA)",
            degree: "Bachelor of Engineering (Honours)",
            sub_description: "I am currently stuyding at UOA full time as an engineering student and have successfully completed the first year of my studies.",
            duration: "2024-2027",
        },
    ],
};

const skills = {
    title: "Skills",
    description: "Here are the Applications,Software, and Skills I've developed through School, University, and Personal projects. This list continues to grow as I embrace new learning opportunities and challenges.",
    skilllist: [
        {
            icon: <Css3 svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Css",
        },
        {
            icon: <Html5 svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Html",
        },
        {
            icon: <Godot svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Godot Game Engine",
        },
        {
            icon: <C svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "C/C++",
        },
        {
            icon: <Inventor svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Autodesk Inventor",
        },
        {
            icon: <Python svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Python",
        },
        {
            icon: <Matlab svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "MATLAB®",
        },
        {
            icon: <Tailwind svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Tailwind CSS",
        },
        {
            icon: <Blender svg_class={"my-custom-svg"} path_class={"my-custom-path"}/>,
            name: "Blender",
        },
    ],
};

const Resume = () => {
    const [isclicked, setisclicked] = useState(false);

    const trigger_timer = () => {
        setisclicked(true);
        setTimeout(() => {setisclicked(false);}, 200);
    };

    return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:mt-[150px] mt-[90px]">
        <div className="container mx-auto">
            <Tabs defaultValue="about_me" className="flex flex-col gap-[60px]">
                <TabsList className="flex justify-center items-center flex-col xl:flex-row w-full max-w-[600px] mx-auto gap-6">
                    <TabsTrigger value="about_me">About Me</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <a href="/assets/resume/Shenol_Peiris_CV.pdf" download="Shenol_Peiris_CV" className="xl:hidden" onClick={trigger_timer}>
                        <Button variant="outline" size="default" className={`flex items-center ${
                            isclicked ? "hover:bg-accent-clicked" : "" }`}>
                            <span>Download CV</span>
                            <FiDownload/>
                        </Button>
                    </a>
                </TabsList>
                {/* content */}
                <motion.div initial={{opacity: 0}} animate={{ opacity: 1, transition: {delay: 0.8, duration: 0.2, ease: "easeIn"}, }} 
                    className="min-h-[70vh] w-full">
                    {/* about_me */ }
                    <TabsContent value="about_me" className="w-full">
                    <motion.div initial={{opacity: 0}} animate={{ opacity: 1, transition: {delay: 0.2, duration: 0.2, ease: "circIn"}, }}  className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{about.description}</p>
                            <ScrollArea className="h-[500px] rounded-[10px] bg-primary">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] flex justify-center items-center z-40">
                                    {about.info.map((info, index) => {
                                        return (
                                            <li key={index} className="bg-[#0b0b0b] min-h-[150px] py-6 px-10
                                            rounded-xl flex flex-col justify-center items-center border border-accent-hover">
                                                <span >{info.fieldname}</span>
                                                <h3 className="text-xl max-w-[500px] py-1 text-center text-white/90 lg:text-left">{info.fieldvalue}</h3>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </motion.div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, transition: {delay: 0.2, duration: 0.2, ease: "easeIn"}, }} className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[500px] rounded-[10px]">
                                <ul className="grid grid-cols-1 gap-[30px]">
                                    {education.info.map((info, index) => {
                                        return (
                                            <li key={index} className="bg-[#0b0b0b] min-h-[200px] py-6 px-10
                                            rounded-xl flex flex-col justify-center items-center border border-accent-hover">
                                                <span className="text-accent">{info.duration}</span>
                                                <h3 className="text-xl max-w-[500px] py-1 text-center">{info.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/80 text-[18px]">{info.institution}</p>
                                                </div>
                                                <p className="text-[16px] text-white/70 max-w-[500px] py-2 text-center">{info.sub_description}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </motion.div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, transition: {delay: 0.2, duration: 0.2, ease: "easeIn"}, }} className="flex flex-col gap-[30px] text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 xl:gap-[30px] gap-[15px]">
                                    {skills.skilllist.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="bg-[#0b0b0b] h-[150px] rounded-xl flex justify-center items-center border border-accent-hover group my-custom-div">
                                                        <div>
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="font-bold capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    </TabsContent>
                </motion.div>
            </Tabs>
        </div>
    </div>
    );
};

export default Resume;