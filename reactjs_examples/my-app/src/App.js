import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:"Piyush Singh",age:37},
      {name:"Nutan Singh",age:35}
    ]
  }
  switchNameHandler = () =>{ 
    this.setState({
      persons:[
        {name:"Manthan",age:3},
        {name:"Nutan Singh",age:35}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My child name is Jyestha and manthan</Person>
      </div>
     
    );
  }
}

export default App;
