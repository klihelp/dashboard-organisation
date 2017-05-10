import React from 'react';

function buildCommits(commits) {
	return (
		<div className="Commits">
		{ commits.map((commit, i) => <article className="Commit" href={ commit.html_url } key={ i }>{ commit.message }</article>) }
	</div>
	)
}

export default function Event(props) {
	const event = props.event;
	const payload = event.payload;
	const commits = event.payload.commits;
	const actor = event.actor;

	return (
		<article className="Event">
			<strong>{ actor.login }</strong>@<span>{ payload.ref && payload.ref }</span> $<span>{ event.type }</span>
			{ commits &&  buildCommits(commits) }
		</article>
	)
}
