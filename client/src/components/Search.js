import React from "react";
import "../App.css";

class Search extends React.Component {
    state = { selectedOption: '', searchSubject: '', searchDate: ''};

    onChangeHandlerS = e => {
        e.preventDefault();
        this.setState({ searchSubject: e.target.value });
    }

    onChangeHandlerD = e => {
        e.preventDefault();
        this.setState({ searchDate: e.target.value });
    }



    submitHandler = e => {
        e.preventDefault();
        const searchParameter = (this.state.selectedOption==="subject") ? this.state.searchSubject : this.state.searchDate ;   
        console.log(searchParameter);
        console.log(this.state.selectedOption)
    }

    showHide(showthis)  {
        console.log("this happened", showthis);
        this.setState({
            selectedOption: showthis,
        })
        console.log("state: ", this.state)
    }

    render() {
        const dateClass = this.state.selectedOption === "date" ? "" : "hide";
        const subjectClass = this.state.selectedOption==="subject" ? "" : "hide";
        return (
            <div className="search">
                <h1>Dream Search</h1>
                <form>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Radios" onChange={() => this.showHide("subject")} id="subject" value="subject" checked={this.state.selectedOption==="subject"}/>
                                <label className="form-check-label" for="Radios1">
                                   Subject
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Radios" onChange={() => this.showHide("date")} id="date" value="date" checked={this.state.selectedOption==="date"}/>
                                <label className="form-check-label" for="Radios2">
                                    Date
                                </label>
                        </div>
                        <div className={subjectClass}>    
                            <input type="text" onChange={this.onChangeHandlerS} value={this.state.searchTerm} className="form-control" id="search" aria-describedby="searchHelp" placeholder="Enter a subject term."/>
                        </div>
                    </div>

                    <div className={dateClass}>
                        <label for="searchdate">Enter search date:</label>
                        <input type="date" onChange={this.onChangeHandlerD} id="searchdate" name="searchdate"/>
                    </div>
                        <br></br>
                    <button onClick={this.submitHandler} type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;