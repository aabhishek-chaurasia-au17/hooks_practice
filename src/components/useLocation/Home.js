import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
// import Nav from "./Nav";
import About from "./About";
import Index from "./Index";
import Contact from "./Contact";

const Home = () => {
    return (
        <BrowserRouter>
            {/* <Nav /> */}
            <Route path="/Index">
                <Index />
            </Route>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>
        </BrowserRouter>
    )
}

export default Home