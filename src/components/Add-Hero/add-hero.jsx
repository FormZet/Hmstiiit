import React from 'react';
import scss from '../../styles/main.scss';





export default class addHero extends React.Component {
	
	createHero(e){

		let newHero = {
			name: this.inputName.value,
			desc:this.inputDesc.value,

		}
		console.log(newHero);
		e.preventDefault();
	}


	render(){




		return(
			
			<div className="container">
			<div className="hero-fill">
				<form onSubmit = {(e) => {this.createHero(e)}}> 

				

  <div className="form-group">
    <label for="formGroupExampleInput">Hero Name</label>
    <input type="text" className="form-control heroInput" id="formGroupExampleInput" placeholder="Put hero name here" ref = {(el)=> {this.inputName = el; }} />
  </div>
  <div className="form-group">
    <label for="exampleTextarea">Hero Descreption</label>
    <textarea className="form-control heroDesc" id="exampleTextarea" rows="2" ref = {(el)=> {this.inputDesc = el; }}></textarea>
  </div>
   <div className="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" ref = {(el)=> {this.inputFile = el; }}/>	  
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
			)
		}
	}