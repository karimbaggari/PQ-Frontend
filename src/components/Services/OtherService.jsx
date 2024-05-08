import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import parse from 'html-react-parser'
import styles from "../../style";
import { MoreServices } from "../../constants/index";
import { fadeIn } from "../../utils/motion";

const OtherServices = ({ index, icon, service1, service2, service3, service4, service5, next }) => {
  const title = [service1, service2, service3, service4, service5, next]
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full p-[1px] rounded-[20px]"
      >
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
          className={`rounded-[20px]  cursor-pointer ${title[index] === "Be Next" ? "bg-transparent border-2 border-indigo-500" : "bg-indigo-900"} py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col`}
        >
          <div className="w-14 h-14">
            {parse(icon)}
          </div>

          <h3 className="text-white text-[20px] font-bold text-center">
            {title[index]}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const ExtraServices = (props) => {
  console.log("from growth ",props)
  return (
    <>
      <motion.div>
        <p className={styles.heading2}>Introduction</p>
        <h2 className={`${styles.heading2} text-indigo-700`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Java TypeScript and
        JavaScript, and expertise in frameworks like React, Angular, Node.js, Spring Boot. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {MoreServices.map((service, index) => (
          <OtherServices key={index} index={index} icon={service.icon} {...service} service1={props.service1} service2={props.service2} service3={props.service3} service4={props.service4} service5={props.service5} next={props.next}/>
        ))}
      </div>
    </>
  );
};

export default ExtraServices;