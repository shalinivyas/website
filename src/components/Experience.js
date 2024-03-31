import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center py-3">
        <h1 className="experience-heading">experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jun 2019-Nov 2021</h3>
            <p className="content">Enhanced the Web page’s performance for faster loading and browsing including cross-browser compatibility and used BrowserStack for unit testing to ensure quality work.  Evaluated UI designs for technical feasibility and modified the implemented functionality to improve performance and provided an organized workflow using a project management tool. Worked on Jira tool to solve and report the bugs for existing websites and ensure efficient web development by supporting developers while resolving website performance issues. Followed Waterfall methodologies with sprint planning every two weeks and daily stand-up meetings to monitor the status. Managed responsive, Mobile-first approach and made necessary changes in the production environment for better user experience. Communicated with users to determine scope of work requested and provided feedback on estimated completion. 
            </p> 
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Dec 2021-Aug 2022</h3>
            <p className="content">Developed the web page for pharmaceutical clients requiring to store the doctor’s information.  Worked closely with the team to provide constant updates to the website as per changing requirements. Provided guidance to subordinate team members and participated in activities designed to improve customer satisfaction and business performance.  Involved in requirements gathering, analysis, testing the production of the web application using the Agile model. </p>   
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Oct 2022-Jan 2023</h3>
            <p className="content">Worked under prof. Erick Jones Jr as a front end developer and analyzed the existing website of the RAID Lab and worked on its enhancement and deployment. Collaborated with other members of research team to create multiple websites of RAID Lab.									
            </p>   
          </div>
        </div>
        {/* - */}
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Feb 2023-Present</h3>
            <p className="content">Assisting in the day-to-day operations of the Academic Success Coaching program and facilitating
workshops on key topics related to student success. Supporting in benchmarking research of persistence programs for specialized populations (first-year,
transfer, and historically at-risk undergraduate students).</p>   
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  )
}

export default Experience;
