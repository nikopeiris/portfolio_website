import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/project_overview",
    },
    {
        name: "contact me",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col z-[52]">
            {/* logo here */}
            <div className="mt-32 text-center text-2xl relative -top-5">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Shenol<span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-start gap-8">
                {links.map((link, index) => {
                    return (
                    <Link href={link.path} key={index} 
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent-hover hover:border-b-2 hover:border-accent-hover transition-all`}
                    >
                        {link.name}
                    </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>;
};

export default MobileNav;