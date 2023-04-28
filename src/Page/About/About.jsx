import React from 'react';
import Header from "../../components/header/header"
import AboutBanner from "../About/AboutBanner"
import AboutContent from "../About/AboutContent"
import Footer from "../../components/footer/footer"

const About = () => {
    return(
        <>
            <Header />
            <AboutBanner />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About