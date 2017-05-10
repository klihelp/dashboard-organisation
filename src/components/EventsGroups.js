import React from 'react';
import EventsGroup from './EventsGroup';
import _ from 'lodash';

export default function Events(props) {
	const groups =_.groupBy(props.events, 'repo.name');

	return (

		<div className="EventsGroups">
			{ _.map(groups, (group, repo) => <EventsGroup key={ repo } name={ repo } events={ group }/>) }
		</div>
	)
}
