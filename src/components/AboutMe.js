import React from "react";
import Author from "../Me.jpg";

const AboutMe = () => {
    return (
        <div id="about_me" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5 ">
                    <img className="profile-img" src={Author} alt="My image" />
                    </div>
                    
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p  className="about-para">
                    I am a graduate student pursuing a master's degree in computer science. I am thoroughly studying the subject's fundamental ideas. As a front-end developer with 3 years of work experience, I have honed my skills in creating visually appealing and user-friendly websites and applications using tools such as Visual Studio Code, Browser Stack and Intellij. I possess a strong understanding of JavaScript, MySQL, HTML, CSS, Bootstrap, PHP, jQuery, Core Java and other front-end technologies, and are familiar with industry-standard design principles and development practices. I able to work effectively as part of a team, collaborating with designers, back-end developers, and other stakeholders to bring projects to life. My attention to detail, problem-solving skills, and commitment to creating high-quality work make me an asset to any project.                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
