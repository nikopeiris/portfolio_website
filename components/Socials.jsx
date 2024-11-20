import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/nikopeiris"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/shenol-peiris-91a203272/"},
    {icon: <FaYoutube/>, path:""},
    {icon: <FaTwitter/>, path:""},
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;