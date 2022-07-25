import React from 'react';
import Projects from './projects';
import { motion } from 'framer-motion';
import useWindowPosition from './winpos';

function Home () {
        const textStyleBig = {
            fontFamily:"Bodoni Moda",
            color: "rgba(0,0,0,0.8)",
            marginTop:"max(200px, 20vh)"
        };
        const textStyleSmall = {
            fontFamily:"Roboto Mono",
            color: "rgba(0,0,0,0.7)",
        };

        const fadeHeightA = 150;
        const fadeSpeedA = 175;
        const absPos = useWindowPosition();
        const scrollPosA =  Math.max(0, 1 - (Math.max(0, absPos - fadeHeightA)/fadeSpeedA));
        const rounded = scrollPosA**4

        const opacityStyle = { 
            opacity: rounded,
        }

        const fadeHeightB = 150;
        const fadeSpeedB = 200;
        const scrollPosB =  Math.min(1, Math.max(0,(absPos - fadeHeightB)/fadeSpeedB));

        const secondOpacityScaler = scrollPosB**4;

        const projectStyle = {
            opacity: secondOpacityScaler
        }

        return(
            <motion.div className="text-center" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition:{duration:0.5}}}>
                <div style={opacityStyle} className="mb-5 pb-5 pt-5">
                    <h1 className="display-2 fw-bold text-center" style={textStyleBig}>Data done right.</h1>
                    <div className="col-lg-6 mx-auto border-bottom border-dark mb-5 pb-5">
                        <p className="lead" style={textStyleSmall}>I offer fully customized and scalable data solutions, as well as a full suite of integrated data supply chain tools. My background is in applied statistics for financial problem solving and human parametric analysis. I drive innovation and deliver people-focused results.</p>
                    </div>
                </div>
                <div style={projectStyle}>
                    <Projects/>
                </div>
            </motion.div>
        );
    }
 
export default Home;