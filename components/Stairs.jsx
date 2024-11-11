import {motion} from "framer-motion";

const stairAnimation  = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//calculate the reverse index for stair delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index  - 1;
}

const Stairs = () => {
    return (<>
    
    {/* render motion divs */}
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div key={index} variants={stairAnimation} initial="initial"
                animate="animate" exit="exit" transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="h-full w-full bg-white relative"
            />
        );
    })}

    </>
    );
};

export default Stairs;