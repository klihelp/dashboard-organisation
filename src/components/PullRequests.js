import React from 'react';
import PullRequest from './PullRequest';

export default function Repos(props) {
	if (props.items.length === 0) {
		return null;
	}
	return (
		<div className="PullRequests">
			<span>PR:</span>
			<div className="List List--pullRequests">
				{ props.items.map((repo, i) => <PullRequest key={i} data={repo} />) }
			</div>
		</div>
	)
}
