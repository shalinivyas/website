// import { logDOM } from "@testing-library/dom";
import React from "react";
import myLogo from "../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-80} className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about_me" offset={-80} className="nav-link" href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="education" offset={-80} className="nav-link" href="#">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-80} className="nav-link" href="#">Experience</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth={true} to="projects" offset={-80} className="nav-link" href="#">Projects</Link>
                        </li> */}
                        {/* <li className="nav-item resume-button"> */}
                            <a className="resume-button nav-link" target="_blank" smooth={true} offset={-80} href="https://drive.google.com/file/d/1X6A-wfkWFTMcO__lzBZoOBC_rWfe6Hth/view?usp=share_link">Resume</a>
                        {/* </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
