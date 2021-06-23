import React, { useState, useEffect, Profiler } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/resume.pdf";
import Profile from "../../editable-stuff/Profile.jpg"
import {Helmet} from "react-helmet";

import {
  aboutHeading,
  aboutDescription,
} from "../../editable-stuff/configurations.json";
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const AboutMe = () => {
 const [resumeURL] = useState(Pdf);
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#fdfaff'}}>
      <div className="container container-fluid">
        <div className="row" style={divStyle}>
            <div className="col-5 d-none d-lg-inline align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={Profile}
                alt="profilepicture"
                width="375"
                height="375"
              />
            </div>
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center"><strong>{aboutHeading}</strong></h1>
            <p className="lead text-center">{aboutDescription}</p><br/>
            {resumeURL && (
              <p className="lead text-center">
                <a 
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
