import { feedback, services } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { StarsCanvas } from "./canvas";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
      What we do? <br className="sm:block hidden" /> Discover our <span className="text-indigo-500">Services</span>
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {services?.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    <StarsCanvas />
  </section>
);

export default Testimonials;