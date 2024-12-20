import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        text: "(+64)220873591",
    },
    {
        icon: <FaEnvelope />,
        text: "Nikopeiris123@gmail.com",
    },
];

const Footer = () => {
    return (
        <footer className="py-6 xl:py-10">
            <div className="container mx-auto relative flex flex-col text-white/90">
                {info.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center gap-4">
                            {item.icon}
                            <h1>{item.text}</h1>
                        </div>
                    );
                })}
                <div className="flex justify-center items-center gap-1 xl:flex-row flex-col">
                    <h1 className="flex justify-center items-center">©2025 Shenol Niko Peiris.</h1>
                    <h1 className="flex justify-center items-center">All rights reserved.</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;