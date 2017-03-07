//import React, { Component } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import { Grid } from 'reflexbox'

var marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state={inputText: '', outputText: ''};
  }

  handleChange(e) {
    this.setState({inputText: e.target.value, outputText: e.target.value});
  }

  getMarkdownText(text) {
    var rawMarkup = marked(text, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="App">  
		<Grid col={6} px={2}>
			<textarea className="inputBox" value={this.state.inputText}
               onChange={this.handleChange} />
		</Grid>
		{/*<input value={this.state.outputText} />*/}
		<Grid col={6} px={2}>
			<div dangerouslySetInnerHTML={this.getMarkdownText(this.state.outputText)} />
		</Grid>
      </div>
    );
  }
}

export default App;
