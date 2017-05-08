import React from 'react';
import PullRequest from './PullRequest';

export default function Repos(props) {
	if (!props.items) {
		return null;
	}
	return (
		<section className="List PullRequests">
			{ props.items.map((repo, i) => <PullRequest key={i} data={repo} />) }
		</section>
	)
}
