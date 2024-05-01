import React from 'react'
import {
    Navbar,
    Header,
    Footer,
    StarsCanvas,
} from "../components";
import Contact from '../components/Contact';
import styles from '../style';

const ContactPage = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    <StarsCanvas />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
