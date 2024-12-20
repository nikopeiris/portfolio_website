import Link from "next/link";
import {usePathname} from "next/navigation";

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
        name: "contact Me",
        path: "/contact",
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} 
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent-hover transition-all hover:border-b-2 hover:border-accent-hover`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;