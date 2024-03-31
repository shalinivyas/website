import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
            <div className="col-full">
                    <h1 className="myname mb-2">Hello! I am Shalini Vyas</h1>

                </div>

                <div className="col-full">
                    <Typed
                    className="work"
                    strings = {["Computer Science Student", "Web Developer", "Application Developer", "Web Designer", "Front End Developer"]}
                    typeSpeed = {80}
                    backSpeed = {50}
                    loop 
                />
                </div>
                
            </div>
        </div>
    )
}

export default Header
