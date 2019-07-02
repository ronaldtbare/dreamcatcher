import React from "react";
import "../App.css";
import Dream from "./Dream.js";
import { API } from "../utils/API.js";

class DreamList extends React.Component {
    state = { dreams: [] };

    editDream(subject, date, hoursSlept, description) {
       
        const dreamdata = {
            subject,
            date,
            hoursSlept,
            description,
        }
        console.log("dreamdata is: ", dreamdata)

        API.editDream(dreamdata);
        this.setState({dreams: this.state.dreams.filter(dream => dream.subject !== subject)})
    }

    fetchDreams() {
        console.log("FETCHED dreams!!!!!!!!!")
        fetch(`/dreamlist/${this.props.match.params.searchTerm}`)
            .then(response => response.json())
            .then(data => this.setState({ dreams: data.items }))
            .then(data => console.log(data.items))
            .catch(error => console.log);
    }
    
    componentWillMount() {
        this.fetchDreams();  
    }
    
    render() {
        return (
            <div className="results">
               
               results
               {Dream}
            </div>
        )
    }
}

export default DreamList;