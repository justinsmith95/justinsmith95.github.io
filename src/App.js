import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useHistory,
    Redirect,
    Link,
    AppContext,
} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import BlogHeader from './BlogHeader';
import Blog from './Blog';
import Contact from './Contact';
import Splash from './Splash';
import Projects from './Projects';



function App() {
 
 
 
 
    return (
        <Router>
            <BlogHeader

            />
            <p></p>

            <Routes>
                <Route path="/Blog" element={<Blog />} />

                <Route path="/Projects" element={<Projects />} />

                <Route path="/Contact" element={<Contact />} />
              
               <Route path="/Splash" element={<Splash />} />
            </Routes>

        </Router>
    );
}

export default App;
