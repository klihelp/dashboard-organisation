import React from 'react';

export default function PullRequest(props) {
	let {data} = props;
	return (
		<article className="PullRequest">
			<a href={ data.html_url } title={ data.body || "No body" }>{ data.title }</a>
		</article>
	)
}
