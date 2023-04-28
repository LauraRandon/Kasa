import React from 'react';
import Header from "../../components/header/header"
import HomeBanner from "./HomeBanner"
import DisplayCards from "./DisplayCards"
import Footer from "../../components/footer/footer"

const Home = () => {
    return(
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home