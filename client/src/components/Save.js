import React from "react";
import "../App.css";



class Save extends React.Component {
    state = { };

    submitHandler = e => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchTerm}`);
    }
render(){
    return (
        <div className="save">
            <h1>Save Your Dream</h1>
            <form id="saveform">
                <div className="form-group">
   
                    <div>
                        <label for="savesubject">Subject: </label>
                        <input type="text" id="savesubject" name="savesubject" />
                    </div>
                    <div>
                        <label for="date">Date: </label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div>
                        <label for="hours">Hours Slept: </label>
                        <input type="" id="hours" name="hours" />
                    </div>
                    <div>
                        <label for="desc">Description: </label>
                        <br></br>
                        <textarea name="desc" form="saveform"></textarea>
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