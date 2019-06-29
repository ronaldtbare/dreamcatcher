import React from "react";
import "../App.css";
import ResultDream from "./ResultDream.js";
import { API } from "../utils/API.js";

class ResultsList extends React.Component {
    state = { dreams: [] };

    handleClick(subject, date, hours, description) {
        console.log("TRYING TO SAVE Dream")
        const dreamdata = {
            subject,
            date,
            hoursSlept,
            description,
        }
        console.log("dreamdata is: ", dreamdata)

        API.saveDream(dreamdata);
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
               {ResultDream}
            </div>
        )
    }
}

export default ResultsList;