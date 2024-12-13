"use client";

import Link from "next/link";
// components
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

import { FiDownload } from "react-icons/fi";
import { useState } from 'react';

const Header = () => {

    const [isclicked, setisclicked] = useState(false);

    const trigger_timer = () => {
        setisclicked(true);
        setTimeout(() => {setisclicked(false);}, 200);
    };

    return (
        <header className="py-8 xl:py-12 text-white fixed top-0 left-0 w-full z-[49] bg-primary bg-opacity-[50%] backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        Shenol<span className="text-accent">.</span>
                    </h1>
                </Link>



                {/* desktop nav and contact*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <a href="/assets/resume/Shenol_Peiris_CV.pdf" download="Shenol_Peiris_CV" className={`flex flex-row gap-1 capitalize font-medium hover:border-b-2 ${
                        isclicked ? "text-accent-clicked border-b-2 border-accent-clicked" : "text-white hover:text-accent-hover border-accent-hover"}`} onClick={trigger_timer}>
                            Download CV
                            <FiDownload className="relative top-1.5 left-0"/>
                    </a>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>

            </div>
        </header>
    );
};

export default Header;