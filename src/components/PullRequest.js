import React from 'react';

export default function PullRequest(props) {
	let {data} = props;
	return (
		<article className="PullRequest">
			<a href={ data.url }>{ data.title }</a>
		</article>
	)
}
