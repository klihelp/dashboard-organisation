import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {
	render() {
		return (
			<div className="Events">
				{ this.props.events.map((event, i) => <Event key={ i } data={ event }/>) }
			</div>
		)
	}
}

export default Events;
