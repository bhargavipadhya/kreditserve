import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import React from "react";

const Navigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Navigation;
