import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaLinkedinIn, FaInstagram, FaHome, FaHatWizard, FaEnvelope} from 'react-icons/fa';

class Footer extends Component {
    render() { 
        const textStyle = {
            fontFamily:"Bodoni Moda",
            color: "rgba(0,0,0,0.9)",
            fontWeight: 500
        };
        const textStyleSmall = {
            fontFamily:"Roboto Mono",
            color: "black",
            fontSize:'30px',
        };

        return(
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom border-dark pb-3 mb-3" style={textStyleSmall}>
                        <li className="nav-item"><button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="btn btn-lg btn-link "><Link to="/home" className="nav-link px-2 text-dark"><FaHome/></Link></button></li>
                        <li className="nav-item"><button className="btn btn-lg btn-link "><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/william-witek/" className="nav-link px-2 text-dark"><FaLinkedinIn/></a></button></li>
                        <li className="nav-item"><button className="btn btn-lg btn-link "><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wpwitek/" className="nav-link px-2 text-dark"><FaInstagram/></a></button></li>
                        <li className="nav-item"><button className="btn btn-lg btn-link "><Link to="/about#" className="nav-link px-2 text-dark"><FaHatWizard/></Link></button></li>
                        <li className="nav-item"><button className="btn btn-lg btn-link "><Link to="/contact#" className="nav-link px-2 text-dark"><FaEnvelope/></Link></button></li>
                    </ul>
                    <p className="text-center text-dark fw-bold" style={textStyle}>© 2022 William Witek</p>
                </footer>
            </div>
        )
    }
}
 
export default Footer;