import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Header,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  StarsCanvas,
} from "./components";
import styles from "./style";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <StarsCanvas />
        <div className="relative z-0">
          <Header />
          <StarsCanvas />
        </div>
        <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>

        </div>
      </div>
      <StarsCanvas />
    </BrowserRouter>
  );
}

export default App;
