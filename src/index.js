import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Col } from 'react-bootstrap';

ReactDOM.render(
	<div>
		<h1 className="title">Markdown Previewer</h1>
		<App />
		<footer>
			<Col md={6}>coded by <a class="text-danger" target="_blank" href="https://www.freecodecamp.com/chaospredictor">Chaos Predictor</a></Col>
			<Col md={6} className="rightFooter">souces in <a class="text-danger" target="_blank" href="https://github.com/ChaosPredictor/11-Markdown">GitHub</a></Col>
		</footer>	
	</div>,
  document.getElementById('root')
);
