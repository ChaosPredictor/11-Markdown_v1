//import React, { Component } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {inputText: '', outputText: ''};
  }

  handleChange(e) {
    this.setState({inputText: e.target.value, outputText: e.target.value.toUpperCase()});
  }

  render() {
    return (
      <div className="inputBox">
        <input value={this.state.inputText}
               onChange={this.handleChange} />
		<input value={this.state.outputText} />
      </div>
    );
  }
}

export default App;
