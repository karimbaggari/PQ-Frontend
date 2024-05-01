import {
  Navbar,
  Header,
  Footer,
  StarsCanvas,
  CardDeal,
  Business,
} from "../components";
import styles from '../style';
import StartupAdvantages from "../components/StartupAdvantages";
import StartupTestimonials from "../components/StartupTestimonials";
import StartupQuestions from "../components/StartupQuestions";
import StartupCall from "../components/StartupCall";
import EntrepriseHeader from "../components/EntrepriseHeader";
import EntrepriseAdvantages from "../components/EntrepriseAdvantages";
import EntrepriseGal from "../components/EntrepriseGal";
import EntrepriseFaq from "../components/EntrepriseFaq";
function Startups() {
  return (
    <div className="relative z-0 bg-primary">
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <StarsCanvas />
        </div>
      </div>
      <div className="relative z-0">
        <EntrepriseHeader />
      </div>
      <EntrepriseAdvantages />
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <EntrepriseGal />
          <CardDeal />
          <Business />
          <EntrepriseFaq />
          <StartupCall />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Startups
