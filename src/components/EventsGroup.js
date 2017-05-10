import React from 'react';
import Event from './Event';

export default function EventsGroup (props) {
	return (
		<article>
			<h2>{ props.name }</h2>
			{ props.events.map((event, index) => <Event key={ index } event={ event }/>) }
		</article>
	)
}
