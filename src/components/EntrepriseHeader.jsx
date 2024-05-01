import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import styles from "../style";

const EntrepriseHeader = () => {

    return (
        <>
            <motion.div className="flex justify-start items-center w-full relative">
                <h1 className={`${styles.heading2} text-center relative`}>
                    The  <span className="text-indigo-600">#1</span> Partner to your business
                </h1>
            </motion.div>
            <div
                className={`flex xl:flex-row flex-col gap-10 overflow-hidden`}
            >

                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='xl:flex-1 md:h-[550px] h-[550px]'
                >
                    <EarthCanvas />

                </motion.div>
            </div>

        </>
    );
};

export default SectionWrapper(EntrepriseHeader, "entreprise header");