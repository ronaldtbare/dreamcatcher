import React from "react";
import "../App.css";
import {API} from "../utils/API.js";

function ResultDream({ subject, date, hoursSlept, description, handleClick }) {
     
    
    return (
        <div className="saveddream">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2>{subject}</h2>
                        <h4>{date}</h4>
                        <h5>Hours Slept: {hoursSelpt}</h5>                    
                    </div>
                    <div className="col-sm">
                        
                        <a className="btn btn-primary" onClick={() => handleClick(subject, date, hoursSlept, description, handleClick)} role="button">Edit</a>

                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-sm">
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultDream;