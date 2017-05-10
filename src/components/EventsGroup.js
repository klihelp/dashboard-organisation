import React from 'react';
import Event from './Event';

export default function EventsGroup (props) {
	return (
		<article className="EventsGroup">
			<strong>{ props.name }</strong>
			<div className="Events">
				{ props.events.map((event, index) => <Event key={ index } event={ event }/>) }
			</div>
		</article>
	)
}
