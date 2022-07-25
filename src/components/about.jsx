import React, { Component } from 'react';
import { motion } from 'framer-motion';

class About extends Component {
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
        }

        return(
            <motion.div class="container col-xxl-8 px-4 mt-5 pt-5" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition:{duration:0.5}}}>
                <div class="row flex-lg-row align-items-center justify-content-center g-5 py-5" style={marginStyle}>
                    <div class="col-10 col-sm-8 col-lg-6 px-5 space-between">
                        <img src="/images/headshot.jpg" class="d-block mx-auto img-fluid" alt="My face!" width="600" height="350" loading="lazy"/>
                    </div>
                    <div class="col-lg">
                        <h1 class="display-5 fw-bold lh-1 mb-3 px-5" style={textStyle}>Who am I?</h1>
                        <p class="lead px-5" style={textStyleSmall}>I am a data scientist and web developer focused on using math to solve real human problems. I graduated from Fordham University Magna Cum Laude with a degree in Math and Computer Science. While at Fordham, I worked with Drs. Daniel Leeds and Damian Lyons researching novel methods for low resolution image recognition for implementation in drone target recognition systems.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
}
 
export default About;