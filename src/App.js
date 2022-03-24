import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
//https://www.tutorialrepublic.com/codelab.php?topic=css3&file=animate-letter-spacing-property
//https://codepen.io/Coding_Journey/pen/BEMgbX
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/work" element={<Work />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
