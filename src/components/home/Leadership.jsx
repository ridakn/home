import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Service from "../../editable-stuff/service.jpg"
import Culture from "../../editable-stuff/culture.jpg"

const Leadership = () => {
    return (
        <div id="leadership" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#fdfaff'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center"><strong>Sci-Tech Student Research Seminar</strong></h1>
                {/* <p className="lead text-center" style={{fontSize:'22px'}}>
                    Sci-Tech Student Research Seminar Series, Amity University
                </p><br/><br/> */}
                <br/>
                <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                  <p className="lead text-left">
			Presented a project to students and faculty of Amity University on the topic 
			“Analysis of Airlines' User Tweets to Understand Consumer Sentiment.” at the 
			Sci-Tech Student Research Seminar Series, Amity University.
			
			I came <strong>1st Runner Up</strong>.
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
                <Carousel>
                    <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Culture}
                    alt="culture"
                    width="615"
                    height="350"
                  /> 
                  </Carousel.Item>
                {/* </div>
                </div>
                <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Service}
                    alt="service"
                    width="615"
                    height="350"
                  /> 
                  </Carousel.Item>
                </Carousel>
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Leadership;