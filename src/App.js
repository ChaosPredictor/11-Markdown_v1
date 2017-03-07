//import React, { Component } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

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
			<Grid>
				<Row className="show-grid">
					<Col md={6}>
						<textarea className="inputBox" value={this.state.inputText} onChange={this.handleChange} />
					</Col>
					<Col md={6}><div dangerouslySetInnerHTML={this.getMarkdownText(this.state.outputText)} /></Col>
				</Row>
			</Grid>
		</div>
    );
  }
}

export default App;
