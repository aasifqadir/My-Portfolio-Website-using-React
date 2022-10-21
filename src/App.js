import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Books } from "./components/Books";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar
          home="Home"
          experience="Experience"
          about="Certifications"
          books="Education"
          contact="Contact"
        />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
