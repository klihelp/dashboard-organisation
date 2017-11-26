import React from 'react';
import EventsGroup from './EventsGroup';
import _ from 'lodash';
import withScrollTop from './withScrollTop';

function Events(props) {
	const groups =_.groupBy(props.events, 'repo.name');

	return (

		<div className="Events">
			{ _.map(groups, (group, repo) => <EventsGroup key={ repo } name={ repo } events={ group }/>) }
		</div>
	)
}

export default withScrollTop(Events);
