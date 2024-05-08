import {
    Navbar,
    Footer,
    StarsCanvas,
  } from "../components";
  import styles from '../style';
import StartupHeader from "../components/StartupHeader";
import StartupAdvantages from "../components/StartupAdvantages";
import StartupTestimonials from "../components/StartupTestimonials";
import StartupQuestions from "../components/StartupQuestions";
import StartupCall from "../components/StartupCall";
  function Startups() {
    return (
      <div className="relative z-0 bg-primary">
        <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <StarsCanvas />
            <div className="relative z-0">
              <StartupHeader />
            </div>
            <StartupAdvantages />
            <StartupTestimonials />
            <StartupQuestions />
            <StartupCall />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
  
  export default Startups
  