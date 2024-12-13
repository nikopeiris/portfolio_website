import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full mt-[110px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span className="text-accent font-extrabold">Shenol Niko Peiris</span> 
            </h1>
            {/*write text here */}
            <p className="max-w-[500px] mb-9 text-white/80">I’m a first-year Engineering student at the University of Auckland with a passion for software development, 
            problem-solving, and innovation. Whether it’s exploring creative solutions or mastering new technologies, I thrive on learning and adapting to challenges
            <Link href="/resume" className="hover:text-accent transition-all duration-200">...</Link>
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume/Shenol_Peiris_CV.pdf" download="Shenol_Peiris_CV">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload/>
                </Button>
              </a>
              {/* socials */ }
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;