import Link from "next/link";
// components
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
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
                    <Link href="/contact">
                        <Button>Contact</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">mobile nav</div>

            </div>
        </header>
    );
};

export default Header;