import React, { useState, useEffect, Profiler } from "react";
import Dell from "../../editable-stuff/boeing.jpg";
import Boeing from "../../editable-stuff/dell-logo.jpg"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#ffffff'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center" ><strong>Experience</strong></h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Dell}
                        alt="dell technologies logo"
                        width="150"
                        height="150"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Freelance (Computer Vision)
 			<br/>
			<strong>Researcher</strong>
                        <br/>
                        June 2020 - January 2021
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Boeing}
                        alt="boeing logo"
                        width="150"
                        height="150"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Santa Clara University
			<br/>
			<strong>Graduate Research Assistant </strong> 
                        <br/>
                        September 2019 – March 2020
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;