import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 first">
            <div className="d-flex">
              <p>706 West Mitchell Circle Apt 627, Arlington, Texas</p>
            </div>
            <div className="d-flex">
              <a href="tel:+1(352)327-1999">+1(682)-372-0537</a>
            </div>
            <div className="d-flex">
              <p>shalinivyas1311@gmail.com</p>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-2 col-sm-6 second">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">ABOUT ME</a>
                <br />
                <a className="footer-nav">EDUCATION</a>
              </div>
              <div className="col">
                <a className="footer-nav">PROJECTS</a>
                <br />
                <a className="footer-nav">EXPERIENCE</a>
                <br />
                <a className="footer-nav">CONTACT ME</a>
              </div>
            </div>
          </div> */}
          <div className="col-lg-6 col-md-6 col-sm-6 align-items-center third">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.linkedin.com/in/tp13/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.linkedin.com/in/tp13/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/tp13/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Shalini Vyas | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
