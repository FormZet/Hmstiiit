import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import { BrowserRouter } from "react-router-dom";
require ('bootstrap');


ReactDOM.render(
	<BrowserRouter>
			<App />
		</BrowserRouter>,
 	document.getElementById('root')
 );
