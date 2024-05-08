import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-1/2"
      >
        <section class="flex flex-col justify-between">
          <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p class="mb-4 font-semibold text-indigo-500 w-[500px] md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

            <h1 class="mb-8 text-2xl font-bold text-white sm:text-5xl w-[500px] md:mb-12 md:text-6xl">Revolutionary way to &nbsp; build the web</h1>
            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center w-[500px] lg:justify-start">
              <a href="/" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>
              <a href="/" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");