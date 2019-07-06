import React from "react";
import "../App.css";


function Dream ({subject, date, hoursSlept, description, editDream, handleClick, deleteDream, dreamID}) {

        return (  
            <div className="dream">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <a className="btn btn-primary" onClick={() => editDream(subject, date, hoursSlept, description, handleClick)} role="button">Edit</a>
                            <a className="btn btn-primary" onClick={() => deleteDream(dreamID)} role="button">Delete</a>
                        </div>  
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <h2>Subject: {subject}</h2>
                            <h4>Date: {date}</h4>
                            <h5>Hours Slept: {hoursSlept}</h5>                    
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <p className="description">Description: {description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default Dream;