import React from 'react';

export default function Event(props) {
	const event = props.event;
	const commits = event.payload.commits;
	const actor = event.actor;

	if (!commits) {
		return null;
	}
	return (
		<article className="Event">
			<strong>{ actor.login }</strong>
			<p>{ commits.map((comit, i) => <p key={ i }>{ comit.message }</p>) }</p>
		</article>
	)
}
