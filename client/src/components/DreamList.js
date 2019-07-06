import React from "react";
import "../App.css";
import Dream from "./Dream.js";
import { API } from "../utils/API.js";
import Search from "./Search.js"

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

    fetchDreams(searchParameter) {
        console.log("FETCHED dreams!!!!!!!!!")
        API.getDreamList(`/dreamList/${searchParameter}`)
            .then(response => response.json())
            .then(data => this.setState({ dreams: data }))
            .then(data => console.log(data))
            .then(console.log(searchParameter))
            .catch(error => console.log);
    }
    
    componentWillMount() {
        this.fetchDreams();  
    }
    
    render() {
        return (
            <div className="results">
               
               results for ""
              
               {this.state.dreams.map(el => <Dream
                    subject={el.subject}
                    date={el.date}
                    hoursSlept={el.hoursSlept}
                    description={el.description}
                    dreamID={el._id}
                    deleteDream={(dreamID)=>this.deleteDream(dreamID)}
                    editDream={(dreamID)=>this.editDream(dreamID)}
                
                />)}
            </div>
        )
    }
}

export default DreamList;