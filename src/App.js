import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Redirect,
    Link,
    AppContext,
} from "react-router-dom";
import BlogHeader from './BlogHeader';
import Blog from './Blog';
import Contact from './Contact';
import Splash from './Splash';
import Projects from './Projects';



function App() {
 
 
 
 
    return (
        <Router>
            {/* <AppContext.Provider value={InitialContext}> */}
            <BlogHeader

            />

            <Switch>
                <Route path="/Blog">
                    <Blog

                    />
                </Route>

                <Route path="/Projects">
                    <Projects
                    />
                </Route>

                <Route path="/Contact">
                    <Contact />
                </Route>
              
                <Route path={["/", "/home", "*"]}>
                   <Splash
                    />
                </Route>
            </Switch>
            
        </Router>
    );
}

export default App;
