import React from "react";
import "../App.css";
import {API} from "../utils/API.js"


class Save extends React.Component {
    state = {subject:'', date:'', hoursSlept:'', description:''};
    
    
    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        let { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        console.log("here is the state: " , this.state);
        API.saveDream(this.state);
        let { name, value } = "";
        this.setState({
            [name]: value
        });
        
    }

render(){
    return (
        <div className="save">
            <h1>Save Your Dream</h1>
            <form id="saveform">
                <div className="form-group">
                    <div>
                        <label for="savesubject">Subject: </label>
                        <input type="text" onChange={this.handleInputChange} id="savesubject" name="subject" />
                    </div>
                    <div>
                        <label for="date">Date: </label>
                        <input type="date" onChange={this.handleInputChange} id="date" name="date" />
                    </div>
                    <div>
                        <label for="hours">Hours Slept: </label>
                        <input type="text" onChange={this.handleInputChange} id="hours" name="hoursSlept" />
                    </div>
                    <div>
                        <label for="desc">Description: </label>
                        <br></br>
                        <textarea name="description" form="saveform" onChange={this.handleInputChange}></textarea>
                    </div>
                    <br></br>
                    <button onClick={this.submitHandler} type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
}
}

export default Save;