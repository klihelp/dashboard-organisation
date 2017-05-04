import React from 'react';

export default function Repo(props) {
	let { repo } = props;
	return (
		<div className="Repo Nav">
			<a href={ repo.html_url }> {repo.name}</a>
			<a href={ repo.issues_url }>issues ({ repo.open_issues })</a>
			<a href={ repo.pulls_url }>PR</a>
		</div>
	)
}
