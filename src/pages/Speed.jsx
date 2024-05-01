import {
    Navbar,
    Header,
    Footer,
    StarsCanvas,
  } from "../components";
  import ServicesDropDown from '../components/Services/ServicesDropDown';
  import styles from '../style';
  import ExtraServices from '../components/Services/OtherService';
  function Speed() {
    return (
      <div className="relative z-0 bg-primary">
        <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <StarsCanvas />
            <div className="relative z-0">
              <Header />
              <StarsCanvas />
            </div>
            <StarsCanvas />
            <ServicesDropDown />
            <ExtraServices service1={"Growth"} service2={"Security"} service3={"Cloud"} service4={"Support"} service5={"Maintenance"} />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
  
  export default Speed
  