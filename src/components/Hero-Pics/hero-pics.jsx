import React from 'react';
import scss from '../../styles/main.scss';



export default class HeroPics extends React.Component {
	render() {
		let heroes = this.props.pics.map(hero => {
			return(
				<div className="col-md-3">
					<div className="card">
							
						<div className="card-body">

							<img src={hero.img}/>
							<h2>{hero.name}</h2>	

					</div>
					</div>
				</div>	
			)
		});
	

		return(
			<>
				<div className="container">
					<h1>Список героев</h1>
					<div className="row">
						{heroes}
					</div>
				</div>
			</>
		);
	}
}
