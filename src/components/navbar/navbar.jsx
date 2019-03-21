import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link to={'/'} className="navbar-brand" >{this.props.appName}</Link>
	
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <Link to={'/heroList'} className="nav-link">Heroes List<span className="sr-only">(current)</span></Link>
			        </li>
			      <li className="nav-item">
			        <Link to={'/modalPage'} className="nav-link">Modal-Page</Link>
			      </li>
			      <li className="nav-item">
			        <Link to={'/addHero'} className="nav-link">Add Hero</Link>
			      </li>
			    </ul>
			  </div>
			</nav>		
			)
	}
}

