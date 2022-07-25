import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import useWindowPosition from './winpos';

function NavBar (){
    function mouseOver(event){
        event.target.style.color = 'rgba(250, 250, 250, 0.6)';
    }

    function mouseOut(event){
        event.target.style.color = '';
    }

    const textStyle = {
        fontFamily:"Bodoni Moda",
        color: "rgba(0,0,0,0.9)",
        fontSize: '10vw',
        fontWeight: 500,
        transition: '0.2s',
    };

    const textStyleSmall = {
        fontFamily:"Roboto Mono",
        color: 'black',
        transition: '0.2s',
    };

    const buttonStyle = {
        border:'none',
    };

    const scrollPos = Math.max(0, 1 - (useWindowPosition() / 130));
    const final = Math.min(0.9, scrollPos**4)

    const opacityStyle = { 
        opacity: final,
    }

    return (
        <nav className="navbar navbar-expand-md fixed-top my-auto" style={opacityStyle}>
            <div className="container-fluid" >
                <Link className="navbar-brand" style={textStyle} to="/home#" onMouseOver={mouseOver} onMouseOut={mouseOut}>WP</Link>
                <button className="navbar-toggler" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <Hamburger className="navbar-toggler-icon" ></Hamburger>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto flex-nowrap">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" style={textStyleSmall} to="/about" onMouseOver={mouseOver} onMouseOut={mouseOut}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={textStyleSmall} to="/contact" onMouseOver={mouseOver} onMouseOut={mouseOut}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
 
export default NavBar;