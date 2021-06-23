import React, { useState, useEffect, Profiler } from "react";
import Sent from "../../editable-stuff/sentiment.png";
import Mot from "../../editable-stuff/motion.png"

const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Publications = () => {
return (
    <div id="publications" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center"><strong> Publications </strong></h1>
            {/* <h1 className="display-4 pb-5"> Publications </h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Mot}
                        alt="dell technologies logo"
                        width="300"
                        height="150"
                    />
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        <strong>Motion-aware Deep Video Coding Network</strong>
 			<br/>
			April 2020
                        <br/>
                        <a href="https://www.cse.scu.edu/~yliu1/papers/SPIE2020.pdf">Read Here</a>
                    </p>
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Sent}
                        alt="dell technologies logo"
                        width="300"
                        height="100"
                    />
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        <strong>Airline Sentiment Visualization, Consumer Loyalty Prediction using Twitter Data</strong>
			<br/>
			June 2018  
                        <br/>
                        <a href="https://thesai.org/Downloads/Volume9No6/Paper_52-Airline_Sentiment_Visualization.pdf">Read Here</a>
                    </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;