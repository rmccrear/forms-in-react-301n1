import React from "react";

let data = [
  "Robert",
  "Ajamu",
  "Binaca",
  "Brian",
  "Andrea",
  "Gerard",
  "Anya"
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rawData: data,
      filterBy: "all",
      firstName: "",
      lastName: "" 
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", event.target.firstName.value);
    let name = `${event.target.firstName.value} ${event.target.lastName.value}`
    this.setState({
      rawData: [...this.state.rawData, name],
      firstName: '',
      lastName: ''
    });
  }

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  handleSelect = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState({
      filterBy: value // 'A' or 'B' or 'all' or 'other'
    });
  }

  render() {
    let filteredNames = this.state.rawData;
    if(this.state.filterBy === "A") {
      filteredNames = this.state.rawData.filter((name) => name[0] === "A");
    } else if(this.state.filterBy === "B") {
      filteredNames = this.state.rawData.filter((name) => name[0] === "B");
    } else if(this.state.filterBy === "other") {
      filteredNames = this.state.rawData.filter((name) => name[0] !== "A" && name[0] !== "B");
    }
    let nameList = filteredNames.map((name) => <li>{name}</li>);
    return (
      <>
        <h1>People</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            first name: 
            <input onChange={ this.handleFirstName } type="text" name="firstName" value={this.state.firstName} />
          </label>
          <hr/>
          <label htmlFor="lastName"> last name: </label>
          <input 
            onChange={this.handleLastName} 
            type="text" 
            name="lastName"  
            id="lastName"
            value={this.state.lastName}
          />
          <button type="submit">Go</button>
        </form>
        <hr/>
        <form>
          <select onChange={this.handleSelect} value={this.state.filterBy}>
            <option value="all">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="other">Other</option>
          </select>
        </form>

        <ul>
          {nameList}
        </ul>
      </>
    );
  }

}

export default App;