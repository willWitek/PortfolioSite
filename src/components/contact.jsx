import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import {BsCalendarFill} from 'react-icons/bs';

class Contact extends Component {
    render() { 
        const textStyle = {
            fontFamily:"Bodoni Moda",
            color: "rgba(0,0,0,0.8)",
            fontWeight: 500,
        };
        const textStyleSmall = {
            fontFamily:"Roboto Mono",
            color: "black",
        };
        const marginStyle ={
            marginTop:"max(50px, 5vh)",
        };

        return (
            <motion.div class="container col-xxl-8 px-4 mt-5 pt-5" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition:{duration:0.5}}}>
            <div class="row flex-lg-row align-items-flex-start justify-content-start g-5 py-5" style={marginStyle}>
                <div class="col-lg py-4 mb-4">
                    <h1 class="display-5 fw-bold lh-1 mb-3 px-5" style={textStyle}>Let's connect!</h1>
                    <a href="mailto:williampwitek@gmail.com"><p class="lead px-5" style={textStyleSmall}><FaEnvelope/> williampwitek@gmail.com</p></a>
                    <p class="lead px-5" style={textStyleSmall}><FaPhoneAlt/> (920) 362-5434</p>
                    <a href="https://calendly.com/william-p-witek/30min"><p class="lead px-5" style={textStyleSmall}><BsCalendarFill/> Schedule a meeting</p></a>
                    <a href="https://www.linkedin.com/in/william-witek/"><p class="lead px-5" style={textStyleSmall}><FaLinkedinIn/> Connect on LinkedIn</p></a>
                </div>
            </div>
        </motion.div>
        );
    }
}
 
export default Contact;