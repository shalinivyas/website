import React from 'react';

const Education = () => {
    return (
        <div id="education" className="container-education" style={{background: "#eee"}}>
            <div className="row">
                <div class="col-full">
                    <h2 class="section-title">Education</h2>
                    <div class="centered line"></div>
                </div>
            </div>

            <div class="section-content">
                <div class="school">
                    <div class="col-full">
                        <h3 className="college-name">University of Texas at Arlington</h3>
                        <div class="school-meta"> Master's of Computer Science <span class="bullet">•</span> Computer Science</div>
                    </div>
                    <div class="col-full text-justify mx-6 my-2 collegeDesc">
                    <p>I am a highly motivated and progress-focused Graduate Student with a long-standing background in the IT industry. Learning under Professors like Hao Che, Rama Krishna Koganti, and Mike Siok was a great experience and having such friendly competitive peers brings out the most in me at all times. Being a part of such diversely rich maverick community, is teaching me a lot about other cultures and it always felt like family here.</p>
                    </div>
                    <p><strong>Graduating in:</strong> May 2024</p>

                </div>

                <div className="separator"></div>
                <div class="school">
                    <div class="col-full">
                        <h3 className="college-name">RGPV, India</h3>
                        <div class="school-meta"> Bachelors of engineering <span class="bullet">•</span> Information Technology</div>
                    </div>
                    <div class="col-full text-justify mx-6 my-2 collegeDesc">
                    <p className= "paragraph">Through my bachelor's degree, I was adequately introduced to the world of coding. Over the course of my four years at this institute, I learned the foundations of computer science, including OOPS, algorithms, networks, and many more. I worked on several academic projects using javascript, HTML, CSS, and Core Java. In addition to my education, I participated in dance, drama, debate, and other clubs.</p>                            
                    </div>
                    <p><strong>Graduated:</strong> 2019</p>
                </div>
            </div>
            
        </div>
    )
}

export default Education
