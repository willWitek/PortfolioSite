import React from 'react';
import {
    Routes,
    Route,
    useLocation
  } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes(){
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/home' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/contact' element={<Contact/>}></Route>
            </Routes>
        </AnimatePresence>
    );
}
 
export default AnimatedRoutes;