import React, {Component} from 'react';
import moment from 'moment'
import earthquakes from '../data/earthquakes'

class EarthquakeList extends Component {
	render(){
		return (
			<div className="quake-list">

			  <div className="row">
			    {earthquakes.features.map(earthquake => (
			    	
			    	<div className="col-sm-6" key={earthquake.place}>
			    	  <div className="card" >
			    	    <div className="card-block">
			    	      <h4 className="card-title">{earthquake.title}</h4>
			    	      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
			    	      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.time).format('llll')}</h6>
			    	      <p className="card-text">Coordinates: {earthquake.geometry.coordinates}</p>

			    	      <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>

			    	    </div>
			    	  </div>
			    	</div>
			    ))}
			  </div>

			</div>
		)

	}
}

export default EarthquakeList