import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../src/Page/About/About';
import NoMatch from '../Page/NoMatch/NoMatch';
import Home from '../Page/Home/Home';
import Housing from '../Page/Housing/Housing';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;